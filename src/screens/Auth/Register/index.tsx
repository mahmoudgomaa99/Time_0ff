import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { images } from 'src/assets/images';
import TextView from 'atoms/TextView';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import languages from 'values/languages';
import Button from 'components/molecules/Button';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import COLORS from 'values/colors';
// import DropDownPicker from 'react-native-dropdown-picker';
import { h } from 'values/Dimensions';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import Picker from 'components/molecules/Picker';

const Register = () => {
  const lang = useSelector(selectLanguage);
  console.log(lang);
  // const lang = 'ar';
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Saudi Arabic', value: 'Saudi Arabic' },
  ]);

  const navigation = useNavigation();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const registerSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required(languages[lang].required)
      .matches(phoneRegExp, languages[lang].phoneError),
    fullName: Yup.string().required(languages[lang].required),
    email: Yup.string()
      .email(languages[lang].invalideEmail)
      .required(languages[lang].required),
    password: Yup.string()
      .required(languages[lang].required)
      .min(8, languages[lang].passwordShort),
    city: Yup.string().required(languages[lang].required),
  });

  return (
    <View style={styles.container}>
      <View>
        <Image source={images.logo} style={styles.image} />
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
        validationSchema={registerSchema}>
        {props => (
          <View>
            <InputView
              {...props}
              name="fullName"
              onChangeText={props.handleChange('fullName')}
              value={props.values.fullName}
              label={languages[lang].fullName}
              inputContainerStyling={styles.inputContainerStyling}
              containerStyle={styles.containerStyle}
              labelStyle={{ color: '#C4C3C3', marginBottom: -12, fontSize: 14 }}
            />
            <InputView
              {...props}
              name="phoneNumber"
              onChangeText={props.handleChange('phoneNumber')}
              value={props.values.phoneNumber}
              label={languages[lang].phoneNumber}
              inputContainerStyling={styles.inputContainerStyling}
              containerStyle={styles.containerStyle}
              labelStyle={{ color: '#C4C3C3', marginBottom: -12, fontSize: 14 }}
            />
            <InputView
              {...props}
              name="email"
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              label={languages[lang].email}
              inputContainerStyling={styles.inputContainerStyling}
              containerStyle={styles.containerStyle}
              labelStyle={{ color: '#C4C3C3', marginBottom: -12, fontSize: 14 }}
            />
            <InputView
              {...props}
              name="password"
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              label={languages[lang].password}
              inputContainerStyling={styles.inputContainerStyling}
              containerStyle={styles.containerStyle}
              labelStyle={{ color: '#C4C3C3', marginBottom: -12, fontSize: 14 }}
              secureTextEntry={true}
            />

            <Picker
              {...props}
              type={'primary'}
              data={[
                { label: 'egypt', value: 'egypt' },
                { label: 'france', value: 'france' },
              ]}
              name={'city'}
              stylingProp={{ borderColor: 'red', borderWith: 10 }}
            />

            {/* <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onChangeValue={value => {
                props.setFieldValue('city', value);
              }}
              containerStyle={{
                borderColor: COLORS.grey,
                marginTop: h * 0.03,
                marginBottom: -15,
              }}
            /> */}

            <Button
              onPress={props.handleSubmit}
              type="primary"
              label={languages[lang].register}
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
    </View>
  );
};

export default Register;
