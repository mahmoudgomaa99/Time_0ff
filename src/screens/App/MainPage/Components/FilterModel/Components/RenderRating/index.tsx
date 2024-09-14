import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';

const RenderRating = ({ rating }: { rating: number }) => {
  let count = 5;
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <View style={styles.container}>
      {[...Array(rating)].map((_, i) => {
        return <Svg name="star" size={25} key={i} />;
      })}
      {[...Array(count - rating)].map((_, i) => {
        return <Svg name="star" size={25} key={i} bgColor="#EEEE" />;
      })}
      <Text
        style={{
          color: isDarkMode ? 'white' : 'black',
        }}>
        ({rating})
      </Text>
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
