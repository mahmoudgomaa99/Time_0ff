import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Top from './Components/Top';
import { FormikProps } from 'formik';
import Modal from 'react-native-modal';
import { styles } from './styles';
import Button from 'components/molecules/Button';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import languages from 'values/languages';

const TimeModal = ({
  isTimeModalVisable,
  setTimeModalVisable,
  formikProps,
  lang,
  isDarkMode,
  name,
}: {
  isTimeModalVisable: any;
  setTimeModalVisable: any;
  formikProps: FormikProps<any>;
  lang: string;
  isDarkMode?: boolean;
  name: string;
}) => {
  const [Time, setTime] = useState(new Date());
  return (
    <Modal
      isVisible={isTimeModalVisable}
      style={{ marginHorizontal: 0, marginBottom: 0 }}>
      <View style={styles(isDarkMode).modalContainer}>
        <View style={{ flex: 1, justifyContent: 'center', zIndex: 10 }}>
          <Top
            isTimeModalVisable={isTimeModalVisable}
            setTimeModalVisable={setTimeModalVisable}
            lang={lang}
            isDarkMode={isDarkMode}
          />
          <DatePicker
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
            mode="time"
            date={Time}
            onDateChange={time => {
              const formattedTime = moment(time).format('HH:mm:ss');
              formikProps.setFieldValue(name, formattedTime);
            }}
            textColor="#000"
          />
          <Button
            type="primary"
            label={languages[lang].apply}
            style={styles().button}
            onPress={() => {
              setTimeModalVisable(false);
              formikProps.handleSubmit;
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default TimeModal;
