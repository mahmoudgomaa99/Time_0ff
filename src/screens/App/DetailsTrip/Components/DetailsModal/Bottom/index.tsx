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
import useModalHandler from 'hooks/Modal';
import AuthModal from 'components/organisms/AuthModal';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';
import TimeModal from './Components/TimeModal';
import Journeys from 'redux/journey';
import { unwrapResult } from '@reduxjs/toolkit';
import { useAppDispatch } from 'redux/store';

const Bottom = ({
  lang,
  setisDetailsModalVisibal,
  isDarkMode,
  availableDates,
  availabilityJourneys,
}: {
  lang: string;
  setisDetailsModalVisibal: any;
  isDarkMode?: boolean;
  availableDates?: any;
  availabilityJourneys?: any;
}) => {
  const dispatch = useAppDispatch();
  const { closeCustomModal, openCustomModal, CustomModal } = useModalHandler();
  const currentUser = useSelector(selectCurrentUser);
  // state to hold the selected date
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDateModalVisable, setDateModalVisable] = useState(false);
  const [selectTime, setselectTime] = useState(new Date());
  const [isTimeModalVisable, setisTimeModalVisable] = useState(false);
  const [Date_, setDate_] = useState('');
  const [Times, setTimes] = useState([])

  return (
    <Formik
      initialValues={{ date: '', time: '', members: '', terms: '' }}
      onSubmit={values => {
        console.log(values);
        if (!currentUser) {
          openCustomModal();
        } else {
          dispatch(
            Journeys.thunks.doAddBooking({
              journey_slot_id: values.time,
              number_of_seats: values.members,
            }),
          )
            .then(unwrapResult)
            .catch(err => {
              console.log(err);
            });
          setisDetailsModalVisibal(false);
        }
      }}>
      {props => (
        <View>
          <View>
            <TextView
              title={languages[lang].date}
              style={[
                styles(isDarkMode).text,
                { textAlign: lang === 'ar' ? 'right' : undefined },
              ]}
            />
            <InputView
              {...props}
              name="date"
              value={props.values.date}
              inputContainerStyling={styles(isDarkMode).inputContainerStyling}
              containerStyle={styles(isDarkMode).containerStyle}
              onPressIn={() => setDateModalVisable(true)}
              leftIcon={<Svg name="calendar" />}
            />
          </View>
          {/* <View>
            <TextView
              title={languages[lang].time}
              style={[
                styles(isDarkMode).text,
                { textAlign: lang === 'ar' ? 'right' : undefined },
              ]}
            />
            <InputView
              {...props}
              name="time"
              value={props.values.time}
              inputContainerStyling={styles(isDarkMode).inputContainerStyling}
              containerStyle={styles(isDarkMode).containerStyle}
              onPressIn={() => setisTimeModalVisable(true)}
            />
          </View> */}
          <Picker
            {...props}
            borderColor={'#F2F2F2'}
            type={'primary'}
            data={Times}
            placeholder={'Time'}
            name={'time'}
            values={props.values}
          />
          <View>
            <TextView
              title={languages[lang].numberOfPerson}
              style={[
                styles(isDarkMode).text,
                { textAlign: lang === 'ar' ? 'right' : undefined },
              ]}
            />
            <InputView
              {...props}
              name="members"
              value={props.values.members}
              inputContainerStyling={styles(isDarkMode).inputContainerStyling}
              containerStyle={styles(isDarkMode).containerStyle}
              keyboardType="number-pad"
            />
          </View>

          <View
            style={{
              marginVertical: 15,
              transform: [{ rotate: lang === 'ar' ? '180deg' : '0deg' }],
            }}>
            <BouncyCheckbox
              onPress={(isChecked: boolean) => {
                props.setFieldValue('terms', isChecked);
              }}
              size={40}
              fillColor={COLORS.darkBlue}
              unfillColor={'#F3F3F3'}
              iconStyle={{ borderRadius: 5 }}
              innerIconStyle={{ width: 40, height: 40, borderRadius: 5 }}
              text={languages[lang].termCondition}
              textStyle={{
                fontSize: 18,
                color: isDarkMode ? COLORS.white : COLORS.black,
                transform: [{ rotate: lang === 'ar' ? '180deg' : '0deg' }],
              }}
            />
          </View>

          <Button
            type="primary"
            label={languages[lang].bookNow}
            onPress={() => {
              props.handleSubmit();
            }}
            style={styles().button}
          />

          <DateModal
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            isDateModalVisable={isDateModalVisable}
            setDateModalVisable={setDateModalVisable}
            formikProps={props}
            lang={lang}
            isDarkMode={isDarkMode}
            availableDates={availableDates}
            Times={Times}
            setTimes={setTimes}
            availabilityJourneys={availabilityJourneys}
          />
          <AuthModal
            CustomModal={CustomModal}
            closeCustomModal={closeCustomModal}
            type="book"
          />
          {/* <TimeModal
            selectedTime={selectTime}
            setSelectedTime={setselectTime}
            isTimeModalVisable={isTimeModalVisable}
            setTimeModalVisable={setisTimeModalVisable}
            formikProps={props}
            lang={lang}
            isDarkMode={isDarkMode}
          /> */}
        </View>
      )}
    </Formik>
  );
};

export default Bottom;
