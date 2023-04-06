import { View, Text } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { styles } from './styles';
import { Formik } from 'formik';
import Picker from 'components/molecules/Picker';
import Button from 'components/molecules/Button';
import languages from 'values/languages';
const CurrencyModel = ({
  lang,
  isCurrencyModel,
  setisCurrencyModel,
}: {
  lang: string;
  isCurrencyModel: boolean;
  setisCurrencyModel: any;
}) => {
  return (
    <Modal isVisible={isCurrencyModel}>
      <View style={styles(lang).modalContainer}>
        <Formik
          initialValues={{ currency: '' }}
          onSubmit={value => console.log(value)}>
          {props => (
            <View style={styles(lang).container}>
              <Picker
                {...props}
                borderColor={'#F2F2F2'}
                type={'primary'}
                data={[{ label: 'SAR', value: 'SAR' }]}
                placeholder={'currency'}
                name={'currency'}
              />
              <View style={styles(lang).buttonsContainer}>
                <Button
                  type={'primaryModel'}
                  label={languages[lang].confirm}
                  onPress={() =>{
                    props.handleSubmit()
                    setisCurrencyModel(false)
                  } }
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
