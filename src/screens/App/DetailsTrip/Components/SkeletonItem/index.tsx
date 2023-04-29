import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { h, w } from 'values/Dimensions';

const SkeletonBody = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item>
        <View style={styles.img} />
        <View style={styles.title} />
        <View style={styles.agency} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonBody;
const styles = StyleSheet.create({
  img: {
    width: w * 0.98,
    height: h * 0.4,
    borderRadius: 27,
    alignSelf: 'center',
  },
  title: {
    height: h * 0.06,
    width: w * 0.5,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  agency: {
    height: h * 0.06,
    width: w * 0.7,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
