import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { styles } from './styles';
import { RadioButton } from 'react-native-paper';
import { Formik } from 'formik';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import Button from 'components/molecules/Button';
import { useAppDispatch } from 'redux/store';
import { useSelector } from 'react-redux';
import Language, { selectLanguage } from 'redux/language';
import { selectIsDarkMode } from 'redux/DarkMode';

const LanguageModel = ({
  isLanguageModel,
  setisLanguageModel,
}: {
  isLanguageModel: boolean;
  setisLanguageModel: any;
}) => {
  const dispatch = useAppDispatch();
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <Modal isVisible={isLanguageModel}>
      <View style={styles(lang, isDarkMode).modalContainer}>
        <Formik
          initialValues={{ language: lang }}
          onSubmit={value => {
            if (lang !== value.language) {
              dispatch(Language.changeLanguage());
            }
          }}>
          {props => (
            <View style={styles(lang).container}>
              <RadioButton.Group
                onValueChange={props.handleChange('language')}
                value={props.values.language}>
                <View style={styles(lang).flexRow}>
                  <View style={styles(lang).radio}>
                    <RadioButton value="ar" />
                  </View>
                  <TextView
                    title={languages[lang].arabic}
                    style={styles(lang, isDarkMode).text}
                  />
                </View>
                <View style={styles(lang).flexRow}>
                  <View style={styles(lang).radio}>
                    <RadioButton value="en" />
                  </View>
                  <TextView
                    title={languages[lang].english}
                    style={styles(lang, isDarkMode).text}
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
                  style={styles(lang, isDarkMode).buttons1}
                />
                <Button
                  type={'cancel'}
                  label={languages[lang].cancel}
                  onPress={() => setisLanguageModel(false)}
                  style={styles(lang, isDarkMode).buttons2}
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
