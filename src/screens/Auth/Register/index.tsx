import { View, Image } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import Picker from 'components/molecules/Picker';
import { registerScheme } from 'src/formik/schema';

const Register = () => {
  const lang = useSelector(selectLanguage);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Saudi Arabic', value: 'Saudi Arabic' },
  ]);

  const navigation = useNavigation<any>();

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
        validationSchema={registerScheme(lang)}>
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
