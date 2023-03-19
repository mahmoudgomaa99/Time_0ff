import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { images } from 'src/assets/images';
import styles from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import InputView from 'components/molecules/Input';
import { Formik } from 'formik';
import Button from 'components/molecules/Button';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import { loginSchema } from 'src/formik/schema';

const Login = () => {
  const [secure, setsecure] = useState(true);
  const lang = useSelector(selectLanguage);
  const navigation = useNavigation<any>();

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
        <Image source={images.logo} style={styles.image} />
        <TextView title={languages[lang].helloAgain} style={styles.title} />
        <TextView title={languages[lang].welcomeBack} style={styles.subTitle} />
        <View style={styles.line}></View>
      </View>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={() => loginSchema(languages, lang)}>
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
              labelStyle={{ color: '#C4C3C3', marginBottom: -12, fontSize: 14 }}
            />
            <InputView
              {...props}
              name="password"
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              label={languages[lang].labelPassword}
              inputContainerStyling={styles.inputContainerStyling}
              containerStyle={styles.containerStyle}
              labelStyle={{ color: '#C4C3C3', marginBottom: -12, fontSize: 14 }}
              rightIcon={
                <TouchableOpacity onPress={() => setsecure(prev => !prev)}>
                  <Svg name="google" size={30} />
                </TouchableOpacity>
              }
              secureTextEntry={secure}
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
              onPress={() => props.handleSubmit()}
              type="primary"
              label={languages[lang].login}
            />
            <TextView title={languages[lang].or} style={styles.or} />
            <View style={styles.containerMedia}>
              <View style={styles.media}>
                <Svg name="google" size={30} />
              </View>
              <View style={styles.media}>
                <Image source={images.facebook} />
              </View>
              <View style={styles.media}>
                <Image source={images.instagram} />
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
