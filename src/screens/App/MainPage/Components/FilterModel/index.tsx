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
import { initialVslues } from './data';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import COLORS from 'values/colors';

const FilterModel = ({
  isFilterModalVisable,
  setFilterModalVisable,
  isDarkMode,
}: {
  isFilterModalVisable: boolean;
  setFilterModalVisable: any;
  isDarkMode?: boolean;
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDateModalVisable, setDateModalVisable] = useState(false);
  const lang = useSelector(selectLanguage);
  return (
    <Formik
      initialValues={initialVslues}
      onSubmit={values => {
        console.log(values);
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
                  data={[{ label: 'diving', value: 'diving' }]}
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
                  name="date"
                  disabled
                  value={props.values.date}
                  inputContainerStyling={
                    styles(isDarkMode).inputContainerStyling
                  }
                  containerStyle={styles(isDarkMode).containerStyle}
                  onPressIn={() => setDateModalVisable(true)}
                  leftIcon={<Svg name="calendar" />}
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
                  data={[
                    { label: 'Sharm El-Shaikh', value: 'Sharm El-Shaikh' },
                  ]}
                  name={'city'}
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
                  data={[{ label: '(5 Star)', value: '(5 Star)' }]}
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
                  props.handleSubmit();
                }}
              />
            </ScrollView>
          </View>

          <DateModal
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
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
