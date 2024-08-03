import { View, Image, Platform } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import Carousel, { Pagination } from 'react-native-new-snap-carousel';
import { styles } from './styles';
import { h, w } from 'src/values/Dimensions';
import { useSelector } from 'react-redux';
import { selectAds } from 'redux/user';

const AdSec = ({
  lang,
  isDarkMode,
}: {
  lang: string;
  isDarkMode?: boolean;
}) => {
  const carouselRef = useRef<any>();
  const [indexSelected, setIndexSelected] = useState(0);
  const ads = useSelector(selectAds);

  const renderItem = () => {
    return (
      <Image source={{ uri: ads?.[indexSelected]?.img }} style={styles.img} />
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef?.current?.snapToNext();
    }, 10000);
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
          data={ads}
          renderItem={renderItem}
          sliderWidth={w}
          itemWidth={w}
          onSnapToItem={(index: number) => setIndexSelected(index)}
          loop
          autoplay={false}
        />
      </View>
      <View
        style={{
          marginTop: -h * 0.05,
          marginLeft: -20,
        }}>
        <Pagination
          inactiveDotColor="#D9D9D9"
          dotColor={'#0370D6'}
          activeDotIndex={indexSelected}
          dotsLength={ads?.length}
          animatedDuration={50}
          inactiveDotScale={1}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: -2,
          }}
          containerStyle={{
            height: h * 0.08,
            marginTop: h * 0.04,
            transform: [{ rotateY: lang === 'ar' ? '180deg' : '0deg' }],
          }}
        />
      </View>
    </View>
  );
};

export default AdSec;
