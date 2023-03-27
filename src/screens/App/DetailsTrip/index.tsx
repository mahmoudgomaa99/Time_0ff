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
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../redux/language/index';
import { useNavigation } from '@react-navigation/native';
import COLORS from 'values/colors';
import DetailsModal from './Components/DetailsModal';

const DetailsTrip = () => {
  const [isDetailsModalVisibal, setisDetailsModalVisibal] = useState(false);
  const navigation = useNavigation<any>();
  const lang = useSelector(selectLanguage);
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

  const renderItem = ({ item, index }: any) => {
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
            onPress={() => {
              navigation.goBack();
            }}
            style={[
              { transform: [{ rotateY: lang === 'en' ? '180deg' : '0deg' }] },
            ]}>
            <Svg name="arrow" size={60} />
          </TouchableOpacity>
          <Svg name="heartRed" size={60} />
        </View>
        <View style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
          <Carousel
            layout={'default'}
            data={carouselItems}
            sliderWidth={w}
            itemWidth={w}
            renderItem={renderItem}
            onSnapToItem={(index: number) => setActiveIndex(index)}
          />
        </View>
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={activeIndex}
          containerStyle={[
            styles.paginationContainer,
            { direction: lang === 'ar' ? 'rtl' : 'ltr' },
          ]}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.paginationInactiveDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>

      <View style={styles.text}>
        <TextView
          title={languages[lang].divingActivity}
          style={[
            styles.title,
            { textAlign: lang === 'ar' ? 'right' : 'left' },
          ]}
        />

        <View style={[styles.svgAndStar, lang === 'ar' ? styles.arabic : null]}>
          <Svg name="smile" />
          <TextView title={languages[lang].hestegal} style={styles.subTitle} />
          <Svg name="star" size={17} />
          <TextView title={'(3.4)'} />
        </View>

        <View>
          <TextView
            title={languages[lang].description}
            style={[
              styles.descriptionTitle,
              { textAlign: lang === 'ar' ? 'right' : 'left' },
            ]}
          />
          <Text style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
            <TextView
              style={styles.descriptionText}
              title={[languages[lang].lorem]}
            />
          </Text>
        </View>
      </View>

      <View
        style={[styles.bottom, lang === 'ar' ? styles.arabic : styles.arabic]}>
        <View
          style={[
            styles.bottomSec,
            { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
          ]}>
          <TextView
            title={languages[lang].LE}
            style={[styles.price, { marginBottom: lang === 'en' ? 15 : 0 }]}
          />
          <Button
            type="book"
            label={languages[lang].bookNow}
            txtStyle={styles.btn_text}
            onPress={() => {
              setisDetailsModalVisibal(true);
            }}
          />
        </View>
      </View>
      <DetailsModal
        isDetailsModalVisibal={isDetailsModalVisibal}
        setisDetailsModalVisibal={setisDetailsModalVisibal}
      />
    </View>
  );
};

export default DetailsTrip;
