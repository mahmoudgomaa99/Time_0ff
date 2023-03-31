import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import languages from 'values/languages';

const Tab = ({
  lang,
  select,
  setselect,
}: {
  lang: string;
  select: number;
  setselect: any;
}) => {
  return (
    <View style={styles(lang).ContainerText}>
      <View style={styles(lang).view}>
        <TextView
          title={languages[lang].about}
          style={select === 1 ? styles(lang).blackText : styles(lang).greyText}
          onPress={() => setselect(1)}
        />
        <View style={select === 1 ? styles(lang).line : null}></View>
      </View>

      <View style={styles(lang).view}>
        <TextView
          title={languages[lang].experience}
          style={select === 2 ? styles(lang).blackText : styles(lang).greyText}
          onPress={() => setselect(2)}
        />
        <View style={select === 2 ? styles(lang).lineCenter : null}></View>
      </View>

      <View style={styles(lang).view}>
        <TextView
          title={languages[lang].review}
          style={select === 3 ? styles(lang).blackText : styles(lang).greyText}
          onPress={() => setselect(3)}
        />
        <View style={select === 3 ? styles(lang).line : null}></View>
      </View>
    </View>
  );
};

export default Tab;
