import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import Top from './Components/Top';
import Card from './Components/Card';
import { Data } from './data';
import { ScrollView } from 'react-native-gesture-handler';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import PaymentModal from './Components/PaymentModal';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectIsDarkMode } from 'redux/DarkMode';
import { useAppDispatch } from 'redux/store';
import User, { selectCurrentUser, selectUserNotefications } from 'redux/user';
import { useLoadingSelector } from 'redux/selectors';
import SkeletonItem from 'components/molecules/SkeletonItem';
import { h } from 'values/Dimensions';
import COLORS from 'values/colors';

const Notification = () => {
  const dispatch = useAppDispatch();
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const user = useSelector(selectCurrentUser);
  const notefications = useSelector(selectUserNotefications);
  const isGetNotificationLoading = useLoadingSelector(
    User.thunks.doGetUserNotefications,
  );
  const [page, setpage] = useState(1);
  const [isPayment, setisPayment] = useState(false);

  useEffect(() => {
    dispatch(User.thunks.doGetUserNotefications({ id: 15, page: page }));
  }, []);
  console.log(notefications);
  console.log(page);

  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
      {/* {Data(lang).length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginHorizontal: 10 }}>
          {Data(lang).map(value => (
            <Card
              key={value.id}
              lang={lang}
              iconName={value.iconName}
              message={value.message}
              date={value.date}
              isPayment={isPayment}
              setisPayment={setisPayment}
              isDarkMode={isDarkMode}
            />
          ))}
        </ScrollView>
      ) : ( */}
      {isGetNotificationLoading && page === 1 ? (
        [...Array(20)].map(i => (
          <View key={i}>
            <SkeletonItem />
          </View>
        ))
      ) : (
        <>
          {notefications?.length !== 0 ? (
            <>
              <FlatList
                onEndReached={() => {
                  setpage((prev: number) => prev + 1);
                }}
                data={notefications}
                renderItem={({ item }) => (
                  <Card
                    key={item.id}
                    lang={lang}
                    iconName={item.status}
                    message={item.message}
                    date={item.createdAt}
                    isPayment={isPayment}
                    setisPayment={setisPayment}
                    isDarkMode={isDarkMode}
                  />
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
              />
              {isGetNotificationLoading && page !== 1 && (
                <View style={{ marginBottom: h * 0.1 }}>
                  <ActivityIndicator size="large" color={COLORS.primary} />
                </View>
              )}
            </>
          ) : (
            <View style={styles(lang).noInbox}>
              <Svg name="bill" size={200} />
              <TextView
                title={languages[lang].notHaveInbox}
                style={styles(lang).text}
              />
            </View>
          )}
        </>
      )}

      <PaymentModal
        lang={lang}
        isPayment={isPayment}
        setisPayment={setisPayment}
      />
    </SafeAreaView>
  );
};

export default Notification;
