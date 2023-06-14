import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import { selectIsDarkMode } from 'redux/DarkMode';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import languages from 'values/languages';
import Picker from 'components/molecules/Picker';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
import { useAppDispatch } from 'redux/store';
import Journeys, {
  selectCurrentJourney,
  selectCurrentJourneysAvilabilitey_Vendor,
} from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Top from './Components/Top';
import useLibraryPermission from 'hooks/useLibraryPermission';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Skeleton from '../Profile/Components/Skeleton';
import Button from 'components/molecules/Button';
import moment from 'moment';
import { set } from 'lodash';
import { unwrapResult } from '@reduxjs/toolkit';
import DateModal from '../AddJourney/Components/DateModal';
import { selectCurrentUser } from 'redux/user';

const JourneyDetails = () => {
  const dispatch = useAppDispatch();
  const routes: any = useRoute();
  const navigation = useNavigation<any>();
  const { id } = routes.params;
  const isLoading = useLoadingSelector(Journeys.thunks.doGetJourney);
  const isLoadin2 = useLoadingSelector(
    Journeys.thunks.doGetJourneysAvilabilitey_Vendor,
  );
  const isImageLoading = useLoadingSelector(
    Journeys.thunks.doUpdatJourney_Image,
  );
  const isUpdateDataLoading = useLoadingSelector(
    Journeys.thunks.doUpdateJourneyData,
  );
  const user = useSelector(selectCurrentUser);
  const avilabilties = useSelector(selectCurrentJourneysAvilabilitey_Vendor);
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const journey = useSelector(selectCurrentJourney);
  const { source, pick } = useLibraryPermission(3);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isDateModalVisable, setDateModalVisable] = useState(false);
  const [name, setName] = useState('');

  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetJourney(id));
    }, []),
  );
  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetJourneysAvilabilitey_Vendor(id));
    }, []),
  );
  console.log(journey, 'journey');
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top lang={lang} isDarkMode={isDarkMode} id={journey?._id} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: h * 0.04 }}
        showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            image: journey?.image,
            journey_name: journey?.journey_name || journey?.arabic_journey_name,
            category: journey?.category || journey?.arabic_category,
            capacity: journey?.capacity.toString(),
            price: journey?.price.toString(),
            location: journey?.location || journey?.arabic_location,
            description: journey?.description || journey?.arabic_description,
            start_date: journey?.start_date,
            availability: avilabilties,
          }}
          onSubmit={values => {
            const body = new FormData();
            if (source?.assets?.length > 0) {
              source?.assets?.forEach((item: any, index: any) => {
                const uri =
                  Platform.OS === 'android'
                    ? item.uri
                    : item.uri.replace('file://', '');
                body.append('images', {
                  uri,
                  name: item.fileName || `image_${index}`,
                  type: item.type || 'image/jpeg',
                });
              });
            }
            Promise.all([
              dispatch(
                Journeys.thunks.doUpdateJourneyData({
                  data: {
                    journey_name: values.journey_name,
                    description: values.description,
                    start_date: values.start_date,
                    end_date: values.start_date,
                    capacity: values.capacity,
                    location: values.location,
                    category: values.category,
                    price: values.price,
                    arabic_journey_name: values.journey_name,
                    arabic_description: values.description,
                    arabic_location: values.location,
                    arabic_category: values.category,
                  },
                  id: id,
                }),
              ),
              dispatch(
                Journeys.thunks.doUpdatJourney_Image({
                  data: body,
                  id,
                }),
              ),
            ])
              .then(() => {
                Toast.show({
                  type: 'success',
                  text2: languages[lang].journeyUpdatedSuccefuly,
                });
                Journeys.thunks.doGetAgencyJourneys({
                  id: user?._id,
                  page: 1,
                });
                navigation.goBack();
              })
              .catch(err => {});
          }}>
          {props => (
            <View>
              {isLoading ? (
                <Skeleton />
              ) : (
                <>
                  <View style={styles().img_container}>
                    <Image
                      source={source?.assets || { uri: journey?.images[0] }}
                      style={styles().img}
                    />
                  </View>
                  <Button
                    type="secondry"
                    label={languages[lang].select_image}
                    onPress={() => {
                      pick();
                    }}
                    style={{
                      marginTop: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  />
                  <InputView
                    style={styles(lang).input}
                    {...props}
                    name={'journey_name'}
                    label={languages[lang].journey_name}
                    inputContainerStyling={{
                      direction: lang === 'ar' ? 'rtl' : 'ltr',
                      borderBottomWidth: 0,
                    }}
                    containerStyle={[
                      styles(lang, isDarkMode).containerStyle,
                      { marginTop: 4 },
                    ]}
                    labelStyle={[styles(lang).label_style]}
                    placeholder={
                      journey?.journey_name ||
                      journey?.arabic_journey_name ||
                      'Enter journey name'
                    }
                    disabled={isDisabled}
                  />
                  <Picker
                    {...props}
                    borderColor={'#000'}
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
                    disabled={isDisabled}
                  />
                  <InputView
                    style={styles(lang).input}
                    {...props}
                    name={'description'}
                    label={languages[lang].description}
                    inputContainerStyling={{
                      direction: lang === 'ar' ? 'rtl' : 'ltr',
                      borderBottomWidth: 0,
                    }}
                    containerStyle={[
                      styles(lang, isDarkMode).containerStyle,
                      { marginTop: 4 },
                    ]}
                    labelStyle={[styles(lang).label_style]}
                    placeholder={
                      journey?.description ||
                      journey?.arabic_description ||
                      'Enter description'
                    }
                    disabled={isDisabled}
                  />
                  <InputView
                    style={styles(lang).input}
                    {...props}
                    name={'location'}
                    label={languages[lang].location}
                    inputContainerStyling={{
                      direction: lang === 'ar' ? 'rtl' : 'ltr',
                      borderBottomWidth: 0,
                    }}
                    containerStyle={[
                      styles(lang, isDarkMode).containerStyle,
                      { marginTop: 4 },
                    ]}
                    labelStyle={[styles(lang).label_style]}
                    placeholder={
                      journey?.location ||
                      journey?.arabic_location ||
                      'Enter location'
                    }
                    disabled={isDisabled}
                  />
                  <InputView
                    style={styles(lang).input}
                    {...props}
                    name={'capacity'}
                    label={languages[lang].capacity}
                    inputContainerStyling={{
                      direction: lang === 'ar' ? 'rtl' : 'ltr',
                      borderBottomWidth: 0,
                    }}
                    containerStyle={[
                      styles(lang, isDarkMode).containerStyle,
                      { marginTop: 4 },
                    ]}
                    labelStyle={[styles(lang).label_style]}
                    keyboardType="number-pad"
                    placeholder={
                      journey?.capacity.toString() || 'Enter capacity'
                    }
                    disabled={isDisabled}
                  />
                  <InputView
                    style={styles(lang).input}
                    placeholder={journey?.price.toString() || 'Enter price'}
                    {...props}
                    name={'price'}
                    label={languages[lang].price}
                    inputContainerStyling={{
                      direction: lang === 'ar' ? 'rtl' : 'ltr',
                      borderBottomWidth: 0,
                    }}
                    containerStyle={[
                      styles(lang, isDarkMode).containerStyle,
                      { marginTop: 4 },
                    ]}
                    labelStyle={[styles(lang).label_style]}
                    keyboardType="number-pad"
                    disabled={isDisabled}
                  />
                  <TouchableOpacity
                    disabled={isDisabled}
                    onPress={() => {
                      setName('start_date');
                      setDateModalVisable(true);
                    }}
                    style={[
                      styles(lang, isDarkMode).containerStyle,
                      {
                        marginTop: 20,
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                      },
                    ]}>
                    <Svg name="calendar" />
                    <Text
                      style={[
                        styles(lang, isDarkMode).text,
                        {
                          fontSize: 14,
                          marginTop: -8,
                          marginLeft: 6,
                          color: '#cdc9c9',
                        },
                      ]}>
                      {props?.values?.start_date?.length > 1
                        ? props?.values?.start_date || journey.start_date
                        : languages[lang].start_date}
                    </Text>
                  </TouchableOpacity>
                  <Button
                    type="primary"
                    label={
                      isDisabled
                        ? languages[lang].pressToStartEdit
                        : languages[lang].apply
                    }
                    style={styles().button}
                    onPress={() => {
                      if (isDisabled) {
                        setIsDisabled(false);
                      } else {
                        props.handleSubmit();
                      }
                    }}
                    isLoading={isUpdateDataLoading || isImageLoading}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <TextView
                      style={styles(lang, isDarkMode).text}
                      title={languages[lang].availabilities}
                    />
                    <TextView
                      onPress={() => {
                        navigation.navigate('updateAvailabilitey', {
                          id: journey._id,
                          availabilitey: avilabilties,
                        });
                      }}
                      style={styles(lang, isDarkMode).text}
                      title={languages[lang].edit}
                    />
                  </View>
                </>
              )}
              {isLoadin2 ? (
                <></>
              ) : (
                <>
                  {avilabilties?.map((item, index) => (
                    <View key={index}>
                      <TouchableOpacity
                        disabled
                        style={[
                          styles(lang, isDarkMode).containerStyle,
                          {
                            marginTop: 20,
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                          },
                        ]}>
                        <Svg name="calendar" />
                        <Text
                          style={[
                            styles(lang, isDarkMode).text,
                            {
                              fontSize: 14,
                              marginTop: -8,
                              marginLeft: 6,
                              color: '#cdc9c9',
                            },
                          ]}>
                          {item.date.length > 1
                            ? item.date
                            : languages[lang].start_date}
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <TextView
                          style={styles(lang, isDarkMode).text}
                          title={languages[lang].hours}
                        />
                      </View>
                      {item.details.map((item2, i) => (
                        <View
                          key={i}
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
                            <TouchableOpacity
                              disabled
                              onPress={() => {}}
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
                                    color: '#cdc9c9',
                                  },
                                ]}>
                                {item2.hour
                                  ? moment(item2.hour, 'HH:mm:ss').format(
                                      'h:mm A',
                                    )
                                  : languages[lang].hour}
                              </Text>
                            </TouchableOpacity>
                            <InputView
                              disabled
                              style={styles(lang).input}
                              {...props}
                              name={`availability[${index}].details[${i}].capacity`}
                              label={languages[lang].capacity}
                              inputContainerStyling={{
                                direction: lang === 'ar' ? 'rtl' : 'ltr',
                                borderBottomWidth: 0,
                                // marginLeft: 10,
                              }}
                              containerStyle={[
                                styles(lang, isDarkMode).containerStyle,
                                {
                                  marginTop: 4,
                                  marginLeft: 15,
                                  width: w * 0.4,
                                },
                              ]}
                              labelStyle={[styles(lang).label_style]}
                              keyboardType="number-pad"
                              placeholder={item2.capacity.toString()}
                            />
                          </View>
                        </View>
                      ))}
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
              )}
              <DateModal
                isDateModalVisable={isDateModalVisable}
                setDateModalVisable={setDateModalVisable}
                formikProps={props}
                lang={lang}
                isDarkMode={isDarkMode}
                name={name}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JourneyDetails;
