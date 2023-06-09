import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
const RequestReceive = ({
  lang,
  isRequestReceive,
  setisRequestReceive,
}: {
  lang: string;
  isRequestReceive: boolean;
  setisRequestReceive: any;
}) => {
  return (
    <Modal isVisible={isRequestReceive}>
      <View style={styles(lang).modalContainer}>
        <Svg name="sand" size={100} />
        <TextView
          title={languages[lang].requestReceive}
          style={styles(lang).title}
        />
      </View>
    </Modal>
  );
};

export default RequestReceive;
