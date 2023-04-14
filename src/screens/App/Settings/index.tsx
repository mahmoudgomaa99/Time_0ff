import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Top from './Components/Top';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import { styles } from './styles';
import { data } from './Components/Card/data';
import { useNavigation } from '@react-navigation/native';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import Card from './Components/Card';
import LanguageModel from './Components/LanguageModel';
import CurrencyModel from './Components/CurrencyModel';
import PasswordModel from './Components/PasswordModel';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
  const lang = useSelector(selectLanguage);
  const [isLanguageModel, setisLanguageModel] = useState(false);
  const [isCurrencyModel, setisCurrencyModel] = useState(false);
  const [isPasswordModel, setisPasswordModel] = useState(false);
  return (
    <SafeAreaView style={styles(lang).container}>
      <Top lang={lang} />
      <Card
        lang={lang}
        isLanguageModel={isLanguageModel}
        setisLanguageModel={setisLanguageModel}
        isCurrencyModel={isCurrencyModel}
        setisCurrencyModel={setisCurrencyModel}
        isPasswordModel={isPasswordModel}
        setisPasswordModel={setisPasswordModel}
      />
      <LanguageModel
        isLanguageModel={isLanguageModel}
        setisLanguageModel={setisLanguageModel}
      />
      <CurrencyModel
        lang={lang}
        isCurrencyModel={isCurrencyModel}
        setisCurrencyModel={setisCurrencyModel}
      />
      <PasswordModel
        lang={lang}
        isPasswordModel={isPasswordModel}
        setisPasswordModel={setisPasswordModel}
      />
    </SafeAreaView>
  );
};

export default Settings;
