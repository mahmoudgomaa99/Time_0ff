import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import navigation from 'navigation/index';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../redux/language/index';
import languages from '../../../values/languages';

const AuthModal = ({
  CustomModal,
  closeCustomModal,
  type,
}: {
  CustomModal: any;
  closeCustomModal: any;
  type: 'book' | 'order' | 'profile';
}) => {
  const navigation: any = useNavigation();
  const language = useSelector(selectLanguage);
  return (
    <CustomModal>
      <View
        style={{
          height: 400,
          backgroundColor: COLORS.primary,
          margin: -10,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          padding: h * 0.02,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: COLORS.secondery,
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: -10 },
          paddingTop: 20,
        }}>
        <Text style={{ color: COLORS.white, fontSize: 25, fontWeight: '700' }}>
          {languages[language].sorry}...
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 17,
            fontWeight: '400',
            marginTop: 5,
          }}>
          {type === 'book'
            ? languages[language].unableToCompleteBooking
            : type === 'order'
            ? languages[language].unableToCompleteOrder
            : ''}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('auth', { screen: 'login' });
            closeCustomModal();
          }}
          style={{
            padding: 15,
            width: w * 0.8,
            borderRadius: 10,
            alignItems: 'center',
            backgroundColor: COLORS.orange,
            marginTop: 40,
          }}>
          <Text style={{ color: COLORS.white, fontSize: 18 }}>
            {languages[language].signIn}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('auth', { screen: 'chooseType' });
            closeCustomModal();
          }}
          style={{ marginTop: 10 }}>
          <Text style={{ color: COLORS.white, fontSize: 15 }}>
            {languages[language].dontHaveAcc}
            <Text style={{ fontWeight: '700' }}>
              {' '}
              {languages[language].createOne}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </CustomModal>
  );
};
export default AuthModal;

const styles = StyleSheet.create({});
