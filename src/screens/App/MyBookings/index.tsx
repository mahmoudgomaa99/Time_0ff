import React, { useState } from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import Top from './Components/Top';
import Tab from './Components/Tab';
import CurrentBookings from './Components/CurrentBookings';
import LastBookings from './Components/LastBookings';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyBookings = () => {
  const lang = useSelector(selectLanguage);
  const [select, setselect] = useState(1);
  return (
    <SafeAreaView style={styles(lang).container}>
      <Top lang={lang} />
      <Tab lang={lang} select={select} setselect={setselect} />

      {select === 1 ? (
        <CurrentBookings lang={lang} />
      ) : (
        <LastBookings lang={lang} />
      )}
    </SafeAreaView>
  );
};

export default MyBookings;
