import TabBar from 'navigation/TabBar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <TabBar />
    </View>
  );
};

export default Home;
