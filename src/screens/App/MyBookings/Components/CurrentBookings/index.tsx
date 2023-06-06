import { View, Text } from 'react-native';
import React, { useCallback } from 'react';
import BookingDetails from './Components/BookingDetails';
import Payment from './Components/Payment';
import { useAppDispatch } from 'redux/store';
import { useSelector } from 'react-redux';
import Journeys, {
  selectCurrentBooking,
  selectCurrentIdBook,
} from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import { useFocusEffect } from '@react-navigation/native';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';

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
  const isGetBookLoading = useLoadingSelector(Journeys.thunks.doGetBooking);

  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetBooking(bookId));
    }, [bookId]),
  );

  console.log(book, 'book');

  return (
    <View style={{ marginHorizontal: 15 }}>
      {book?.activity ? (
        <>
          <BookingDetails isDarkMode={isDarkMode} lang={lang} book={book} />
          <Payment book={book} isDarkMode={isDarkMode} lang={lang} />
        </>
      ) : (
        <TextView
          title={languages[lang].nobook}
          style={styles(lang).noReviews}
        />
      )}
    </View>
  );
};

export default CurrentBookings;
