import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import Top from './Components/Top';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import languages from 'values/languages';
import Picker from 'components/molecules/Picker';
import Button from 'components/molecules/Button';
import Svg from 'atoms/Svg';

const EditProfile = () => {
  const lang = useSelector(selectLanguage);
  return (
    <View style={styles(lang).container}>
      <Top lang={lang} />
      <Formik
        initialValues={{
          fullName: '',
          countryCode: '',
          phoneNumber: '',
          email: '',
          city: '',
        }}
        onSubmit={values => console.log(values)}>
        {props => (
          <View>
            <InputView
              style={styles(lang).input}
              {...props}
              name="fullName"
              onChangeText={props.handleChange('fullName')}
              value={props.values.fullName}
              label={languages[lang].fullName}
              inputContainerStyling={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
                borderBottomWidth: 0,
              }}
              containerStyle={[styles(lang).containerStyle, { marginTop: 4 }]}
              labelStyle={[styles(lang).label_style]}
            />
            <View style={styles(lang).flexRow}>
              <InputView
                style={styles(lang).input}
                {...props}
                name="countryCode"
                onChangeText={props.handleChange('countryCode')}
                value={props.values.countryCode}
                label={languages[lang].countryCode}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang).containerStyleCountry,
                  { marginTop: 10 },
                ]}
                labelStyle={[styles(lang).label_style]}
              />
              <InputView
                style={styles(lang).input}
                {...props}
                name="phoneNumber"
                onChangeText={props.handleChange('phoneNumber')}
                value={props.values.phoneNumber}
                label={languages[lang].phoneNumber}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang).containerStylePhone,
                  { marginTop: 10 },
                ]}
                labelStyle={[styles(lang).label_style]}
              />
            </View>

            <InputView
              style={styles(lang).input}
              {...props}
              name="email"
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              label={languages[lang].email}
              inputContainerStyling={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
                borderBottomWidth: 0,
              }}
              containerStyle={[styles(lang).containerStyle, { marginTop: 10 }]}
              labelStyle={[styles(lang).label_style]}
            />

            <Picker
              {...props}
              borderColor={'#F2F2F2'}
              type={'primary'}
              data={[
                { label: 'egypt', value: 'egypt' },
                { label: 'france', value: 'france' },
              ]}
              placeholder={'City'}
              name={'city'}
            />

            <Button
              type="primary"
              label={languages[lang].saveEditing}
              onPress={() => props.handleSubmit()}
              style={styles(lang).button}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default EditProfile;
