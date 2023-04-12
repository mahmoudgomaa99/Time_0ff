import { View, Text } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { Data } from './data';

const Payment = ({ lang }: { lang: string }) => {
  return (
    <View>
      <TextView title={languages[lang].payment} style={styles(lang).title} />
      <View style={styles(lang).outerContainer}>
        {Data(lang).map(value => (
          <View style={styles(lang).container}>
            <TextView title={value.title} style={styles(lang).firstText} />
            <TextView
              title={`${value.value}${
                value.value == languages[lang].fawry ? '' : languages[lang].le
              }`}
              style={styles(lang).secondText}
            />
          </View>
        ))}
      </View>

      <View style={styles(lang).container}>
        <TextView
          title={languages[lang].total}
          style={styles(lang).firstText}
        />
        <TextView
          title={`${Data(lang)[0].value + Data(lang)[1].value} ${
            languages[lang].le
          }`}
          style={styles(lang).secondText}
        />
      </View>
    </View>
  );
};

export default Payment;