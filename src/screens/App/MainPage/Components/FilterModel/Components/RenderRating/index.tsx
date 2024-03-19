import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';

const RenderRating = ({ rating }: { rating: number }) => {
  let count = 5;
  return (
    <View style={styles.container}>
      {[...Array(rating)].map((_, i) => {
        return <Svg name="star" size={25} key={i} />;
      })}
      {[...Array(count - rating)].map((_, i) => {
        return <Svg name="star" size={25} key={i} bgColor="#EEEE" />;
      })}
      <Text>({rating})</Text>
    </View>
  );
};

export default RenderRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
