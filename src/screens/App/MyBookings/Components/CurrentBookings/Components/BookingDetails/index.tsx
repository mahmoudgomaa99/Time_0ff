import { View, Text } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import { Data } from './data';

const BookingDetails = ({ lang }: { lang: string }) => {
  return (
    <View>
      <TextView
        title={languages[lang].bookingDetails}
        style={styles(lang).title}
      />
      <View>
        <View style={styles(lang).container}>
          <View>
            <Svg name="cube" size={60} />
          </View>
          <View>
            <TextView
              title={languages[lang].experience}
              style={styles(lang).firstText}
            />
            <TextView
              title={Data(lang).experience}
              style={styles(lang).secondText}
            />
          </View>
        </View>
        <View style={styles(lang).container}>
          <View>
            <Svg name="cube" size={60} />
          </View>
          <View>
            <TextView
              title={languages[lang].numberOfPerson}
              style={styles(lang).firstText}
            />
            <TextView
              title={Data(lang).numOfPerson}
              style={styles(lang).secondText}
            />
          </View>
        </View>
        <View style={styles(lang).container}>
          <View>
            <Svg name="cube" size={60} />
          </View>
          <View>
            <TextView
              title={languages[lang].date}
              style={styles(lang).firstText}
            />
            <TextView title={Data(lang).date} style={styles(lang).secondText} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookingDetails;
