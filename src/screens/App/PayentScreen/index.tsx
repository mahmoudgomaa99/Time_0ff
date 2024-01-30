import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {
  Frames,
  CardNumber,
  ExpiryDate,
  Cvv,
  SubmitButton,
} from 'frames-react-native';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import Svg from 'atoms/Svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import env from '../../../../.env.json';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';
import { data } from '../Settings/Components/Card/data';
import { sha256 } from 'react-native-sha256';

const PaymnetScreen = () => {
  const navigation = useNavigation<any>();
  const data = useRoute<any>().params;
  const user = useSelector(selectCurrentUser);
  const [cardNumber, setCardNumber] = useState('');
  const [ExpireyDate, setExpireyDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [sha, setsha] = useState('');
  const FawryPay3DSCard = async (transaction_data: any) => {
    sha256(
      `referenceNumber (if exist) + merchantRefNum + ${
        Number(data?.journey?.price).toFixed(2) + 1.0 + 'pending' + 'PayUsingCC'
      } + fawryFees (if exist) (in two decimal places format 10.00))+ ${
        user?.email + user?.phone + env.SECURITY_KEY
      }`,
    ).then(hash => {
      setsha(hash);
    });

    if (sha?.length > 0) {
      const response = await fetch(
        __DEV__ ? env.FAWREY_DEV_URL : env.FAWREY_PROD_URL,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            merchantCode: env.FAWREY_PROD_URL,
            customerName: user?.name,
            customerMobile: user?.phone,
            customerEmail: user?.email,
            customerProfileId: user?.id,
            cardNumber: cardNumber,
            cardExpiryYear: ExpireyDate?.slice(3, 5),
            cardExpiryMonth: ExpireyDate?.slice(0, 2),
            cvv: cvv,
            // wating for login fawrey account
            merchantRefNum: transaction_data.merchantRefNum,
            amount:  Number(data?.journey?.price).toFixed(2),
            currencyCode: 'EGP',
            language: 'en-gb', // "en-gb" or "ar-eg"
            chargeItems: [],
            enable3DS: true,
            authCaptureModePayment: false,
            returnUrl: 'https://developer.fawrystaging.com',
            signature: sha,
            paymentMethod: 'PayUsingCC',
            description: `Booking ${data?.journey?.journey_name} from ${data?.journey?.agency_name} agency from ${data?.journey?.start_date} to ${data?.journey?.end_date}`,
          }),
        },
      );

      console.log(response.json());
    }
    // return response.json();
  };

  console.log(
    Number(data?.journey?.price).toFixed(2),
    ExpireyDate.slice(0, 2),
    ExpireyDate.slice(3, 5),
    'user',
    data,
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Svg name="leftArrow" bgColor="#000" size={20} />
        </TouchableOpacity>
        <TextView
          title={'Payment'}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
            marginBottom: 40,
            textAlign: 'center',
          }}
        />
        <View style={{ width: 40 }} />
      </View>
      <Frames
        config={{
          debug: __DEV__ ? false : true,
          publicKey: 'pk_test_4296fd52-efba-4a38-b6ce-cf0d93639d8a',
        }}
        cardTokenizationFailed={e => {
          console.log(e.error_type, 'cardTokenizationFailed');
        }}
        cardTokenized={e => {
          Alert.alert(e.token, 'llll');
        }}>
        <CardNumber
          style={styles.cardNumber}
          placeholderTextColor="#9898A0"
          showIcon={true}
          onChange={e => {
            setCardNumber(e.nativeEvent.text);
          }}
        />

        <View style={styles.dateAndCode}>
          <ExpiryDate
            style={styles.expiryDate}
            placeholderTextColor="#9898A0"
            onChange={(e: any) => {
              setExpireyDate(e.nativeEvent.text);
            }}
          />
          <Cvv
            style={styles.cvv}
            placeholderTextColor="#9898A0"
            onChange={(e: any) => {
              setCvv(e.nativeEvent.text);
            }}
          />
        </View>

        <SubmitButton
          title="Pay Now"
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => {}}
        />
      </Frames>
    </View>
  );
};
export default PaymnetScreen;
