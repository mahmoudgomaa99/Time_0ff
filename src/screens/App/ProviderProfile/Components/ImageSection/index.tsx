import { View, Text } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import languages from 'values/languages';

const ImageSection = ({ lang }: { lang: string }) => {
  return (
    <View style={styles(lang).container}>
        <View style={styles(lang).imageContainer}>
            <Svg name='blueLogo' size={180}/>
            <TextView title={'Hastagel Agency'} style={styles(lang).providerName} />
        </View>

        <View style={styles(lang).textContainer}>
            <View style={styles(lang).first}>
                <Svg name='starWithB'/>
                <TextView title={'(3.4)'} style={styles(lang).text}/>
                <TextView title={languages[lang].review} style={styles(lang).text} />
            </View>
            <View style={styles(lang).second}>
                <Svg name='locationWithB'/>
                <TextView title={languages[lang].sharm} style={styles(lang).text}/>
            </View>
        </View>
    </View>
  );
};

export default ImageSection;
