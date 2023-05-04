import { View, Image, Platform } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import Carousel, { Pagination } from 'react-native-new-snap-carousel';
import { imageList } from '../data';
import { styles } from './styles';
import { h, w } from 'src/values/Dimensions';

const AdSec = ({
  lang,
  isDarkMode,
}: {
  lang: string;
  isDarkMode?: boolean;
}) => {
  const carouselRef = useRef();
  const [indexSelected, setIndexSelected] = useState(0);
  const renderItem = () => {
    return <Image source={imageList[indexSelected]} style={styles.img} />;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(indexSelected);
      setIndexSelected(prev => (prev === imageList.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={[
        styles.paginationContainer,
        {
          marginHorizontal: lang === 'ar' ? 17 : 15,
          marginLeft: lang === 'ar' ? -15 : 15,
        },
      ]}>
      <View
        style={{
          direction: lang === 'ar' ? 'rtl' : 'ltr',
          flexDirection: 'row',
          transform: [{ rotateY: lang === 'ar' ? '180deg' : '0deg' }],
        }}>
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
          marginLeft:
            Platform.OS === 'ios' ? (lang === 'ar' ? h * 0.07 : 0) : 0,
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
