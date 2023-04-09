import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { data } from './data';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import Switches from './Switches';

const Card = ({
  lang,
  isLanguageModel,
  setisLanguageModel,
  isCurrencyModel,
  setisCurrencyModel,
  isPasswordModel,
  setisPasswordModel,
}: {
  lang: string;
  isLanguageModel: boolean;
  setisLanguageModel: any;
  isCurrencyModel: boolean;
  setisCurrencyModel: any;
  isPasswordModel: boolean;
  setisPasswordModel: any;
}) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles(lang).parentContainer}>
      {data(lang).map((value: any, index) => (
        <View>
          <TouchableOpacity
            onPress={() => {
              value.show === 'language'
                ? setisLanguageModel(true)
                : value.show === 'currency'
                ? setisCurrencyModel(true)
                : value.show === 'changePassword'
                ? setisPasswordModel(true)
                : navigation.navigate('contactUs');
            }}
            style={styles(lang).container}>
            <View style={styles(lang).innerContainer}>
              <Svg name={value.iconName} size={60} />
              <TextView title={value.title} style={styles(lang).text} />
            </View>
            <Svg name="smallArrow" size={25} style={styles(lang).arrow} />
          </TouchableOpacity>

          {value.title === 'Language' || value.title === 'اللغه' ? (
            <Switches lang={lang} />
          ) : null}
        </View>
      ))}
    </View>
  );
};

export default Card;
