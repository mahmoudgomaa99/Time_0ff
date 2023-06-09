import { View, Text } from 'react-native';
import React, { useCallback } from 'react';
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
  const bookings = useSelector(selectCurrentAllBookings);
  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetBooking(bookId));
      dispatch(Journeys.thunks.doGetAllBookings({ id: user?._id, page: 1 }));
    }, [bookId, user?._id]),
  );

  return (
    <View style={{ marginHorizontal: 15 }}>
      {bookings.length === 0 ? (
        <TextView
          title={languages[lang].nobook}
          style={styles(lang).noReviews}
        />
      ) : (
        <>
          {book?.activity || bookings[0] ? (
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
