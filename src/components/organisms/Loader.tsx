import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
