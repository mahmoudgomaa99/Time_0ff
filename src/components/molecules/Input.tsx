import {
  Dimensions,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Input, InputProps } from 'react-native-elements';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/index';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

type TInput = {
  loading?: boolean;
  touched?: any;
  errors?: any;
  name: string;
  handleChange: any;
  handleBlur?: any;
  title?: string;
  values?: any;
  containerStyling?: any;
  inputContainerStyling?: ViewStyle;
  titleStyling?: any;
  stylee?: ViewStyle;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
};

const InputView = ({
  loading,
  values,
  touched,
  errors,
  handleChange,
  containerStyle,
  handleBlur,
  name,
  title,
  placeholder,
  containerStyling,
  inputContainerStyling,
  titleStyling,
  labelStyle,
  stylee,
  ...props
}: InputProps & TInput) => {
  const lang = useSelector(selectLanguage);
  return (
    <View style={[styles.container, containerStyling]}>
      <Text style={titleStyling}>{title}</Text>
      <Input
        {...props}
        placeholder={placeholder}
        autoComplete={'off'}
        disabled={loading ? true : false}
        placeholderTextColor="#C4C3C3"
        value={values[name]}
        errorStyle={{
          color: COLORS.errorRed,
          // fontFamily: Fonts.RobotoBold,
          textAlign: lang === 'ar' ? 'left' : 'right',
        }}
        containerStyle={[
          containerStyle,
          {
            borderColor: errors[name] && touched[name] ? COLORS.red : '#F2F2F2',
          },
        ]}
        errorMessage={touched[name] ? errors[name] : ''}
        inputStyle={{
          color: '#000',
          fontSize: 14,
          opacity: 0.7,
          // fontFamily: Fonts.RobotoRegular,
          textAlign: lang === 'ar' ? 'right' : 'left',
        }}
        inputContainerStyle={
          inputContainerStyling
            ? {
                ...inputContainerStyling,
                borderColor:
                  errors[name] && touched[name] ? COLORS.red : '#F2F2F2',
              }
            : {
                ...styles.textInputStyle,
                borderColor:
                  errors[name] && touched[name] ? COLORS.red : '#F2F2F2',
              }
        }
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        labelStyle={[
          labelStyle,
          { textAlign: lang === 'ar' ? 'right' : 'left', marginTop: 3 },
        ]}
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
    marginTop: h * 0.01,
    paddingLeft: w * 0.03,
    lineHeight: 24,
    backgroundColor: '#fff',
    borderColor: '#525252',
    fontSize: 12,
  },
});
