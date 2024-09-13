import { StyleSheet, Text } from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

type TProps = {
  title: string;
  required?: boolean;
  secondText?: string;
};

const MixedText = ({ title, required, secondText }: TProps) => {
  return (
    <Text style={styles.title}>
      {title}
      <Text style={{ fontSize: 11, color: COLORS.grey }}>
        {secondText
          ? '    ' + secondText
          : required
          ? '    *Required'
          : '    *Optional'}
      </Text>
    </Text>
  );
};

export default MixedText;

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    marginLeft: 5,
    fontSize: 16,
  },
});
