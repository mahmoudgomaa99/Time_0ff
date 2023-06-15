import { View, Text } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { styles } from './styles';
import { Formik } from 'formik';
import Picker from 'components/molecules/Picker';
import Button from 'components/molecules/Button';
import languages from 'values/languages';
import { useSelector } from 'react-redux';
import { DarkMode, selectCurrency, selectIsDarkMode } from 'redux/DarkMode';
import COLORS from 'values/colors';
import { useAppDispatch } from 'redux/store';
const CurrencyModel = ({
  lang,
  isCurrencyModel,
  setisCurrencyModel,
}: {
  lang: string;
  isCurrencyModel: boolean;
  setisCurrencyModel: any;
}) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useAppDispatch();
  const currency = useSelector(selectCurrency);
  return (
    <Modal isVisible={isCurrencyModel}>
      <View style={styles(lang, isDarkMode).modalContainer}>
        <Formik
          initialValues={{ currency: currency }}
          onSubmit={value => console.log(value)}>
          {props => (
            <View style={styles(lang).container}>
              <Picker
                {...props}
                borderColor={isDarkMode ? '#2b2c3a' : '#F2F2F2'}
                type={'primary'}
                data={[
                  { label: 'EGP', value: 'EGP' },
                  { label: 'USD', value: 'USD' },
                  { label: 'EUR', value: 'EUR' },
                  { label: 'SAR', value: 'SAR' },
                  { label: 'AED', value: 'AED' },
                ]}
                placeholder={'currency'}
                name={'currency'}
              />
              <View style={styles(lang).buttonsContainer}>
                <Button
                  type={'primaryModel'}
                  label={languages[lang].confirm}
                  onPress={() => {
                    props.handleSubmit();
                    setisCurrencyModel(false);
                    dispatch(DarkMode.changeCurrency(props.values.currency));
                  }}
                  style={styles(lang).buttons}
                />
                <Button
                  type={'cancel'}
                  label={languages[lang].cancel}
                  onPress={() => setisCurrencyModel(false)}
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

export default CurrencyModel;
