import { View, Text } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import BookingDetails from './Components/BookingDetails';
import Payment from './Components/Payment';
import { useAppDispatch } from 'redux/store';
import { useSelector } from 'react-redux';
import Journeys, {
  selectCurrentAllBookings,
  selectCurrentBooking,
  selectCurrentIdBook,
} from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import { useFocusEffect } from '@react-navigation/native';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { selectCurrentUser } from 'redux/user';
import { selectCurrency } from 'redux/DarkMode';
import axios from 'axios';
import { set } from 'lodash';

const CurrentBookings = ({
  lang,
  isDarkMode,
}: {
  isDarkMode?: boolean;
  lang: string;
}) => {
  const dispatch = useAppDispatch();
  const book = useSelector(selectCurrentBooking);
  const bookId = useSelector(selectCurrentIdBook);
  const user = useSelector(selectCurrentUser);
  const bookings: any = useSelector(selectCurrentAllBookings);
  const currency = useSelector(selectCurrency);
  const [EGPRate, setEGPRate] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (currency !== 'EGP') {
      setIsLoading(true);
      axios
        .get(
          `https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?base=${currency}`,
          {
            headers: {
              'x-rapidapi-key':
                '7a8a5507famshedd4f1a1d5d9b28p1b3cdbjsn99b3a75a67a9',
            },
          },
        )
        .then(res => {
          setEGPRate(res.data.rates.EGP);
          setIsLoading(false);
        })
        .catch(err => {
          console.log('err', err);
          setIsLoading(false);
        });
    }
  }, []);
  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetBooking(bookId));
      dispatch(Journeys.thunks.doGetAllBookings({ id: user?._id, page: 1 }));
    }, [bookId, user?._id]),
  );

  return (
    <View style={{ marginHorizontal: 15 }}>
      {bookings?.length === 0 ? (
        <TextView
          title={languages[lang].nobook}
          style={styles(lang).noReviews}
        />
      ) : (
        <>
          {book?.activity || (bookings && bookings[0]) ? (
            <>
              <BookingDetails
                isDarkMode={isDarkMode}
                lang={lang}
                book={book ? book : bookings[0]}
              />
              <Payment
                book={book ? book : bookings[0]}
                isDarkMode={isDarkMode}
                lang={lang}
                EGPRate={EGPRate}
                currency={currency}
                isLoading={isLoading}
              />
            </>
          ) : (
            <TextView
              title={languages[lang].nobook}
              style={styles(lang).noReviews}
            />
          )}
        </>
      )}
    </View>
  );
};

export default CurrentBookings;
