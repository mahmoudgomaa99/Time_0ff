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
        <View style={styles(lang).container}>
          <TextView
            title={languages[lang].price}
            style={styles(lang).firstText}
          />
          <TextView
            title={`${Data(lang).price} ${languages[lang].le}`}
            style={styles(lang).secondText}
          />
        </View>
        <View style={styles(lang).container}>
          <TextView
            title={languages[lang].others}
            style={styles(lang).firstText}
          />
          <TextView
            title={`${Data(lang).others} ${languages[lang].le}`}
            style={styles(lang).secondText}
          />
        </View>
        <View style={styles(lang).container}>
          <TextView
            title={languages[lang].paidBy}
            style={styles(lang).firstText}
          />
          <TextView title={Data(lang).paidBy} style={styles(lang).secondText} />
        </View>
      </View>
      <View style={styles(lang).container}>
        <TextView
          title={languages[lang].total}
          style={styles(lang).firstText}
        />
        <TextView
          title={`${Data(lang).price + Data(lang).others} ${
            languages[lang].le
          }`}
          style={styles(lang).secondText}
        />
      </View>
    </View>
  );
};

export default Payment;
