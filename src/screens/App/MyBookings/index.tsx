import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import Top from './Components/Top';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import Tab from './Components/Tab';
import CurrentBookings from './Components/CurrentBookings';
import LastBookings from './Components/LastBookings';

const MyBookings = () => {
  const lang = useSelector(selectLanguage);
  const [select, setselect] = useState(1);
  return (
    <View style={styles(lang).container}>
      <Top lang={lang} />
      <Tab lang={lang} select={select} setselect={setselect} />

      {select === 1 ? <CurrentBookings lang={lang} /> : <LastBookings lang={lang}/>}
    </View>
  );
};

export default MyBookings;
