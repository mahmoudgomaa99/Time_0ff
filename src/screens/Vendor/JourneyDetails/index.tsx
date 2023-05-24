import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, { useCallback } from 'react';
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
import moment from 'moment';
import { useAppDispatch } from 'redux/store';
import Journeys, {
  selectCurrentJourney,
  selectCurrentJourneysAvilabilitey,
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

const JourneyDetails = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const isLoading = useLoadingSelector(Journeys.thunks.doGetJourney);
  const isImageLoading = useLoadingSelector(
    Journeys.thunks.doUpdatJourney_Image,
  );
  const avilabilties = useSelector(selectCurrentJourneysAvilabilitey);
  const routes: any = useRoute();
  const { id } = routes.params;
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const journey = useSelector(selectCurrentJourney);
  const { source, pick } = useLibraryPermission();

  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetJourney(id));
      dispatch(Journeys.thunks.doGetJourneysAvilabilitey(id));
    }, [id]),
  );
  //   console.log(journey, source);

  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top lang={lang} isDarkMode={isDarkMode} id={journey._id} />
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{ paddingBottom: h * 0.04 }}
          showsVerticalScrollIndicator={false}>
          <Formik
            initialValues={{
              image: journey?.image,
              journey_name:
                journey?.journey_name || journey?.arabic_journey_name,
              category: journey?.category || journey?.arabic_category,
              capacity: journey?.capacity.toString(),
              price: journey?.price.toString(),
              location: journey?.location || journey?.arabic_location,
              description: journey?.description || journey?.arabic_description,
              start_date: journey?.start_date,
              availability: avilabilties,
            }}
            onSubmit={values => {}}>
            {props => (
              <View>
                <TouchableOpacity
                  onPress={async () => {
                    pick();
                    props.setFieldValue('image', source);
                  }}
                  style={styles().img_container}>
                  <Image
                    source={source?.assets || { uri: journey?.image }}
                    style={styles().img}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!source}
                  onPress={() => {
                    const body = new FormData();
                    body.append('image', {
                      uri:
                        Platform.OS === 'android'
                          ? source.assets[0].uri
                          : source.assets[0].uri.replace('file://', ''),
                      name: source?.assets[0].fileName,
                      type: source?.assets[0].type,
                    });
                    dispatch(
                      Journeys.thunks.doUpdatJourney_Image({ data: body, id }),
                    ).then(res => {
                      console.log('res', res);
                      Toast.show({
                        type: 'success',
                        text2: languages[lang].imageUpdatedSuccefuly,
                      });
                    });
                  }}
                  style={{
                    alignItems: 'center',
                    backgroundColor: source ? COLORS.primary : COLORS.grey,
                    width: w * 0.3,
                    height: w * 0.1,
                    borderRadius: w * 0.2,
                    alignSelf: 'center',
                    marginVertical: 10,
                  }}>
                  {isImageLoading ? (
                    <View style={{ marginTop: 8 }}>
                      <ActivityIndicator size="small" color={COLORS.white} />
                    </View>
                  ) : (
                    <TextView
                      style={[
                        styles(lang, isDarkMode).text,
                        { color: COLORS.white },
                      ]}
                      title={
                        source
                          ? languages[lang].edit_image
                          : languages[lang].select_image
                      }
                    />
                  )}
                </TouchableOpacity>
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
                    journey.journey_name ||
                    journey.arabic_journey_name ||
                    'Enter journey name'
                  }
                  disabled
                />
                <Picker
                  {...props}
                  borderColor={'#6a6969'}
                  type={'primary'}
                  data={[
                    { label: 'diving', value: 'diving' },
                    { label: 'trips', value: 'trips' },
                    { label: 'aquaPark', value: 'aquaPark' },
                    { label: 'nileTrip', value: 'nileTrip' },
                    { label: 'bBuggy', value: 'bBuggy' },
                    { label: 'surfing', value: 'surfing' },
                  ]}
                  name={'category'}
                  stylingProp={{ borderColor: 'red', borderWith: 30 }}
                  placeholder={
                    journey.category ||
                    journey.arabic_category ||
                    'Select category'
                  }
                  disabled={true}
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
                    journey.description ||
                    journey.arabic_description ||
                    'Enter description'
                  }
                  disabled
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
                    journey.location ||
                    journey.arabic_location ||
                    'Enter location'
                  }
                  disabled
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
                  placeholder={journey.capacity.toString() || 'Enter capacity'}
                  disabled
                />
                <InputView
                  style={styles(lang).input}
                  placeholder={journey.price.toString() || 'Enter price'}
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
                  disabled
                />
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
                        color:
                          props?.values?.start_date?.length > 1
                            ? '#a3a1a1'
                            : '#cdc9c9',
                      },
                    ]}>
                    {props?.values?.start_date?.length > 1
                      ? props?.values?.start_date || journey.start_date
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
                    title={languages[lang].availabilities}
                  />
                  <TextView
                    onPress={() => {
                      navigation.navigate('updateAvailabilitey', avilabilties);
                    }}
                    style={styles(lang, isDarkMode).text}
                    title={languages[lang].edit}
                  />
                </View>
                {avilabilties?.map((item, index) => (
                  <View key={index}>
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
                            color:
                              avilabilties[index]?.available_date?.length > 1
                                ? '#a3a1a1'
                                : '#cdc9c9',
                          },
                        ]}>
                        {avilabilties
                          ? avilabilties[index]?.available_date
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
                        <TouchableOpacity
                          disabled
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
                                color: avilabilties[index]?.hour
                                  ? '#a3a1a1'
                                  : '#cdc9c9',
                              },
                            ]}>
                            {avilabilties[index]?.hour
                              ? moment(
                                  avilabilties[index]?.hour,
                                  'HH:mm:ss',
                                ).format('h:mm A')
                              : languages[lang].hour}
                          </Text>
                        </TouchableOpacity>
                        <InputView
                          disabled
                          style={styles(lang).input}
                          {...props}
                          name={`availability[${index}].capacity`}
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
                          placeholder={
                            avilabilties[0].capacity.toString() || '0'
                          }
                          placeholderTextColor={COLORS.black}
                        />
                      </View>
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
                {/* <Button
                  type="primary"
                  label={languages[lang].delete}
                  style={styles().button}
                  onPress={() => {
                    props.handleSubmit();
                  }}
                  isLoading={isLoading}
                /> */}
              </View>
            )}
          </Formik>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default JourneyDetails;
