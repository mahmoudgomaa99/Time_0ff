import { View, ActivityIndicator, FlatList } from 'react-native';
import React, { useCallback, useState } from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import { selectIsDarkMode } from 'redux/DarkMode';
import Card from './Components/Card';
import languages from 'values/languages';
import TextView from 'atoms/TextView';
import Journeys, { selectCurrentAgencyNotification } from 'redux/journey';
import { useAppDispatch } from 'redux/store';
import { useLoadingSelector } from 'redux/selectors';
import { useFocusEffect } from '@react-navigation/native';
import { selectCurrentUser } from 'redux/user';
import COLORS from 'values/colors';
import SkeletonItem from 'components/molecules/SkeletonItem';
import { selectToken } from 'redux/tokens/reducer';

const Notefication = () => {
  const dispatch = useAppDispatch();
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const notification = useSelector(selectCurrentAgencyNotification);
  const isGetNotificationLoading = useLoadingSelector(
    Journeys.thunks.doGetAgencyNotification,
  );
  const user = useSelector(selectCurrentUser);
  // const token = useSelector(selectToken);
  const [page, setpage] = useState(1);

  useFocusEffect(
    useCallback(() => {
      dispatch(
        Journeys.thunks.doGetAgencyNotification({ id: user._id, page: page }),
      );
    }, [user?._id, page]),
  );
  // console.log(token, 'kkk');

  return (
    <View style={styles(lang, isDarkMode).container}>
      <>
        {isGetNotificationLoading && page === 1 ? (
          [...Array(5)].map(i => (
            <View key={i}>
              <SkeletonItem />
            </View>
          ))
        ) : notification?.length !== 0 ? (
          <>
            <FlatList
              contentContainerStyle={{ paddingBottom: 20 }}
              onEndReached={() => {
                setpage((prev: number) => prev + 1);
              }}
              data={notification}
              renderItem={({ item }) => (
                <Card
                  lang={lang}
                  iconName={'newActivity'}
                  message={item.message}
                  date={item.createdAt.slice(0, 10)}
                  isDarkMode={isDarkMode}
                  id={item.booking_id}
                  user={user}
                  page={page}
                  setPage={setpage}
                />
              )}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item: any) => item._id}
            />
            {isGetNotificationLoading && page !== 1 && (
              <ActivityIndicator size="large" color={COLORS.primary} />
            )}
          </>
        ) : (
          <View style={styles(lang).noInbox}>
            <TextView
              title={languages[lang].noNotification}
              style={styles(lang, isDarkMode).text}
            />
          </View>
        )}
      </>
      {/* {Data(lang).length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginHorizontal: 10 }}>
          {Data(lang).map(value => (
            <Card
              lang={lang}
              iconName={value.iconName}
              message={value.message}
              date={value.date}
              isDarkMode={isDarkMode}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles(lang).noInbox}>
          <TextView
            title={languages[lang].noNotification}
            style={styles(lang, isDarkMode).text}
          />
        </View>
      )} */}
    </View>
  );
};

export default Notefication;
