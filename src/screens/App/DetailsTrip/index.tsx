import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import Svg from 'atoms/Svg';
import Button from 'components/molecules/Button';
import languages from 'values/languages';
import Carousel, { Pagination } from 'react-native-new-snap-carousel';
import { images } from 'src/assets/images';
import { w } from 'values/Dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DetailsTrip = () => {
  const lang = 'en';
  const imageList = [images.present, images.present, images.present];

  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    {
      image: images.present,
    },
    {
      image: images.present,
    },
    {
      image: images.present,
    },
  ]);

  const renderItem = ({ item, index }:any) => {
    return (
      <View style={styles.carouselItemContainer}>
        <Image source={item.image} style={styles.carouselImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <View style={[styles.SVG, , lang === 'ar' ? styles.arabic : null]}>
          <TouchableOpacity
            onPress={() => {}}
            style={[
              { transform: [{ rotateY: lang === 'en' ? '180deg' : '0deg' }] },
            ]}>
            <Svg name="arrow" size={60} />
          </TouchableOpacity>
          <Svg name="heartRed" size={60} />
        </View>
        <Carousel
          layout={'default'}
          data={carouselItems}
          sliderWidth={w * 0.94}
          itemWidth={w * 0.94}
          renderItem={renderItem}
          onSnapToItem={index => setActiveIndex(index)}
        />
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={activeIndex}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.paginationInactiveDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>

      <View style={styles.text}>
        <TextView title={languages[lang].divingActivity} style={styles.title} />

        <View style={[styles.svgAndStar, lang === 'ar' ? styles.arabic : null]}>
          <Svg name="smile" />
          <TextView title={languages[lang].hestegal} style={styles.subTitle} />
          <Svg name="star" size={17} />
          <TextView title={'(3.4)'} />
        </View>

        <View>
          <TextView
            title={languages[lang].description}
            style={styles.descriptionTitle}
          />
          <TextView
            style={styles.descriptionText}
            title={languages[lang].lorem}
          />
        </View>
      </View>

      <View style={[styles.bottom, lang === 'ar' ? styles.arabic : null]}>
        <TextView title={languages[lang].LE} style={styles.price} />
        <Button type="book" label={languages[lang].bookNow} />
      </View>
    </View>
  );
};

export default DetailsTrip;
