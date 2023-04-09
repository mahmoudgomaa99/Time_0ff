import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/Button';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';

const PaymentModal = ({
  lang,
  isPayment,
  setisPayment,
}: {
  lang: string;
  isPayment: boolean;
  setisPayment: any;
}) => {
  const navigation = useNavigation<any>();
  return (
    <Modal isVisible={isPayment}>
      <View style={styles(lang).modalContainer}>
        <TextView
          title={languages[lang].paymentCode}
          style={styles(lang).title}
        />
        <Svg name="blueLogo" size={100} />
        <TextView title={languages[lang].youCan} style={styles(lang).title} />
        <Formik
          initialValues={{ code: '155151515112' }}
          onSubmit={value => console.log(value)}>
          {props => (
            <View style={{ width: '100%' }}>
              <InputView
                {...props}
                name="code"
                value={props.values.code}
                loading
                style={styles(lang).input}
              />
              <View style={styles(lang).noteContainer}>
                <TextView
                  title={languages[lang].note}
                  style={styles(lang).noteText}
                />
              </View>
              <View style={styles(lang).buttonsContainer}>
                <Button
                  type={'primaryModel'}
                  label={languages[lang].confirm}
                  onPress={() => {
                    setisPayment(false);
                    navigation.navigate(languages[lang].main, {
                      modal: true,
                    });
                    props.handleSubmit();
                  }}
                  style={styles(lang).buttons}
                />
                <Button
                  type={'cancel'}
                  label={languages[lang].cancel}
                  onPress={() => setisPayment(false)}
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

export default PaymentModal;
