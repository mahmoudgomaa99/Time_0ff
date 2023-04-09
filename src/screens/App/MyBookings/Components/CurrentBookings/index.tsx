import { View, Text } from 'react-native';
import React from 'react';
import BookingDetails from './Components/BookingDetails';
import Payment from './Components/Payment';

const CurrentBookings = ({ lang }: { lang: string }) => {
  return (
    <View style={{ marginHorizontal: 15 }}>
      <BookingDetails lang={lang} />
      <Payment lang={lang} />
    </View>
  );
};

export default CurrentBookings;
