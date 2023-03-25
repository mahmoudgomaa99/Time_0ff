import TabBar from 'navigation/TabBar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TabBar />
    </SafeAreaView>
  );
};

export default Home;
