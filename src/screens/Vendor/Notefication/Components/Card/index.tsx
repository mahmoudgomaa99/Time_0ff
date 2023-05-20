import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import { styles } from './styles';

const Card = ({
  lang,
  iconName,
  message,
  date,

  isDarkMode,
}: {
  lang: string;
  iconName: any;
  message: string;
  date: string;

  isDarkMode?: boolean;
}) => {
  return (
    <View>
      <View style={styles(lang).container}>
        <View style={styles(lang).first}>
          <Svg name={iconName} size={80} />
        </View>
        <View style={styles(lang).second}>
          <TextView
            title={message}
            style={styles(lang, isDarkMode).message}
            // onPress={() => {
            //   message.includes('accepted') || message.includes('قبول')
            //     ? setisPayment(true)
            //     : null;
            // }}
          />
          <TextView title={date} style={styles(lang).date} />
        </View>
      </View>
      <View style={styles(lang, isDarkMode).buttons}>
        <TouchableOpacity
          onPress={() => {}}
          style={styles(lang, isDarkMode).firstButton}>
          <TextView title={'accept'} style={styles(lang, isDarkMode).text} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={styles(lang, isDarkMode).secondButton}>
          <TextView title={'delete'} style={styles(lang, isDarkMode).text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
