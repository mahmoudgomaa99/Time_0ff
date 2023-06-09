import { View, Text } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import { styles } from './styles';

const Card = ({
  lang,
  iconName,
  message,
  date,
  isPayment,
  setisPayment,
  isDarkMode,
}: {
  lang: string;
  iconName: any;
  message: string;
  date: string;
  isPayment: boolean;
  setisPayment: any;
  isDarkMode?: boolean;
}) => {
  return (
    <View style={styles(lang).container}>
      <View style={styles(lang).first}>
        <Svg
          name={
            iconName === 'rejected'
              ? 'rejected'
              : iconName === 'confirmed'
              ? 'accepted'
              : iconName === 'pending'
              ? 'confirmed'
              : 'newActivity'
          }
          size={80}
        />
      </View>
      <View style={styles(lang).second}>
        <TextView
          title={message}
          style={styles(lang, isDarkMode).message}
          onPress={() => {
            message.includes('accepted') || message.includes('قبول')
              ? setisPayment(true)
              : null;
          }}
        />
        <TextView title={date.slice(0, 10)} style={styles(lang).date} />
      </View>
    </View>
  );
};

export default Card;
