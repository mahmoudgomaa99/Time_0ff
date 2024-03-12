import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { images } from 'src/assets/images';
import { Pagination } from 'react-native-new-snap-carousel';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import { useAppDispatch } from 'redux/store';
import Present from 'redux/Presenting';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import languages from 'values/languages';
import { data } from './data';
import { w } from '../../../values/Dimensions';
import COLORS from 'values/colors';
import * as Progress from 'react-native-progress';

const PresentingScreen = () => {
  const dispatch = useAppDispatch();
  const [indexSelected, setIndexSelected] = useState(0);
  const lang = useSelector(selectLanguage);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Image
        source={images.onboardingbg}
        style={{
          width: '100%',
          resizeMode: 'cover',
          height: '80%',
        }}
      />
      <View style={styles.bottom_android}>
        <View style={{ opacity: 1.45 }} key={indexSelected}>
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
            marginLeft: lang === 'ar' ? 0 : -w * 0.06,
            marginHorizontal: 20,
            opacity: 1.45,
            marginTop: 10,
          }}>
          <Pagination
            inactiveDotColor="#FFDED6"
            dotColor={'#0370D6'}
            activeDotIndex={indexSelected}
            dotsLength={3}
            animatedDuration={50}
            inactiveDotScale={1}
            dotStyle={{ width: 20, height: 7 }}
            inactiveDotStyle={{ width: 8, height: 8 }}
            containerStyle={{
              height: 80,
              margin: 0,
              marginRight: lang === 'ar' ? -w * 0.06 : 0,
              transform: [{ rotateY: lang === 'ar' ? '180deg' : '0deg' }],
            }}
          />
          <View>
            <Progress.Circle
              size={w * 0.13}
              progress={
                indexSelected === 2 ? 1 : indexSelected === 1 ? 0.7 : 0.3
              }
              thickness={3}
              borderWidth={0}
              color="#0370D6"
              unfilledColor="#D9D9D9">
              <View
                style={[
                  styles.next,
                  {
                    transform: [{ rotateY: lang === 'en' ? '180deg' : '0deg' }],
                  },
                ]}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    if (indexSelected == 2) {
                      dispatch(Present.setIsPresent());
                    } else {
                      setIndexSelected(prev => prev + 1);
                    }
                  }}>
                  <Svg size={25} name={'smallArrow'} bgColor="white" />
                </TouchableOpacity>
              </View>
            </Progress.Circle>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PresentingScreen;
