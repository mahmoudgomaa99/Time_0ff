import { Text, TouchableOpacity, View } from 'react-native';
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
import { useAppDispatch } from 'redux/store';
import { getTimes } from './utils/GetTimes';
import Journeys from 'redux/journey';
import { unwrapResult } from '@reduxjs/toolkit';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { selectToken } from 'redux/tokens/reducer';
import { useLoadingSelector } from 'redux/selectors';
import Checkbox from 'components/molecules/Checkbox';
import { set } from 'lodash';
import { bookSchema } from 'src/formik/schema';
import { h } from 'values/Dimensions';

const Bottom = ({
  lang,
  setisDetailsModalVisibal,
  isDarkMode,
  availableDates,
  availabilityJourneys,
  isRequestReceive,
  setisRequestReceive,
}: {
  lang: string;
  setisDetailsModalVisibal: any;
  isDarkMode?: boolean;
  availableDates?: any;
  availabilityJourneys?: any;
  isRequestReceive: boolean;
  setisRequestReceive: any;
}) => {
  const dispatch = useAppDispatch();
  const { closeCustomModal, openCustomModal, CustomModal } = useModalHandler();
  const currentUser = useSelector(selectCurrentUser);
  const token = useSelector(selectToken);
  // state to hold the selected date
  const isLoading = useLoadingSelector(Journeys.thunks.doAddBooking);
  const [isDateModalVisable, setDateModalVisable] = useState(false);
  const [errorTerms, seterrorTerms] = useState(false);

  return (
    <Formik
      initialValues={{ date: '', time: '', members: '', terms: false }}
      onSubmit={values => {
        if (!currentUser) {
          openCustomModal();
        } else {
          dispatch(
            Journeys.thunks.doAddBooking({
              journey_slot_id: values.time,
              number_of_seats: Number(values.members),
            }),
          )
            .then(unwrapResult)
            .then(() => {
              setisDetailsModalVisibal(false);
              setisRequestReceive(true);
              Toast.show({
                type: 'success',
                text2: languages[lang].bookingAdd,
              });
            })
            .catch(err => {
              console.log(err);
              Toast.show({
                type: 'error',
                text2: err.message,
              });
            });
        }
      }}
      validationSchema={bookSchema(lang)}>
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
              placeholder={languages[lang].chooseDate}
              errorStyle={{
                color: COLORS.red,
                fontSize: 12,
              }}
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
            data={getTimes(availabilityJourneys, props.values.date)}
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
              placeholder={languages[lang].numberOfPerson}
            />
          </View>

          <View
            style={{
              marginVertical: 15,
              transform: [{ rotate: lang === 'ar' ? '180deg' : '0deg' }],
            }}>
            <View style={styles(isDarkMode).container}>
              <TouchableOpacity
                style={[
                  props.values.terms ? styles().checked : styles().unchecked,
                  {
                    borderColor:
                      props.errors.terms && errorTerms
                        ? COLORS.red
                        : COLORS.primary,
                  },
                ]}
                onPress={() => {
                  props.setFieldValue('terms', !props.values.terms);
                }}>
                {props.values.terms && <Svg name="true" size={30} />}
              </TouchableOpacity>
              <Text
                onPress={() => {
                  setisDetailsModalVisibal(false);
                }}
                style={styles(isDarkMode).txt}>
                {languages[lang].termCondition}
              </Text>
            </View>
            <TextView
              title={
                errorTerms && props.errors.terms ? props.errors.terms : null
              }
              style={{ color: COLORS.red }}
            />
          </View>

          <Button
            type="primary"
            label={languages[lang].bookNow}
            onPress={() => {
              seterrorTerms(true);
              props.handleSubmit();
            }}
            style={styles().button}
            isLoading={isLoading}
          />

          <DateModal
            // selectedDate={selectedDate}
            // setSelectedDate={setSelectedDate}
            isDateModalVisable={isDateModalVisable}
            setDateModalVisable={setDateModalVisable}
            lang={lang}
            isDarkMode={isDarkMode}
            availableDates={availableDates}
            availabilityJourneys={availabilityJourneys}
            formikProps={props}
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
