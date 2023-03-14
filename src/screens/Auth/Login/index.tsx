import { View, Text, Image } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { images } from 'src/assets/images';
import styles from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import InputView from 'components/molecules/Input';
import { Formik } from 'formik';
import COLORS from 'values/colors';
import Button from 'components/molecules/Button';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

const Login = () => {
  const lang = useSelector(selectLanguage);
  console.log(lang);
  // const lang ='ar'
  const navigation = useNavigation();
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email(languages[lang].invalideEmail)
      .required(languages[lang].required),
    password: Yup.string()
      .required(languages[lang].required)
      .min(8, languages[lang].passwordShort),
  });
  return (
    <View style={styles.container}>
      <TextView
        title={languages[lang].skip}
        style={[
          styles.skip,
          {
            position: 'absolute',
            top: 10,
            left: lang === 'en' ? '95%' : 15,
          },
        ]}
        onPress={() => console.log('clicked')}
      />
      <View>
        <Image source={images.testtest} style={styles.image} />
        <TextView title={languages[lang].helloAgain} style={styles.title} />
        <TextView title={languages[lang].welcomeBack} style={styles.subTitle} />
        <View style={styles.line}></View>
      </View>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={loginSchema}>
        {props => (
          <View>
            <InputView
              {...props}
              name="email"
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              label={languages[lang].labelEmail}
              inputContainerStyling={styles.inputContainerStyling}
              containerStyle={styles.containerStyle}
              labelStyle={{ color: COLORS.lightGrey, marginBottom: -12 }}
            />
            <InputView
              {...props}
              name="password"
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              label={languages[lang].labelPassword}
              inputContainerStyling={styles.inputContainerStyling}
              containerStyle={styles.containerStyle}
              labelStyle={{ color: COLORS.lightGrey, marginBottom: -12 }}
              secureTextEntry={true}
            />

            <TextView
              title={languages[lang].forgetPassword}
              style={[
                styles.forget,
                { textAlign: lang === 'en' ? 'right' : 'left' },
              ]}
              onPress={() => console.log('clicked')}
            />
            <Button
              onPress={props.handleSubmit}
              type="primary"
              label={languages[lang].login}
            />
            <TextView title={languages[lang].or} style={styles.or} />
            <View style={styles.containerMedia}>
              <View style={styles.media}>
                <Svg name="default" size={40} />
              </View>
              <View style={styles.media}>
                <Svg name="default" size={40} />
              </View>
              <View style={styles.media}>
                <Svg name="default" size={40} />
              </View>
            </View>

            <View
              style={[
                styles.lastText,
                { flexDirection: lang === 'en' ? 'row' : 'row-reverse' },
              ]}>
              <TextView title={languages[lang].notMember} />
              <TextView
                title={languages[lang].createAccount}
                style={styles.create}
                onPress={() => navigation.navigate('register')}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
