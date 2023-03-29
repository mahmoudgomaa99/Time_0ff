import { View, Text } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { styles } from './styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';

import languages from 'values/languages';
import Card from './Card';
import Top from './Top';
import Bottom from './Bottom';

const DetailsTrip = ({
  isDetailsModalVisibal,
  setisDetailsModalVisibal,
}: {
  isDetailsModalVisibal: boolean;
  setisDetailsModalVisibal: any;
}) => {
  const lang = 'en';
  return (
    <Modal
      isVisible={isDetailsModalVisibal}
      style={{ marginHorizontal: 0, marginBottom: 0 }}>
      <View style={styles.modalContainer}>
        <Top
          lang={lang}
          isDetailsModalVisibal={isDetailsModalVisibal}
          setisDetailsModalVisibal={setisDetailsModalVisibal}
        />
        <ScrollView>
          <Card
            title={languages[lang].cardTitle}
            description={languages[lang].cardDescription}
            location={languages[lang].cardLocation}
            name={languages[lang].cardName}
            stars={languages[lang].cardStars}
            lang={lang}
          />
          <Bottom lang={lang} />
        </ScrollView>
      </View>
    </Modal>
  );
};

export default DetailsTrip;
