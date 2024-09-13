import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
const FlightConfirmedModel = ({
  lang,
  isFlightConfirmed,
  setisFlightConfirmed,
}: {
  lang: string;
  isFlightConfirmed: boolean;
  setisFlightConfirmed: any;
}) => {
  return (
    <Modal isVisible={isFlightConfirmed}>
      <View style={styles(lang).modalContainer}>
        <Svg name="planet" size={100} />
        <TextView
          title={languages[lang].flightConfirmed}
          style={styles(lang).title}
        />
        <View style={styles(lang).textContainer}>
          <TextView
            title={languages[lang].details}
            style={styles(lang).allow}
            onPress={() => {
              setisFlightConfirmed(false);
            }}
          />
          <TextView
            title={languages[lang].cancel}
            style={styles(lang).cancel}
            onPress={() => setisFlightConfirmed(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default FlightConfirmedModel;
