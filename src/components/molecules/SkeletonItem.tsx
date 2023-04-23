import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { h, w } from 'values/Dimensions';
export const SKELETON_SPEED = 1500;
export const SKELETON_BG = '#dddddd';
export const SKELETON_HIGHLIGHT = '#e7e7e7';
export const MAX_RATING_DEVIATION = 200;
const { width, height } = Dimensions.get('window');

const SkeletonItem = () => {
  return (
    <SkeletonPlaceholder borderRadius={15} backgroundColor="#c8c8c8">
      <SkeletonPlaceholder.Item marginLeft={'auto'} marginRight={'auto'}>
        <View
          style={{
            height: h * 0.15,
            width: w * 0.9,
            marginBottom: 10,
          }}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonItem;
