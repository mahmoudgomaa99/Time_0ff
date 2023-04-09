import { View, Text } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
const LocationModel = ({
  lang,
  isLocationModel,
  setisLocationModel,
}: {
  lang: string;
  isLocationModel: boolean;
  setisLocationModel: any;
}) => {
  return (
    <Modal isVisible={isLocationModel}>
      <View style={styles(lang).modalContainer}>
        <Svg name="blueLogo" size={100} />
        <TextView
          title={languages[lang].locationAccess}
          style={styles(lang).title}
        />
        <View style={styles(lang).textContainer}>
          <TextView
            title={languages[lang].allow}
            style={styles(lang).allow}
            onPress={() => setisLocationModel(false)}
          />
          <TextView
            title={languages[lang].cancel}
            style={styles(lang).cancel}
            onPress={() => setisLocationModel(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LocationModel;
