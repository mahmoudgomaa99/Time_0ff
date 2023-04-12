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
        {Data(lang).map(value => (
          <View style={styles(lang).container}>
            <View>
              <Svg name={value.icon} size={60} />
            </View>
            <View>
              <TextView title={value.title} style={styles(lang).firstText} />
              <TextView
                title={value.subTitle}
                style={styles(lang).secondText}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default BookingDetails;
