import { View, Text } from 'react-native';
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

const Notification = () => {
  const dispatch = useAppDispatch();
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const user = useSelector(selectCurrentUser);
  const notefications = useSelector(selectUserNotefications);
  const [isPayment, setisPayment] = useState(false);

  useEffect(() => {
    dispatch(User.thunks.doGetUserNotefications(user._id));
  }, []);
  // console.log(notefications);

  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
      {Data(lang).length > 0 ? (
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
      ) : (
        <View style={styles(lang).noInbox}>
          <Svg name="bill" size={200} />
          <TextView
            title={languages[lang].notHaveInbox}
            style={styles(lang).text}
          />
        </View>
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
