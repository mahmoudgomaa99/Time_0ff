import { View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import Top from './Components/Top';
import { Formik } from 'formik';
import { Data } from './data';
import Checkbox from 'components/molecules/Checkbox';
import { set } from 'lodash';

const SortModel = ({
  isSortModel,
  setisSortModel,
  isDarkMode,
  setSort,
  sort,
  checked,
  setChecked,
}: {
  isSortModel: boolean;
  setisSortModel: any;
  isDarkMode?: boolean;
  setSort?: any;
  sort?: any;
  checked?: any;
  setChecked?: any;
}) => {
  const lang = useSelector(selectLanguage);
  return (
    <Modal
      isVisible={isSortModel}
      style={{ marginHorizontal: 0, marginBottom: 0 }}>
      <View style={styles(isDarkMode).modalContainer}>
        <Top
          lang={lang}
          isSortModel={isSortModel}
          setisSortModel={setisSortModel}
          isDarkMode={isDarkMode}
        />
        <Formik initialValues={{}} onSubmit={values => console.log(values)}>
          {props =>
            Data(lang).map(value => (
              <View
                style={{
                  marginHorizontal: 13,
                  marginVertical: 7,
                  transform: [{ rotate: lang === 'ar' ? '180deg' : '0deg' }],
                }}>
                <Checkbox
                  checked={checked}
                  setChecked={setChecked}
                  value={value}
                  sort={sort}
                  setSort={setSort}
                  setisSortModel={setisSortModel}
                />
              </View>
            ))
          }
        </Formik>
      </View>
    </Modal>
  );
};

export default SortModel;
