import { View, Text } from 'react-native';
import React, { useState } from 'react';
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

const Notification = () => {
  const lang = useSelector(selectLanguage);
  const [isPayment, setisPayment] = useState(false);
  return (
    <View style={styles(lang).container}>
      <Top lang={lang} />
      {Data(lang).length > 0 ? (
        <ScrollView>
          {Data(lang).map(value => (
            <Card
              lang={lang}
              iconName={value.iconName}
              message={value.message}
              date={value.date}
              isPayment={isPayment}
              setisPayment={setisPayment}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles(lang).noInbox}>
          <Svg name="blueLogo" size={200} />
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
    </View>
  );
};

export default Notification;
