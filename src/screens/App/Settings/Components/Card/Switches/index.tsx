import { View, Text, Switch } from 'react-native';
import React, { useState } from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { DarkMode, selectIsDarkMode } from 'redux/DarkMode';
import { useAppDispatch } from 'redux/store';
import COLORS from 'values/colors';

const Switches = ({ lang }: { lang: string }) => {
  const dispatch = useAppDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);
  const [isNotification, setIsNotification] = useState(true);

  const toggleNotification = () =>
    setIsNotification(previousState => !previousState);
  const toggleDarkMode = () => {
    dispatch(DarkMode.ChangeMode());
  };
  return (
    <View style={{ marginRight: 10 }}>
      <View style={styles(lang).container}>
        <TextView
          title={languages[lang].allowN}
          style={[
            styles(lang).text,
            { color: isDarkMode ? COLORS.white : COLORS.black },
          ]}
        />
        <Switch
          trackColor={{ false: '#E9E9E9', true: '#81b0ff' }}
          thumbColor={isNotification ? 'white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotification}
          value={isNotification}
        />
      </View>
      <View style={styles(lang).container}>
        <TextView
          title={languages[lang].darkMode}
          style={[
            styles(lang).text,
            { color: isDarkMode ? COLORS.white : COLORS.black },
          ]}
        />
        <Switch
          trackColor={{ false: '#E9E9E9', true: '#11d647' }}
          thumbColor={isDarkMode ? 'white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>
    </View>
  );
};

export default Switches;
