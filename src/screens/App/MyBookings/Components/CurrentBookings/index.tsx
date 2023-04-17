import { View, Text } from 'react-native';
import React from 'react';
import BookingDetails from './Components/BookingDetails';
import Payment from './Components/Payment';

const CurrentBookings = ({
  lang,
  isDarkMode,
}: {
  isDarkMode?: boolean;
  lang: string;
}) => {
  return (
    <View style={{ marginHorizontal: 15 }}>
      <BookingDetails isDarkMode={isDarkMode} lang={lang} />
      <Payment isDarkMode={isDarkMode} lang={lang} />
    </View>
  );
};

export default CurrentBookings;
