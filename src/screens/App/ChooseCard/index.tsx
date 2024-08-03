import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Text,
} from 'react-native';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import Svg from 'atoms/Svg';
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import User, { selectCards, selectCurrentUser } from 'redux/user';
import { useAppDispatch } from 'redux/store';
import { selectToken } from 'redux/tokens/reducer';
import Fonts from 'values/fonts';
import { Use } from 'react-native-svg';
import { useLoadingSelector } from 'redux/selectors';
import COLORS from 'values/colors';
import Button from 'components/molecules/Button';
import { h } from 'values/Dimensions';
import useModalHandler from 'hooks/Modal';
import CvvModal from './Components/CvvModal';
import Toast from 'react-native-toast-message';
import { set } from 'lodash';
import { unwrapResult } from '@reduxjs/toolkit';
import { images } from 'src/assets/images';
import PayModal from './Components/PaymentModal';
import Journeys from 'redux/journey';
import { selectIsDarkMode } from 'redux/DarkMode';

const ChooseCard = () => {
  const navigation = useNavigation<any>();
  const isDarkMode = useSelector(selectIsDarkMode);
  const isFocused = useIsFocused();
  const dispatch = useAppDispatch();
  const { openCustomModal, closeCustomModal, CustomModal } = useModalHandler({
    isCenter: true,
  });
  const cards = useSelector(selectCards);
  const data = useRoute<any>().params;
  const user = useSelector(selectCurrentUser);
  const isLoading = useLoadingSelector(User.thunks.doGetCards);
  const isDeleteLoading = useLoadingSelector(User.thunks.doDeleteCard);
  const [isPayLoading, setIsPayLoading] = useState(false);
  const [cardToken, setCardToken] = useState<any>();
  const [cvv, setCvv] = useState<any>();
  const [url, setUrl] = useState<any>();
  const [refNum, setRefNum] = useState<any>();
  const {
    openCustomModal: openPayModal,
    closeCustomModal: closePayModal,
    CustomModal: CustomPayModal,
  } = useModalHandler({
    isCenter: false,
  });

  useEffect(() => {
    if (isFocused) {
      dispatch(User.thunks.doGetCards(user._id));
    }
  }, [isFocused]);

  useEffect(() => {
    if (cvv?.length === 3) {
      setIsPayLoading(true);
      dispatch(
        Journeys.thunks.doAddBooking({
          journey_slot_id: data?.slot_id,
          number_of_seats: Number(data?.capacity),
          agency_id: data?.journey?.agency_id,
        }),
      )
        .then(unwrapResult)
        .then(res => {
          console.log(res, 'res');
          setRefNum(res?.data?._id);
          dispatch(
            User.thunks.doPaymentWithCard({
              userName: user.name,
              userMobile: user.phone,
              userEmail: user.email,
              userId: user._id,
              cardToken: cardToken,
              cvv: cvv,
              merchantRefNum: res?.data?._id,
              amount: data?.journey?.price * data?.capacity,
              language: 'en-gb', // "en-gb" or "ar-eg"
              chargeItems: [
                {
                  itemId: 1,
                  description: data?.description,
                  price: data?.journey?.price,
                  quantity: data?.capacity,
                },
              ],
              description: data?.description,
            }),
          )
            .then(unwrapResult)
            .then(response => {
              setUrl(response?.nextAction?.redirectUrl);
              openPayModal();
              setIsPayLoading(false);
              setCvv('');
            })
            .catch(err => {
              setCvv('');
              Toast.show({
                type: 'error',
                text2: err.statusDescription,
              });
              dispatch(
                Journeys.thunks.doUpdateBooking({
                  id: res?.data?._id,
                  status: 'failed',
                }),
              )
                .then(unwrapResult)
                .then(() => {
                  console.log('booking updated');
                  setIsPayLoading(false);
                })
                .catch(err => {
                  console.log(err);
                  setIsPayLoading(false);
                });
            });
        })
        .catch(err => {
          setIsPayLoading(false);
          console.log(err);
          Toast.show({
            type: 'error',
            text2: err.message,
          });
          setCvv('');
        });
    }
  }, [cvv]);

  useEffect(() => {
    if (url?.length > 0) {
      openPayModal();
    }
  }, [url]);

  const renderDots = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {[...Array(4)].map(i => (
          <View key={i} style={styles(isDarkMode).dot} />
        ))}
      </View>
    );
  };

  if (isLoading || isPayLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
        }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles(isDarkMode).container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Svg
            name="leftArrow"
            bgColor={isDarkMode ? '#fff' : '#000'}
            size={20}
          />
        </TouchableOpacity>
        <TextView
          title={'Choose a card'}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: isDarkMode ? '#ffff' : '#000',
            textAlign: 'center',
            fontFamily: Fonts.RobotoMedium,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('addCard');
          }}
          style={styles().add}>
          <Text style={styles().plus}>+</Text>
        </TouchableOpacity>
      </View>

      {(cards || [])?.map((card, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => {
              setCardToken(card?.token);
            }}
            style={styles().card}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={[
                  styles().radioButton,
                  {
                    backgroundColor:
                      card?.token === cardToken ? COLORS.primary : COLORS.white,
                  },
                ]}
              />
              <Image
                source={images.card}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  marginBottom: 10,
                }}
              />
              {renderDots()}
              <TextView
                title={'  ' + card?.lastFourDigits}
                style={{
                  fontFamily: Fonts.RobotoMedium,
                  color: isDarkMode ? '#ffffff99' : '#0000008c',
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setCardToken(card?.token);
                dispatch(
                  User.thunks.doDeleteCard({
                    userId: user._id,
                    cardToken: card?.token,
                  }),
                )
                  .then(unwrapResult)
                  .then(() => {
                    dispatch(User.thunks.doGetCards(user._id));
                    setCardToken(null);
                    Toast.show({
                      type: 'success',
                      text1: 'Card deleted',
                    });
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }}
              style={{
                marginRight: 10,
              }}>
              {isDeleteLoading && cardToken == card?.token ? (
                <ActivityIndicator size="small" color={COLORS.primary} />
              ) : (
                <Svg name="trash" size={40} />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      ))}

      <Button
        type="primary"
        label={'Continue'}
        onPress={() => {
          if (cardToken) {
            openCustomModal();
          } else {
            Toast.show({
              type: 'error',
              text1: 'Please choose a card',
            });
          }
        }}
        isLoading={isLoading}
        style={{
          marginHorizontal: 20,
          marginTop: h * 0.05,
        }}
      />
      <CvvModal
        setCvv={setCvv}
        CustomModal={CustomModal}
        closeModal={closeCustomModal}
      />
      <PayModal
        closeModal={closePayModal}
        CustomModal={CustomPayModal}
        url={url}
        refNum={refNum}
      />
    </View>
  );
};
export default ChooseCard;
