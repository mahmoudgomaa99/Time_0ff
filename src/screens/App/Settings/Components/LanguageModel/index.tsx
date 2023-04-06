import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { styles } from './styles';
import { RadioButton } from 'react-native-paper';
import { Formik } from 'formik';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import Button from 'components/molecules/Button';

const LanguageModel = ({
  lang,
  isLanguageModel,
  setisLanguageModel,
}: {
  lang: string;
  isLanguageModel: boolean;
  setisLanguageModel: any;
}) => {
  return (
    <Modal isVisible={isLanguageModel}>
      <View style={styles(lang).modalContainer}>
        <Formik
          initialValues={{ language: '' }}
          onSubmit={value => console.log(value)}>
          {props => (
            <View style={styles(lang).container}>
              <RadioButton.Group
                onValueChange={props.handleChange('language')}
                value={props.values.language}>
                <View style={styles(lang).flexRow}>
                  <View style={styles(lang).radio}>
                    <RadioButton value="arabic"></RadioButton>
                  </View>
                  <TextView
                    title={languages[lang].arabic}
                    style={styles(lang).text}
                  />
                </View>
                <View style={styles(lang).flexRow}>
                  <View style={styles(lang).radio}>
                    <RadioButton value="english"></RadioButton>
                  </View>
                  <TextView
                    title={languages[lang].english}
                    style={styles(lang).text}
                  />
                </View>
              </RadioButton.Group>

              <View style={styles(lang).buttonsContainer}>
                <Button
                  type={'primaryModel'}
                  label={languages[lang].confirm}
                  onPress={() => {
                    props.handleSubmit();
                    setisLanguageModel(false);
                  }}
                  style={styles(lang).buttons}
                />
                <Button
                  type={'cancel'}
                  label={languages[lang].cancel}
                  onPress={() => setisLanguageModel(false)}
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

export default LanguageModel;
