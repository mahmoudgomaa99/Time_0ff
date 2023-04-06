import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { Data } from './data';
import Svg from 'atoms/Svg';

const LastBookings = ({ lang }: { lang: string }) => {
  return (
    <View>
      <TextView
        title={languages[lang].lastBooking}
        style={styles(lang).title}
      />
      <ScrollView>
        {Data(lang).map(value => (
          <View style={styles(lang).container}>
            <View>
              <Svg name="cube" size={50} />
            </View>
            <View>
              <TextView title={value.title} style={styles(lang).text} />
              <View style={styles(lang).innerContainer}>
                <TextView title={value.date} style={styles(lang).date} />
                <View style={styles(lang).circleContainer}>
                  <View style={styles(lang, value.color).circle}></View>
                  <TextView
                    title={value.status}
                    style={styles(lang, value.color).statusText}
                  />
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LastBookings;
