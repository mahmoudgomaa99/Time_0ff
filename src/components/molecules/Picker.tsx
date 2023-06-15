import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
import { TName } from 'atoms/Svg';
import RNPickerSelect from 'react-native-picker-select';
import { MarginsAndPaddings, h } from '../../values/Dimensions';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/index';
import { images } from '../../assets/images';
import languages from 'values/languages';
import { boolean } from 'yup';
import { selectIsDarkMode } from 'redux/DarkMode';

type TType = 'primary' | 'secondry' | 'matches';
type TItem = {
  label: string;
  value: any;
};
type TProps = {
  type: TType;
  data: TItem[];
  loading?: boolean;
  touched: any;
  errors: any;
  name: string;
  handleChange: any;
  handleBlur: any;
  title?: string;
  values: any;
  setFieldValue: any;
  modalizeRef?: any;
  required?: boolean;
  stylingProp?: any;
  svgName?: TName;
  placeholder?: any;
  onDonePressed?: any;
  borderColor: any;
  disabled?: boolean;
};

const Picker = ({
  type,
  data,
  modalizeRef,
  title,
  stylingProp,
  svgName,
  onDonePressed,
  borderColor,
  disabled,
  ...props
}: TProps) => {
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <View style={[stylingProp, { marginTop: 20 }]}>
      <View
        style={[
          styles(isDarkMode)[`${type}_iosButtonWrapper`],
          { borderWidth: isDarkMode ? 0 : 1 },
        ]}>
        {type !== 'matches' &&
          // <MixedText title={title || ''} required={props.required || false} />
          null}
        {Platform.OS === 'ios' ? (
          <RNPickerSelect
            {...props}
            disabled={disabled}
            // errorText={{ fontSize: 30 }}

            placeholder={{
              label: props.placeholder || languages[lang].selectCountry,
              value: null,
            }}
            value={props.values[props.name]}
            onValueChange={value => props.setFieldValue(props.name, value)}
            items={data}
            onDonePress={() => {
              if (onDonePressed) {
                onDonePressed();
              }
            }}
            style={{
              placeholder: {
                color: type === 'matches' ? COLORS.red : COLORS.grey,
                textAlign: lang === 'ar' ? 'right' : 'left',
              },
              inputIOS: {
                ...styles(isDarkMode)[`${type}_iosButton`],
                color: isDarkMode ? COLORS.white : COLORS.black,
                textAlign: lang === 'ar' ? 'right' : undefined,
                borderColor:
                  props.errors[props.name] && props.touched[props.name]
                    ? COLORS.red
                    : '#F2F2F2',
              },
              inputAndroid: {
                ...styles(isDarkMode)[`${type}_iosButton`],
                color: isDarkMode ? COLORS.white : COLORS.black,
                borderColor:
                  props.errors[props.name] && props.touched[props.name]
                    ? COLORS.red
                    : '#F2F2F2',
              },
              modalViewMiddle: styles(isDarkMode)[`${type}_modalHeader`],
              modalViewBottom: styles(isDarkMode)[`${type}_modalBody`],
              iconContainer: {
                top: '42%',
                left: lang === 'ar' ? 10 : undefined,
                right: lang === 'en' ? 10 : undefined,
              },
            }}
            // Icon={() => (svgName ? <Svg name={svgName} size={12} /> : <></>)}
            // Icon={<Svg name="default" />}
            Icon={() => (
              <Image
                source={images.downArrow}
                style={{ width: 20, height: 20 }}
              />
            )}
          />
        ) : (
          <View
            style={{
              ...styles(isDarkMode)[`${type}_androidWrapper`],
              borderColor:
                props.errors[props.name] && props.touched[props.name]
                  ? COLORS.red
                  : borderColor,
            }}>
            <RNPickerSelect
              disabled={disabled}
              {...props}
              placeholder={{
                label: props.placeholder || 'Select an Item',
                value: null,
              }}
              value={props.values[props.name]}
              onValueChange={value => {
                props.setFieldValue(props.name, value);
                if (Platform.OS === 'android' && onDonePressed) {
                  onDonePressed();
                }
              }}
              items={data}
              onDonePress={() => {
                if (onDonePressed) {
                  onDonePressed();
                }
              }}
              style={{
                placeholder: {
                  color: type === 'matches' ? COLORS.red : COLORS.grey,
                },
                inputAndroid: {
                  ...styles(isDarkMode)[`${type}_iosButton`],
                  color: isDarkMode ? COLORS.white : COLORS.black,
                  borderColor:
                    props.errors[props.name] && props.touched[props.name]
                      ? COLORS.red
                      : COLORS.black,
                },
                modalViewMiddle: styles(isDarkMode)[`${type}_modalHeader`],
                modalViewBottom: styles(isDarkMode)[`${type}_modalBody`],
                // iconContainer: { top: '42%', right: 10 },
              }}
              // Icon={() => (svgName ? <Svg name={svgName} size={12} /> : <></>)}
              // Icon={() => (
              //   <Image
              //     source={images.downArrow}
              //     style={{
              //       width: 20,
              //       height: 20,
              //       marginTop: h * 0.024,
              //       marginRight: h * 0.02,
              //     }}
              //   />
              // )}
            />
          </View>
        )}
        {props.errors[props.name] && props.touched[props.name] && (
          <Text
            style={[
              styles(isDarkMode).errorText,
              { textAlign: lang === 'ar' ? 'right' : 'left'},
            ]}>
            {props.errors[props.name]}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Picker;

type TTstyles = (isDarkMOde: boolean) => {
  primary_iosButton: TextStyle;
  secondry_iosButton: TextStyle;
  primary_iosButtonWrapper: ViewStyle;
  secondry_iosButtonWrapper: ViewStyle;
  primary_modalHeader: ViewStyle;
  secondry_modalHeader: ViewStyle;
  primary_modalBody: ViewStyle;
  secondry_modalBody: ViewStyle;
  errorText: TextStyle;
  matches_iosButton: TextStyle;
  matches_iosButtonWrapper: ViewStyle;
  matches_modalHeader: ViewStyle;
  matches_modalBody: ViewStyle;
  secondry_androidWrapper: ViewStyle;
  matches_androidWrapper: ViewStyle;
  primary_androidWrapper: ViewStyle;
};

const styles: TTstyles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    secondry_androidWrapper: {
      borderRadius: 15,
      overflow: 'hidden',
      borderWidth: 0.95,
      marginTop: 5,
    },
    matches_androidWrapper: {
      // height: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primary_androidWrapper: {
      borderRadius: 10,
      overflow: 'hidden',
      borderColor: COLORS.black,
      // borderWidth: 1,
      backgroundColor: isDarkMode ? '#2b2c3a' : COLORS.white,
    },
    primary_iosButton: {
      borderColor: COLORS.secondery,
      borderWidth: 1,
      paddingVertical: MarginsAndPaddings.xxl + 8,
      paddingHorizontal: MarginsAndPaddings.xxl,
      marginTop: 3,
      borderRadius: 15,
      justifyContent: 'center',
      color: COLORS.white,
    },
    matches_iosButton:
      Platform.OS === 'ios'
        ? {
            color: COLORS.red,
            fontWeight: '600',
            fontSize: 16,
          }
        : {
            color: COLORS.red,
            fontWeight: '600',
            fontSize: 14,
            height: 40,
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
          },
    matches_iosButtonWrapper:
      Platform.OS === 'ios'
        ? {
            backgroundColor: COLORS.darkBlue,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            paddingHorizontal: 30,
            paddingVertical: 8,
          }
        : {
            width: Dimensions.get('window').width * 0.4,
            backgroundColor: COLORS.darkBlue,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
    primary_iosButtonWrapper: {
      marginHorizontal: 0,
      marginVertical: 5,
      borderWidth: 2,
      borderColor: '#eeeeee',
      borderRadius: 10,
    },
    secondry_iosButtonWrapper: { marginHorizontal: 10, marginVertical: 10 },
    secondry_iosButton: {
      borderColor: COLORS.secondery,
      backgroundColor: COLORS.darkBlue,
      borderWidth: 1,
      padding: 15,
      height: Platform.OS === 'ios' ? 60 : 50,
      // marginTop: 5,
      borderRadius: 15,
      justifyContent: 'center',
      color: COLORS.white,
    },
    title: {
      color: COLORS.white,
      marginLeft: 5,
      // fontFamily: Fonts.RobotoBold,
      fontSize: 16,
    },
    primary_modalHeader: {
      backgroundColor: COLORS.white,
      paddingHorizontal: 20,
      paddingVertical: 10,
      height: h * 0.06,
    },
    matches_modalHeader: {},
    matches_modalBody: {
      backgroundColor: COLORS.secondery,
      color: COLORS.white,
    },
    secondry_modalHeader: {
      backgroundColor: COLORS.white,
      height: 50,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    primary_modalBody: {},
    secondry_modalBody: {
      backgroundColor: COLORS.secondery,
      color: COLORS.white,
    },
    errorText: {
      color: COLORS.red,
      fontSize: 11,
      fontWeight: '700',
      marginTop: 5,
      marginBottom:5,
      marginHorizontal: 10,
    },
  });
