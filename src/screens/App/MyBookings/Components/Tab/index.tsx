import { View, Text } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import { styles } from './styles';
import languages from 'values/languages';

const Tab = ({
  lang,
  select,
  setselect,
}: {
  lang: string;
  select: number;
  setselect: any;
}) => {
  return (
    <View style={styles(lang).innerContainer}>
      <View style={styles(lang).first}>
        <TextView
          title={languages[lang].currentBooking}
          style={select === 1 ? styles(lang).activeText : styles(lang).text}
          onPress={() => setselect(1)}
        />
      </View>
      <View style={styles(lang).second}>
        <TextView
          title={languages[lang].lastBooking}
          style={select === 2 ? styles(lang).activeText : styles(lang).text}
          onPress={() => setselect(2)}
        />
      </View>
    </View>
  );
};

export default Tab;
