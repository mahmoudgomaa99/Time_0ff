import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';
import navigation from 'navigation/index';
import { useNavigation } from '@react-navigation/native';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import Fonts from 'values/fonts';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';
import { h, w } from 'values/Dimensions';
import Button from 'components/molecules/Button';
import { addCardSheme } from 'src/formik/schema';
import { selectLanguage } from 'redux/language';
import env from '../../../../.env.json';
import Toast from 'react-native-toast-message';

const AddCard = () => {
  const navigation = useNavigation();
  const user = useSelector(selectCurrentUser);
  const lang = useSelector(selectLanguage);
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Svg name="leftArrow" bgColor="#000" size={20} />
        </TouchableOpacity>
        <TextView
          title={'Add a card'}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
            textAlign: 'center',
            fontFamily: Fonts.RobotoMedium,
          }}
        />
        <View />
      </View>
      <Formik
        validationSchema={addCardSheme(lang)}
        initialValues={{
          merchantCode: env.MERCHANT_CODE,
          customerProfileId: user?._id,
          customerMobile: user?.phone,
          customerEmail: user?.email,
          cardNumber: '',
          cardAlias: '',
          expiryYear: '',
          expiryMonth: '',
          cvv: '',
        }}
        onSubmit={async values => {
          setIsLoading(true);
          try {
            const response = await fetch(env.Fawrey_Add_Card_Dev_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });
            const data = await response.json();
            setIsLoading(false);
            switch (data?.statusCode) {
              case 200: {
                Toast.show({
                  type: 'success',
                  text2: 'Card added successfully',
                });
                navigation.goBack();
                break;
              }
              case 17003: {
                //card already exists
                Toast.show({
                  type: 'error',
                  text2: 'Card already exists',
                });
                break;
              }
              case 9910: {
                // invalid mobile number
                Toast.show({
                  type: 'error',
                  text2: 'Invalid mobile number',
                });
                break;
              }
              case 9919: {
                // invalid card date
                Toast.show({
                  type: 'error',
                  text2: 'Invalid card date',
                });
                break;
              }
              default: {
                Toast.show({
                  type: 'error',
                  text2: 'Something went wrong',
                });
                break;
              }
            }
          } catch (e) {
            setIsLoading(false);
            console.log(e);
          }
        }}>
        {props => (
          <View
            style={{
              paddingTop: 20,
            }}>
            <TextView title={'Card Number'} style={styles.label} />
            <TextInput
              style={[
                styles.containerStyle,
                {
                  width: w * 0.9,
                },
              ]}
              placeholder="Card Number"
              keyboardType="number-pad"
              onChangeText={props.handleChange('cardNumber')}
              onChange={(e: any) => {
                if (e.nativeEvent.text.length === 3) {
                }
              }}
              value={props.values.cardNumber}
              placeholderTextColor={'#979797'}
            />
            {props.errors.cardNumber && (
              <Text
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginLeft: 20,
                  fontFamily: Fonts.RobotoRegular,
                }}>
                {props.errors.cardNumber}
              </Text>
            )}
            <TextView title={'Your name on the card'} style={styles.label} />
            <TextInput
              style={[
                styles.containerStyle,
                {
                  width: w * 0.9,
                },
              ]}
              placeholder="Card Name"
              onChangeText={props.handleChange('cardAlias')}
              onChange={(e: any) => {
                if (e.nativeEvent.text.length === 3) {
                }
              }}
              value={props.values.cardAlias}
              placeholderTextColor={'#979797'}
            />
            {props.errors.cardAlias && (
              <Text
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginLeft: 20,
                  fontFamily: Fonts.RobotoRegular,
                }}>
                {props.errors.cardAlias}
              </Text>
            )}
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View>
                <TextView title={'Expiry month'} style={styles.label} />
                <TextInput
                  style={[
                    styles.containerStyle,
                    {
                      width: w * 0.25,
                    },
                  ]}
                  placeholder="MM"
                  placeholderTextColor={'#979797'}
                  onChangeText={props.handleChange('expiryMonth')}
                  onChange={(e: any) => {
                    if (e.nativeEvent.text.length === 3) {
                    }
                  }}
                  value={props.values.expiryMonth}
                />
                {props.errors.expiryMonth && (
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 12,
                      marginLeft: 20,
                      fontFamily: Fonts.RobotoRegular,
                      maxWidth: w * 0.25,
                    }}>
                    {props.errors.expiryMonth}
                  </Text>
                )}
              </View>
              <View>
                <TextView title={'Expiry year'} style={styles.label} />
                <TextInput
                  style={[
                    styles.containerStyle,
                    {
                      width: w * 0.25,
                    },
                  ]}
                  placeholder="YY"
                  onChangeText={props.handleChange('expiryYear')}
                  onChange={(e: any) => {
                    if (e.nativeEvent.text.length === 3) {
                    }
                  }}
                  value={props.values.expiryYear}
                  placeholderTextColor={'#979797'}
                />
                {props.errors.expiryYear && (
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 12,
                      marginLeft: 20,
                      fontFamily: Fonts.RobotoRegular,
                      maxWidth: w * 0.25,
                    }}>
                    {props.errors.expiryYear}
                  </Text>
                )}
              </View>
              <View>
                <TextView title={'CVV'} style={styles.label} />
                <TextInput
                  style={[
                    styles.containerStyle,
                    {
                      width: w * 0.25,
                    },
                  ]}
                  placeholder="***"
                  onChangeText={props.handleChange('cvv')}
                  onChange={(e: any) => {
                    if (e.nativeEvent.text.length === 3) {
                    }
                  }}
                  value={props.values.cvv}
                  placeholderTextColor={'#979797'}
                />
                {props.errors.cvv && (
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 12,
                      marginLeft: 20,
                      fontFamily: Fonts.RobotoRegular,
                      maxWidth: w * 0.25,
                    }}>
                    {props.errors.cvv}
                  </Text>
                )}
              </View>
            </View>
            <Button
              type="primary"
              label={'Continue'}
              onPress={props.handleSubmit}
              isLoading={isLoading}
              style={{
                marginHorizontal: 20,
                marginTop: h * 0.05,
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddCard;
