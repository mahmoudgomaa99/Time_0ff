import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Modal from 'react-native-modal';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/Button';
import Svg from 'atoms/Svg';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
const PasswordModel = ({
  lang,
  isPasswordModel,
  setisPasswordModel,
}: {
  lang: string;
  isPasswordModel: boolean;
  setisPasswordModel: any;
}) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <Modal isVisible={isPasswordModel}>
      <View style={styles(lang, isDarkMode).modalContainer}>
        <Svg name="key" size={70} />
        <TextView
          title={languages[lang].changeYourPassword}
          style={styles(lang, isDarkMode).text}
        />
        <Formik
          initialValues={{
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',
          }}
          onSubmit={values => console.log(values)}>
          {props => (
            <View style={styles(lang).container}>
              <InputView
                style={styles(lang, isDarkMode).input}
                {...props}
                name="oldPassword"
                onChangeText={props.handleChange('oldPassword')}
                value={props.values.oldPassword}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang, isDarkMode).containerStyle,
                  { marginTop: 4 },
                ]}
                placeholder={languages[lang].oldPassword}
              />
              <InputView
                style={styles(lang, isDarkMode).input}
                {...props}
                name="newPassword"
                onChangeText={props.handleChange('newPassword')}
                value={props.values.newPassword}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang, isDarkMode).containerStyle,
                  { marginTop: 4 },
                ]}
                placeholder={languages[lang].newPassword}
              />
              <InputView
                style={styles(lang, isDarkMode).input}
                {...props}
                name="confirmNewPassword"
                onChangeText={props.handleChange('confirmNewPassword')}
                value={props.values.confirmNewPassword}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang, isDarkMode).containerStyle,
                  { marginTop: 4 },
                ]}
                placeholder={languages[lang].confirmNewPassword}
              />

              <View style={styles(lang).buttonsContainer}>
                <Button
                  type={'primaryModel'}
                  label={languages[lang].confirm}
                  onPress={() => {
                    props.handleSubmit();
                    setisPasswordModel(false);
                  }}
                  style={styles(lang).buttons}
                />
                <Button
                  type={'cancel'}
                  label={languages[lang].cancel}
                  onPress={() => setisPasswordModel(false)}
                  style={styles(lang).buttons}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

export default PasswordModel;
