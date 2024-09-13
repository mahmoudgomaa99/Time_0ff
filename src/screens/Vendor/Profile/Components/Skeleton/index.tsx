import { View, Text } from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { styles } from './styles';

const Skeleton = () => {
  return (
    <SkeletonPlaceholder borderRadius={15} backgroundColor="#c8c8c8">
      <SkeletonPlaceholder.Item marginLeft={'auto'} marginRight={'auto'}>
        <View style={styles().image} />
        <View style={styles().textIn} />
        <View style={styles().containerStyleIn} />
        <View style={styles().containerStyleIn} />
        <View style={styles().containerStyleIn} />
        <View style={styles().containerStyleIn} />
        <View style={styles().containerStyleIn} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default Skeleton;
