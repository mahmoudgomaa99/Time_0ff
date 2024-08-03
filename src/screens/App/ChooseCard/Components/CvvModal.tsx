import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useRef } from 'react';
import { Formik } from 'formik';
import COLORS from 'values/colors';
import { h, w } from 'values/Dimensions';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import TextView from 'atoms/TextView';
import Fonts from 'values/fonts';
import Button from 'components/molecules/Button';

const CvvModal = ({
  CustomModal,
  closeModal,
  setCvv,
}: {
  CustomModal: any;
  closeModal: any;
  setCvv: any;
}) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const cvvInputRef = useRef<TextInput>(null);

  return (
    <CustomModal>
      <Formik
        initialValues={{
          cvv: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}>
        {props => (
          <View style={styles(isDarkMode).container}>
            <TextView
              style={{
                fontSize: 14,
                color: isDarkMode ? COLORS.white : COLORS.black,
                fontFamily: Fonts.RobotoMedium,
              }}
              title={' Enter CVV'}
            />
            <TextInput
              ref={cvvInputRef}
              style={styles(isDarkMode).containerStyle}
              placeholder="CVV"
              keyboardType="number-pad"
              onChangeText={props.handleChange('cvv')}
              onChange={(e: any) => {
                if (e.nativeEvent.text.length === 3) {
                  setCvv(e.nativeEvent.text);
                  cvvInputRef.current?.blur();
                  closeModal();
                }
              }}
              value={props.values.cvv}
              secureTextEntry={true}
            />
          </View>
        )}
      </Formik>
    </CustomModal>
  );
};

export default CvvModal;

const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 0.1,
      backgroundColor: isDarkMode ? COLORS.darkMode : '#ffff',
      width: w * 0.8,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 5,
      borderRadius: 20,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputContainerStyling: {
      borderBottomWidth: 0,
      alignItems: 'center',
      paddingTop: Platform.OS === 'ios' ? 5 : 0,
      justifyContent: 'center',
    },
    containerStyle: {
      backgroundColor: isDarkMode ? COLORS.iconBackDarkMode : COLORS.white,
      borderWidth: isDarkMode ? 0 : 1,
      borderColor: COLORS.black,
      borderRadius: 10,
      height: h * 0.05,
      width: w * 0.14,
      letterSpacing: 4,
      marginHorizontal: 12,
    },
  });
