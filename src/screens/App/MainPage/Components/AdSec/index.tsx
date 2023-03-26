import { View, Text, ImageBackground, Image } from 'react-native';
import React, { useState, useRef } from 'react';
import Carousel, { Pagination } from 'react-native-new-snap-carousel';
import { imageList } from '../data';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import { h } from 'src/values/Dimensions';
import { w } from '../../../../../values/Dimensions';

const AdSec = () => {
  const carouselRef = useRef();
  const lang = useSelector(selectLanguage);
  const [indexSelected, setIndexSelected] = useState(0);
  const renderItem = () => {
    return <Image source={imageList[indexSelected]} style={styles.img} />;
  };

  return (
    <View
      style={[
        styles.paginationContainer,
        { marginHorizontal: lang === 'ar' ? -17 : 15 },
      ]}>
      <View style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
        <Carousel
          ref={carouselRef}
          data={imageList}
          renderItem={renderItem}
          sliderWidth={w}
          itemWidth={w}
          onSnapToItem={(index: number) => setIndexSelected(index)}
        />
      </View>
      <View
        style={{
          marginTop: -h * 0.05,
          marginLeft: lang === 'ar' ? h * 0.07 : 0,
        }}>
        <Pagination
          inactiveDotColor="white"
          dotColor={'#58ffee'}
          activeDotIndex={indexSelected}
          dotsLength={imageList.length}
          animatedDuration={50}
          inactiveDotScale={1}
          dotStyle={{ width: 25, height: 6 }}
          containerStyle={{
            height: h * 0.08,
            marginTop: -10,
            transform: [{ rotateY: lang === 'ar' ? '180deg' : '0deg' }],
          }}
        />
      </View>
    </View>
  );
};

export default AdSec;
