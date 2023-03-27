import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import languages from 'values/languages';

const Top = ({
  lang,
  isFilterModalVisable,
  setFilterModalVisable,
}: {
  lang: string;
  isFilterModalVisable: boolean;
  setFilterModalVisable: any;
}) => {
  return (
    <View
      style={[
        styles.top,
        { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
      ]}>
      <TouchableOpacity onPress={() => setFilterModalVisable(false)}>
        <Svg name="close" size={50} />
      </TouchableOpacity>

      <TextView title={languages[lang].filter} style={styles.filterText} />
      <TextView title={languages[lang].reset} style={styles.resetText} />
    </View>
  );
};

export default Top;
