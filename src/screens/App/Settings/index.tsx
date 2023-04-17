import React, { useState } from 'react';
import Top from './Components/Top';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import { styles } from './styles';
import Card from './Components/Card';
import LanguageModel from './Components/LanguageModel';
import CurrencyModel from './Components/CurrencyModel';
import PasswordModel from './Components/PasswordModel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectIsDarkMode } from 'redux/DarkMode';

const Settings = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const lang = useSelector(selectLanguage);
  const [isLanguageModel, setisLanguageModel] = useState(false);
  const [isCurrencyModel, setisCurrencyModel] = useState(false);
  const [isPasswordModel, setisPasswordModel] = useState(false);
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
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
