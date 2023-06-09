import { View, Text } from 'react-native';
import React, { useCallback } from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import { Data } from './data';
import { useAppDispatch } from 'redux/store';
import { useSelector } from 'react-redux';
import Journeys, {
  selectCurrentBooking,
  selectCurrentIdBook,
} from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import { useFocusEffect } from '@react-navigation/native';

const BookingDetails = ({
  lang,
  isDarkMode,
  book,
}: {
  isDarkMode?: boolean;
  lang: string;
  book: any;
}) => {
  console.log(book, 'book');

  return (
    <View>
      <TextView
        title={languages[lang].bookingDetails}
        style={styles(lang, isDarkMode).title}
      />
      <View>
        {Data(lang).map((value: any, index: number) => (
          <View style={styles(lang).container}>
            <View>
              <Svg name={value?.icon} size={60} />
            </View>
            <View>
              <TextView
                title={value.title}
                style={styles(lang, isDarkMode).firstText}
              />
              <TextView
                title={
                  index === 0
                    ? book?.activity || book.category
                    : index === 1
                    ? `${book?.number_of_seats} Members`
                    : index === 2
                    ? book?.createdAt.slice(0, 10)
                    : null
                }
                style={styles(lang, isDarkMode).secondText}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default BookingDetails;
