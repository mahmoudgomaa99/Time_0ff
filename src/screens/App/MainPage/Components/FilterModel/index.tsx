import { View, Text, ScrollViewComponent } from 'react-native';
import React, { useRef, useState } from 'react';
import Modal from 'react-native-modal';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import RangePriceSlider from './Components/RangePrice/RangePrice';
import Picker from 'components/molecules/Picker';
import Button from 'components/molecules/Button';
import { ScrollView } from 'react-native-gesture-handler';
import Top from './Components/Top';
import DateModal from './Components/DateModal';
import languages from 'values/languages';
import { TInitialValues, initialVslues } from './data';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import COLORS from 'values/colors';
import { useAppDispatch } from 'redux/store';
import Journeys from 'redux/journey';

const FilterModel = ({
  isFilterModalVisable,
  setFilterModalVisable,
  isDarkMode,
  setfilterData,
  setcategory,
  category,
  search,
}: {
  isFilterModalVisable: boolean;
  setFilterModalVisable: any;
  isDarkMode?: boolean;
  setfilterData: any;
  setcategory: any;
  category: string;
  search?: string;
}) => {
  const dispatch = useAppDispatch();
  const [isDateModalVisable, setDateModalVisable] = useState(false);
  const lang = useSelector(selectLanguage);
  return (
    <Formik
      initialValues={initialVslues}
      onSubmit={values => {
        setfilterData(values);
        if (values.category) setcategory('');
        setDateModalVisable(false);
        setFilterModalVisable(false);
      }}>
      {props => (
        <Modal
          isVisible={isFilterModalVisable}
          style={{ marginHorizontal: 0, marginBottom: 0 }}>
          <View style={styles(isDarkMode).modalContainer}>
            <Top
              lang={lang}
              props={props}
              isFilterModalVisable={isFilterModalVisable}
              setFilterModalVisable={setFilterModalVisable}
              isDarkMode={isDarkMode}
              setfilterData={setfilterData}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <TextView
                  title={languages[lang].category}
                  style={styles(isDarkMode).text}
                />
                <Picker
                  {...props}
                  borderColor={'#EEEEEE'}
                  type={'primary'}
                  data={[
                    { label: languages[lang].diving, value: 'diving' },
                    { label: languages[lang].wellness, value: 'wellness' },
                    { label: languages[lang].sports, value: 'sports' },
                    {
                      label: languages[lang].kiteSurfing,
                      value: 'kiteSurfing',
                    },
                    { label: languages[lang].Hiking, value: 'hiking' },
                    { label: languages[lang].Others, value: 'others' },
                  ]}
                  name={'category'}
                  stylingProp={{ borderColor: 'red', borderWith: 30 }}
                  placeholder={'Select category'}
                />
              </View>

              <View>
                <TextView
                  title={languages[lang].date}
                  style={styles(isDarkMode).text}
                />
                <InputView
                  {...props}
                  name="start_date"
                  value={props.values.start_date}
                  inputContainerStyling={
                    styles(isDarkMode).inputContainerStyling
                  }
                  containerStyle={styles(isDarkMode).containerStyle}
                  onPressIn={() => {
                    setDateModalVisable(true);
                  }}
                  leftIcon={<Svg name="calendar" />}
                  placeholder="Select date"
                />
              </View>

              <View>
                <TextView
                  title={languages[lang].city}
                  style={styles(isDarkMode).text}
                />
                <Picker
                  borderColor={'#EEEEEE'}
                  {...props}
                  type={'primary'}
                  data={[{ label: 'Sharm El-Shaikh', value: 'sharm' }]}
                  name={'location'}
                  stylingProp={{ borderColor: 'red', borderWith: 30 }}
                />
              </View>

              <RangePriceSlider
                isDarkMode={isDarkMode}
                formikProps={props}
                lang={lang}
              />

              <View>
                <TextView
                  title={languages[lang].rating}
                  style={styles(isDarkMode).text}
                />
                <Picker
                  {...props}
                  borderColor={'#EEEEEE'}
                  type={'primary'}
                  data={[
                    { label: '(1 Star)', value: 1 },
                    { label: '(2 Star)', value: 2 },
                    { label: '(3 Star)', value: 3 },
                    { label: '(4 Star)', value: 4 },
                    { label: '(5 Star)', value: 5 },
                  ]}
                  name={'rating'}
                  stylingProp={{
                    borderColor: 'red',
                    borderWith: 30,
                    color: COLORS.white,
                  }}
                  placeholder={'Select rating'}
                />
              </View>

              <Button
                type="primary"
                label={languages[lang].applyFilter}
                style={styles().button}
                onPress={() => {
                  props.setFieldValue('search_key_word_name', search);
                  if (props.values.category) setcategory('');
                  else props.setFieldValue('category', category);
                  props.handleSubmit();
                }}
              />
            </ScrollView>
          </View>

          <DateModal
            isDateModalVisable={isDateModalVisable}
            setDateModalVisable={setDateModalVisable}
            formikProps={props}
            lang={lang}
            isDarkMode={isDarkMode}
          />
        </Modal>
      )}
    </Formik>
  );
};

export default FilterModel;
