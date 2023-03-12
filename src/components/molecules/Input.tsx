import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input, InputProps} from 'react-native-elements';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

type TInput = {
  loading?: boolean;
  touched: any;
  errors: any;
  name: string;
  handleChange: any;
  handleBlur: any;
  title: string;
  values: any;
  containerStyling?: any;
  titleStyling?: any;
};

const InputView = ({
  loading,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  name,
  title,
  placeholder,
  containerStyling,
  titleStyling,
  ...props
}: InputProps & TInput) => {
  return (
    <View style={[styles.container, containerStyling]}>
      <Text style={titleStyling}>{title}</Text>
      <Input
        {...props}
        placeholder={placeholder}
        autoComplete={'off'}
        disabled={loading ? true : false}
        placeholderTextColor="#888888"
        value={values[name]}
        errorStyle={{
          color: COLORS.errorRed,
          fontFamily: Fonts.RobotoBold,
        }}
        errorMessage={touched[name] ? errors[name] : ''}
        inputStyle={{
          color: '#000',
          fontSize: 14,
          opacity: 0.7,
          fontFamily: Fonts.RobotoRegular,
        }}
        inputContainerStyle={{
          ...styles.textInputStyle,
          borderColor:
            errors[name] && touched[name] ? COLORS.errorRed : '#888888',
        }}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
      />
    </View>
  );
};

export default InputView;

const styles = StyleSheet.create({
  container: {},
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 12,
    height: 45,
    marginTop: h * 0.01,
    paddingLeft: w * 0.03,
    fontFamily: Fonts.RobotoRegular,
    lineHeight: 24,
    backgroundColor: '#fff',
    borderColor: '#525252',
    fontSize: 12,
  },
});
