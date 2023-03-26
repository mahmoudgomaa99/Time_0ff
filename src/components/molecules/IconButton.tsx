import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import Svg from 'atoms/Svg';
import { TName } from '../atoms/Svg';

type TType = 'primary' | 'secondry';

type TButton = {
  isLoading?: boolean;
  type: TType;
  name: TName;
  size: number;
};

const Button = ({
  isLoading,
  type = 'primary',
  name,
  size,
  ...props
}: TouchableOpacityProps & TButton) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles[type]}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.white} />
        ) : (
          <Svg name={name} size={size} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({ primary: {}, secondry: {} });
