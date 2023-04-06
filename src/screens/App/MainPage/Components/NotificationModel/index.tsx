import { View, Text } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
const NotificationModel = ({
  lang,
  isNotificationModel,
  setisNotificationModel,
}: {
  lang: string;
  isNotificationModel: boolean;
  setisNotificationModel: any;
}) => {
  return (
    <Modal isVisible={isNotificationModel}>
      <View style={styles(lang).modalContainer}>
        <Svg name="blueLogo" size={100} />
        <TextView
          title={languages[lang].allowNotification}
          style={styles(lang).title}
        />
        <View style={styles(lang).textContainer}>
          <TextView
            title={languages[lang].allow}
            style={styles(lang).allow}
            onPress={() => setisNotificationModel(false)}
          />
          <TextView
            title={languages[lang].cancel}
            style={styles(lang).cancel}
            onPress={() => setisNotificationModel(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default NotificationModel;
