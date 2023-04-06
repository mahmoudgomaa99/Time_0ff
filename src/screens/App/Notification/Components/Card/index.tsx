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
  setisPayment
}: {
  lang: string;
  iconName: string;
  message: string;
  date: string;
  isPayment:boolean;
  setisPayment:any
}) => {
  return (
    <View style={styles(lang).container}>
      <View style={styles(lang).first}>
        <Svg name={iconName} size={50}/>
      </View>
      <View style={styles(lang).second}>
        <TextView title={message} style={styles(lang).message} onPress={()=>{
          message.includes('accepted') ||message.includes('قبول') ? setisPayment(true):null
        }}/>
        <TextView title={date} style={styles(lang).date}/>
      </View>
    </View>
  );
};

export default Card;
