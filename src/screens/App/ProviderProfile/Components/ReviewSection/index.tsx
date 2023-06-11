import {
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Card from './Components/Card';
import languages from 'values/languages';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import SkeletonItem from 'components/molecules/SkeletonItem';
import COLORS from 'values/colors';
import InputView from 'components/molecules/Input';
import { Formik } from 'formik';
import Button from 'components/molecules/Button';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';
import { h, w } from 'values/Dimensions';
import { useAppDispatch } from 'redux/store';
import Journeys, { selectCurrentAgencyReviews } from 'redux/journey';
import Svg from 'atoms/Svg';
import { useLoadingSelector } from 'redux/selectors';
import { unwrapResult } from '@reduxjs/toolkit';
import { set } from 'lodash';

const ReviewSection = ({
  lang,
  isDarkMode,
  isGetAgencyReviews,
  pageReviews,
  setpageReviews,
  agency,
  setpageJourneys,
}: {
  isDarkMode?: boolean;
  lang: string;
  isGetAgencyReviews: boolean;
  pageReviews: number;
  setpageReviews: any;
  agency: any;
  setpageJourneys: any;
}) => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectCurrentUser);
  const isLoading = useLoadingSelector(Journeys.thunks.doRateAgency);
  const agencyReviews = useSelector(selectCurrentAgencyReviews);
  return (
    <View>
      {isGetAgencyReviews && pageReviews === 1 ? (
        [...Array(10)].map(i => (
          <View key={i}>
            <SkeletonItem />
          </View>
        ))
      ) : (
        <>
          {agencyReviews?.length !== 0 ? (
            <View style={{ height: h * 0.2 }}>
              <FlatList
                // style={{ height: h * 0.1 }}
                contentContainerStyle={{ paddingBottom: 20 }}
                onEndReached={() => {
                  setpageReviews((prev: number) => prev + 1);
                }}
                data={agencyReviews}
                renderItem={({ item }) => (
                  <Card
                    lang={lang}
                    isDarkMode={isDarkMode}
                    name={item.user_name}
                    review={item.description}
                    image={item.user_image}
                    rating={item.rating}
                  />
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
              />
              {isGetAgencyReviews && pageReviews !== 1 && (
                <View style={{ marginBottom: 20 }}>
                  {/* <ActivityIndicator size="small" color={COLORS.primary} /> */}
                </View>
              )}
            </View>
          ) : (
            <TextView
              title={languages[lang].noReviews}
              style={styles(lang).noReviews}
            />
          )}
        </>
      )}
      <Formik
        initialValues={{ rating: 1, description: '' }}
        onSubmit={values => {
          setpageReviews(1);
          dispatch(
            Journeys.thunks.doRateAgency({
              id: agency.agencyDataRes._id,
              body: values,
            }),
          )
            .then(unwrapResult)
            .then(res => {
              values.description = ' ';
              values.rating = 1;
              dispatch(
                Journeys.thunks.doGetAgencyReviews({
                  id: agency.agencyDataRes._id,
                  page: 1,
                }),
              );
            })
            .catch(err => {
              console.log(err);
            });
        }}>
        {props => (
          <View style={styles(lang).add_review}>
            <View style={styles(lang).top_sec}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={{ uri: user.image }}
                  style={styles(lang).user_image}
                />
                <TextView
                  title={user.name}
                  style={styles(lang, isDarkMode).user_name}
                  numberOfLines={1}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <TouchableOpacity
                    onPress={() => {
                      props.setFieldValue('rating', i);
                    }}>
                    <Svg
                      name="star"
                      bgColor={props.values.rating >= i ? '#ffc757' : '#8e8e8e'}
                      size={22}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <InputView
              {...props}
              values={props.values.description}
              name={'description'}
              label={languages[lang].Review}
              placeholder={languages[lang].Writeyourreviewhere}
              inputContainerStyling={[styles(lang, isDarkMode).containerStyle]}
            />
            <Button
              label={languages[lang].AddReview}
              onPress={props.handleSubmit}
              type="book"
              txtStyle={{ color: COLORS.white }}
              style={{ marginHorizontal: w * 0.1 }}
              isLoading={isLoading}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewSection;
