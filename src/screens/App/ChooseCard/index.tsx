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

const ChooseCard = () => {
  const navigation = useNavigation<any>();
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
  const [cardToken, setCardToken] = useState<any>();

  useEffect(() => {
    if (isFocused) {
      dispatch(User.thunks.doGetCards(user._id));
    }
  }, [isFocused]);

  const renderDots = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {[...Array(4)].map(i => (
          <View key={i} style={styles.dot} />
        ))}
      </View>
    );
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 0.8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
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
          <Svg name="leftArrow" bgColor="#000" size={20} />
        </TouchableOpacity>
        <TextView
          title={'Choose a card'}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
            textAlign: 'center',
            fontFamily: Fonts.RobotoMedium,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('addCard');
          }}
          style={styles.add}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

      {(cards || [])?.map((card, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => {
              setCardToken(card?.token);
              console.log('dd');
            }}
            style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={[
                  styles.radioButton,
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
      <CvvModal CustomModal={CustomModal} closeModal={closeCustomModal} />
    </View>
  );
};
export default ChooseCard;
