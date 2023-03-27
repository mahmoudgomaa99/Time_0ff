import { View, Text } from 'react-native';
import React, { useState } from 'react';
import TextView from 'atoms/TextView';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import DateModal from './Components/DateModal';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import Picker from 'components/molecules/Picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import COLORS from 'values/colors';
import Button from 'components/molecules/Button';
import languages from 'values/languages';

const Bottom = ({ lang }: { lang: string }) => {
  // state to hold the selected date
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDateModalVisable, setDateModalVisable] = useState(false);
  return (
    <Formik
      initialValues={{ date: '', time: '', members: '', terms: '' }}
      onSubmit={values => console.log(values)}>
      {props => (
        <View>
          <View>
            <TextView title={languages[lang].date} style={styles.text} />
            <InputView
              {...props}
              name="date"
              disabled
              value={props.values.date}
              inputContainerStyling={styles.inputContainerStyling}
              containerStyle={styles.containerStyle}
              onPressIn={() => setDateModalVisable(true)}
              leftIcon={<Svg name="calendar" />}
            />
          </View>
          <View>
            <TextView title={languages[lang].time} style={styles.text} />
            <InputView
              {...props}
              name="time"
              value={props.values.time}
              inputContainerStyling={styles.inputContainerStyling}
              containerStyle={styles.containerStyle}
              //   leftIcon={<Svg name="calendar" />}
            />
          </View>

          <View>
            <TextView
              title={languages[lang].numberOfPerson}
              style={styles.text}
            />
            <Picker
              {...props}
              borderColor={'#EEEEEE'}
              type={'primary'}
              data={[{ label: '3 Members', value: '3 Members' }]}
              name={'members'}
              stylingProp={{ borderColor: 'red', borderWith: 30 }}
            />
          </View>

          <View
            style={{
              marginVertical: 15,
              transform: [{ rotate:lang === 'ar' ? '180deg':'0deg' }],
            }}>
            <BouncyCheckbox
              onPress={(isChecked: boolean) => {
                props.setFieldValue('terms', isChecked);
              }}
              size={40}
              fillColor={'#F3F3F3'}
              unfillColor={'#F3F3F3'}
              iconStyle={{ borderRadius: 5, }}
              innerIconStyle={{ width: 40, height: 40, borderRadius: 5, }}
              text={languages[lang].termCondition}
              textStyle={{
                fontSize: 18,
                color: COLORS.black,
                transform: [{ rotate: lang === 'ar' ? '180deg' : '0deg' }],
              }}
            />
          </View>

          <Button
            type="primary"
            label={languages[lang].bookNow}
            onPress={() => {
              props.handleSubmit;
            }}
            style={styles.button}
          />

          <DateModal
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            isDateModalVisable={isDateModalVisable}
            setDateModalVisable={setDateModalVisable}
            formikProps={props}
            lang={lang}
          />
        </View>
      )}
    </Formik>
  );
};

export default Bottom;
