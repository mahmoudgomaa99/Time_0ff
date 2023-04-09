import { View, Text, Switch } from 'react-native';
import React, { useState } from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';

const Switches = ({ lang }: { lang: string }) => {
  const [isNotification, setIsNotification] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleNotification = () =>
    setIsNotification(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  return (
    <View style={{ marginRight: 10 }}>
      <View style={styles(lang).container}>
        <TextView title={languages[lang].allowN} style={styles(lang).text} />
        <Switch
          trackColor={{ false: '#E9E9E9', true: '#81b0ff' }}
          thumbColor={isNotification ? 'white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotification}
          value={isNotification}
        />
      </View>
      <View style={styles(lang).container}>
        <TextView title={languages[lang].darkMode} style={styles(lang).text} />
        <Switch
          trackColor={{ false: '#E9E9E9', true: '#81b0ff' }}
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
