import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Top from './Components/Top';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import { selectIsDarkMode } from 'redux/DarkMode';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import languages from 'values/languages';
import { useAppDispatch } from 'redux/store';
import Journeys, {
  selectCurrentJourneysAvilabilitey_Vendor,
} from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import COLORS from 'values/colors';
import { w } from 'values/Dimensions';
import TextView from 'atoms/TextView';
import moment from 'moment';
import { unwrapResult } from '@reduxjs/toolkit';
import { getCalendarDates } from './utils/GetCalendarDates';
import { Calendar } from 'react-native-calendars';

const UpdateAvailabilitey = () => {
  const routes: any = useRoute();
  const navigation = useNavigation<any>();
  const { id } = routes.params;
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();
  const [isDateModalVisable, setDateModalVisable] = useState(false);
  const [date, setDate] = useState<any>('');
  const [deletingId, setDeletingId] = useState<any>();
  const availabilitey = useSelector(selectCurrentJourneysAvilabilitey_Vendor);
  const [dateHoures2, setDateHoures2] = useState<any>();
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const isLoading = useLoadingSelector(
    Journeys.thunks.doGetJourneysAvilabilitey_Vendor,
  );
  const isHouresLoading = useLoadingSelector(
    Journeys.thunks.doGetJourneyAvailabilitey_Vendor_Houres,
  );
  const isDeletingLoading = useLoadingSelector(Journeys.thunks.doDeleteSlot);
  useEffect(() => {
    if (isFocused) {
      dispatch(Journeys.thunks.doGetJourneysAvilabilitey_Vendor(id));
    }
  }, [id, isFocused, date]);
  const handleSelectDate = (date: any) => {
    setDate(date.dateString);
    dispatch(
      Journeys.thunks.doGetJourneyAvailabilitey_Vendor_Houres({
        id: id,
        date: date.dateString,
      }),
    )
      .then(unwrapResult)
      .then(res => {
        setDateHoures2(res?.data?.data);
      });
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <ActivityIndicator size={'large'} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top lang={lang} isDarkMode={isDarkMode} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* <Dropdown
            data={getDates(availabilitey)}
            value={date}
            onChange={value => {
              setDate(value.value);
              dispatch(
                Journeys.thunks.doGetJourneyAvailabilitey_Vendor_Houres({
                  id: id,
                  date: value.value,
                }),
              )
                .then(unwrapResult)
                .then(res => {
                  setDateHoures2(res?.data?.data);
                });
            }}
            labelField={'label'}
            valueField={'value'}
            style={{
              marginTop: 20,
              width: w * 0.9,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: COLORS.black,
              justifyContent: 'center',
              paddingVertical: 8,
              paddingHorizontal: 10,
              marginBottom: 20,
            }}
            selectedTextStyle={{
              color: COLORS.black,
            }}
            itemTextStyle={{
              color: COLORS.black,
            }}
            testID="id"
          /> */}
          <Calendar
            current={date}
            onDayPress={handleSelectDate}
            monthFormat={'MMMM yyyy'}
            markedDates={{
              ...getCalendarDates(availabilitey),
              [date]: {
                selected: true,
                selectedColor: '#B5E633',
              },
              [moment().format('YYYY-MM-DD')]: {
                disabled: true,
              },
            }}
            disabledByDefault={true}
            disableAllTouchEventsForDisabledDays={true}
            style={{
              backgroundColor: isDarkMode ? COLORS.darkMode : 'white',
              borderRadius: 10,
              marginTop: 20,
              padding: 10,
              elevation: 3,
              shadowColor: 'grey',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
            }}
            theme={{
              calendarBackground: isDarkMode ? COLORS.darkMode : COLORS.white,
              dayTextColor: isDarkMode ? COLORS.white : '#000',
              // todayTextColor:'red',
              textDisabledColor: '#d6d5d5a7',
              'stylesheet.calendar.header': {
                headerContainer: {
                  color: isDarkMode ? COLORS.white : COLORS.black,
                },
                monthText: { color: isDarkMode ? COLORS.white : COLORS.black },
                arrowImage: {
                  tintColor: isDarkMode ? COLORS.white : COLORS.black,
                },
              },
            }}
            // headerStyle={{}}
          />

          {isHouresLoading ? (
            <View>
              <ActivityIndicator size={'large'} color={COLORS.primary} />
            </View>
          ) : (
            <>
              {Array.isArray(dateHoures2) && dateHoures2?.length > 0 && date ? (
                <>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <TextView
                      title={languages[lang].time}
                      style={styles(lang, isDarkMode).text}
                    />
                    <TextView
                      title={languages[lang].add}
                      onPress={() => {
                        navigation.navigate('addSlot', {
                          date: date,
                          id: id,
                        });
                        setDate('');
                        setDateHoures2([]);
                      }}
                      style={styles(lang, isDarkMode).text}
                    />
                  </View>

                  {dateHoures2?.map((slot: any, index: any) => (
                    <View style={{ marginTop: 10 }} key={slot?._id}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <View
                            style={[
                              styles(lang, isDarkMode).containerStyle,
                              {
                                marginTop: 20,
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingHorizontal: 10,
                                width: w * 0.26,
                              },
                            ]}>
                            <Text
                              style={[
                                styles(lang, isDarkMode).text,
                                {
                                  fontSize: 14,
                                  marginTop: -8,
                                  marginLeft: 6,
                                },
                              ]}>
                              {dateHoures2[index].start_hour
                                ? moment(
                                    dateHoures2[index].start_hour,
                                    'HH:mm:ss',
                                  ).format('h:mm A')
                                : languages[lang].start_hour}
                            </Text>
                          </View>
                          <View
                            style={[
                              styles(lang, isDarkMode).containerStyle,
                              {
                                marginTop: 20,
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingHorizontal: 10,
                                width: w * 0.26,
                              },
                            ]}>
                            <Text
                              style={[
                                styles(lang, isDarkMode).text,
                                {
                                  fontSize: 14,
                                  marginTop: -8,
                                  marginLeft: 6,
                                  color: dateHoures2[index].end_hour
                                    ? '#000'
                                    : '#cdc9c9',
                                },
                              ]}>
                              {dateHoures2[index].end_hour
                                ? moment(
                                    dateHoures2[index].end_hour,
                                    'HH:mm:ss',
                                  ).format('h:mm A')
                                : languages[lang].end_hour}
                            </Text>
                          </View>
                        </View>

                        {slot?.numberOfBookings > 0 ? (
                          <></>
                        ) : (
                          <>
                            <TextView
                              onPress={() => {
                                navigation.navigate(
                                  'updateSingleAvailabilitey',
                                  {
                                    slot: slot,
                                  },
                                );
                                setDate('');
                                setDateHoures2([]);
                              }}
                              style={[
                                styles(lang, isDarkMode).text,
                                { fontSize: 14 },
                              ]}
                              title={'Update'}
                            />
                            {isDeletingLoading && deletingId === slot._id ? (
                              <ActivityIndicator
                                size={'small'}
                                color={COLORS.primary}
                              />
                            ) : (
                              <TextView
                                onPress={() => {
                                  setDeletingId(slot?._id);
                                  dispatch(
                                    Journeys.thunks.doDeleteSlot(slot._id),
                                  )
                                    .then(unwrapResult)
                                    .then(res => {
                                      setDateHoures2((prev: any) =>
                                        prev?.filter(
                                          (s: any) => s._id !== slot._id,
                                        ),
                                      );
                                    })
                                    .catch(err => {
                                      console.log(err);
                                    });
                                }}
                                style={[
                                  styles(lang, isDarkMode).text,
                                  { fontSize: 14 },
                                ]}
                                title={languages[lang].remove}
                              />
                            )}
                          </>
                        )}
                      </View>

                      <View
                        style={{
                          height: 0.8,
                          width: w * 0.98,
                          backgroundColor: COLORS.black,
                          marginVertical: 13,
                        }}
                      />
                    </View>
                  ))}
                </>
              ) : (
                <></>
              )}
            </>
          )}
          {/* <DateModal
            // selectedDate={selectedDate}
            // setSelectedDate={setSelectedDate}
            isDateModalVisable={isDateModalVisable}
            setDateModalVisable={setDateModalVisable}
            lang={lang}
            isDarkMode={isDarkMode}
            availableDates={availableDates}
            availabilityJourneys={availabilityJourneys}
            formikProps={props}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateAvailabilitey;
