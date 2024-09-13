import React, { useCallback, useState } from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import Top from './Components/Top';
import Tab from './Components/Tab';
import CurrentBookings from './Components/CurrentBookings';
import LastBookings from './Components/LastBookings';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectIsDarkMode } from 'redux/DarkMode';

const MyBookings = () => {
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [select, setselect] = useState(1);
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
      <Tab
        isDarkMode={isDarkMode}
        lang={lang}
        select={select}
        setselect={setselect}
      />

      {select === 1 ? (
        <CurrentBookings isDarkMode={isDarkMode} lang={lang} />
      ) : (
        <LastBookings isDarkMode={isDarkMode} lang={lang} />
      )}
    </SafeAreaView>
  );
};

export default MyBookings;
