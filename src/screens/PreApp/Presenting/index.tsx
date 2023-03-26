import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { images } from 'src/assets/images';
import { h } from 'values/Dimensions';
import { Pagination } from 'react-native-new-snap-carousel';
import { styles } from './styles';
import { BlurView } from '@react-native-community/blur';
import Svg from 'atoms/Svg';
import { useAppDispatch } from 'redux/store';
import Present from 'redux/Presenting';
import { useSelector } from 'react-redux';
import Language, { selectLanguage } from 'redux/language';
import languages from 'values/languages';
import { data } from './data';

const imageList = [images.branding1, images.branding2, images.branding3];

const PresentingScreen = () => {
  const dispatch = useAppDispatch();
  const [indexSelected, setIndexSelected] = useState(0);
  const lang = useSelector(selectLanguage);

  return (
    <ImageBackground
      source={imageList[indexSelected]}
      style={{
        height: h,
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
      }}>
      <BlurView
        style={styles.bottom}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white">
        <View style={{}} key={indexSelected}>
          <Text
            style={[
              styles.title,
              { textAlign: lang === 'en' ? 'left' : 'right' },
            ]}>
            {data(languages, lang)[indexSelected].title}
          </Text>
          <Text
            style={[
              styles.desc,
              { textAlign: lang === 'en' ? 'left' : 'right' },
            ]}>
            {data(languages, lang)[indexSelected].desc}
          </Text>
        </View>
        <View
          style={{
            flexDirection: lang === 'en' ? 'row' : 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Pagination
            inactiveDotColor="white"
            dotColor={'#58ffee'}
            activeDotIndex={indexSelected}
            dotsLength={imageList.length}
            animatedDuration={50}
            inactiveDotScale={1}
            dotStyle={{ width: 25, height: 5 }}
            containerStyle={{
              height: 80,
              margin: 0,
              transform: [{ rotateY: lang === 'ar' ? '180deg' : '0deg' }],
            }}
          />
          <TouchableOpacity
            style={[
              styles.next,
              { transform: [{ rotateY: lang === 'ar' ? '180deg' : '0deg' }] },
            ]}
            onPress={() => {
              if (indexSelected == 2) {
                dispatch(Present.setIsPresent());
              } else {
                setIndexSelected(prev => prev + 1);
              }
            }}>
            <Svg size={30} name={'rightArrow'} />
          </TouchableOpacity>
        </View>
      </BlurView>

      <TouchableOpacity
        onPress={() => {
          dispatch(Present.setIsPresent());
        }}
        style={styles.backArrow}>
        <Text style={styles.desc}>Skip</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default PresentingScreen;
