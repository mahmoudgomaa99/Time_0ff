import { View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import languages from 'values/languages';
import Button from 'components/molecules/Button';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import { useNavigation } from '@react-navigation/native';
import Picker from 'components/molecules/Picker';
import { registerScheme } from 'src/formik/schema';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg from 'atoms/Svg';

const Register = () => {
  const lang = useSelector(selectLanguage);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Saudi Arabic', value: 'Saudi Arabic' },
  ]);
  const [secure, setSecure] = useState(false);

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Svg name="blueLogo" size={150} />
        <TextView title={languages[lang].register} style={styles.title} />
        <View style={styles.line}></View>
      </View>

      <Formik
        initialValues={{
          fullName: '',
          phoneNumber: '',
          email: '',
          password: '',
          city: '',
        }}
        onSubmit={values => console.log(values)}
        validationSchema={registerScheme(lang)}>
        {props => (
          <View>
            <InputView
              {...props}
              name="fullName"
              onChangeText={props.handleChange('fullName')}
              value={props.values.fullName}
              label={languages[lang].fullName}
              inputContainerStyling={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
                borderBottomWidth: 0,
              }}
              containerStyle={[styles.containerStyle, { marginTop: 4 }]}
              labelStyle={[styles.label_style]}
            />
            <InputView
              {...props}
              name="phoneNumber"
              onChangeText={props.handleChange('phoneNumber')}
              value={props.values.phoneNumber}
              label={languages[lang].phoneNumber}
              inputContainerStyling={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
                borderBottomWidth: 0,
              }}
              containerStyle={[styles.containerStyle, { marginTop: 10 }]}
              labelStyle={[styles.label_style]}
            />
            <InputView
              {...props}
              name="email"
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              label={languages[lang].email}
              inputContainerStyling={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
                borderBottomWidth: 0,
              }}
              containerStyle={[styles.containerStyle, { marginTop: 10 }]}
              labelStyle={[styles.label_style]}
            />
            <InputView
              {...props}
              name="password"
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              label={languages[lang].labelPassword}
              inputContainerStyling={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
                borderBottomWidth: 0,
              }}
              containerStyle={[
                styles.containerStyle,
                { marginTop: 10, paddingVertical: 0 },
              ]}
              labelStyle={[styles.label_style, { paddingTop: 3 }]}
              rightIcon={
                <TouchableOpacity onPress={() => setSecure(prev => !prev)}>
                  <Svg name="eyeClosed" style={{ marginTop: -10 }} size={20} />
                </TouchableOpacity>
              }
              secureTextEntry={secure}
            />
            <Picker
              {...props}
              borderColor={'transparent'}
              type={'primary'}
              data={[
                { label: 'egypt', value: 'egypt' },
                { label: 'france', value: 'france' },
              ]}
              name={'city'}
            />
            <Button
              onPress={props.handleSubmit}
              type="primary"
              label={languages[lang].register}
              style={{ marginTop: 10 }}
            />
            <View
              style={[
                styles.lastText,
                { flexDirection: lang === 'en' ? 'row' : 'row-reverse' },
              ]}>
              <TextView title={languages[lang].haveAccount} />
              <TextView
                title={languages[lang].login}
                style={styles.create}
                onPress={() => navigation.navigate('login')}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Register;
