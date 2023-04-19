import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
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
import { useNavigation, useRoute } from '@react-navigation/native';
import COLORS from 'values/colors';
import DetailsModal from './Components/DetailsModal';
import { useLoadingSelector } from 'redux/selectors';
import Journeys, { selectCurrentJourney } from 'redux/journey';
import { useAppDispatch } from 'redux/store';
import RequestReceive from './Components/RequestReceive';
import { selectIsDarkMode } from 'redux/DarkMode';

const DetailsTrip = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const [favoutite, setfavoutite] = useState(true);
  const [isDetailsModalVisibal, setisDetailsModalVisibal] = useState(false);
  const [isRequestReceive, setisRequestReceive] = useState(false);
  const navigation = useNavigation<any>();
  const lang = useSelector(selectLanguage);
  const [activeIndex, setActiveIndex] = useState(0);

  const isGetJourneyLoading = useLoadingSelector(Journeys.thunks.doGetJourney);
  const route = useRoute<any>();
  const dispatch = useAppDispatch();
  const journey = useSelector(selectCurrentJourney);

  useEffect(() => {
    dispatch(Journeys.thunks.doGetJourney(route.params?.id));
  }, [route.params?.id]);
  console.log(route.params?.id);

  const [carouselItems, setCarouselItems] = useState([
    {
      image: journey?.image,
    },
    {
      image: journey?.image,
    },
    {
      image: journey?.image,
    },
  ]);

  const renderItem = ({ item, index }: any) => {
    return (
      <View style={styles(isDarkMode).carouselItemContainer}>
        <Image source={{ uri: item.image }} style={styles().carouselImage} />
      </View>
    );
  };
  return (
    <View style={styles(isDarkMode).container}>
      <View style={styles().image}>
        <View style={[styles().SVG, , lang === 'ar' ? styles().arabic : null]}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={[
              { transform: [{ rotateY: lang === 'en' ? '180deg' : '0deg' }] },
            ]}>
            <Svg name="arrow" isTripDetails={true} size={60} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              //make favoriute request
              console.log(journey?.is_favorite)
            }>
            <Svg
              name="heartRed"
              size={60}
              bgColor={journey?.is_favorite ? '#FF4646' : '#dddddd'}
            />
          </TouchableOpacity>
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
            styles().paginationContainer,
            { direction: lang === 'ar' ? 'rtl' : 'ltr' },
          ]}
          dotStyle={styles().paginationDot}
          inactiveDotStyle={styles().paginationInactiveDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>

      <View style={styles().text}>
        <TextView
          title={lang === 'en' ? journey?.category : journey?.arabic_category}
          style={[
            styles(isDarkMode).title,
            { textAlign: lang === 'ar' ? 'right' : 'left' },
          ]}
        />

        <View
          style={[styles().svgAndStar, lang === 'ar' ? styles().arabic : null]}>
          <Svg name="smile" />
          <TextView
            onPress={() => {
              navigation.navigate('providerProfile', {
                id: journey?.agency_id,
              });
            }}
            title={journey?.agency_name}
            style={styles(isDarkMode).subTitle}
          />
          <Svg name="star" size={17} />
          <TextView title={`(${journey?.rating})`} />
        </View>

        <View>
          <TextView
            title={languages[lang].description}
            style={[
              styles(isDarkMode).descriptionTitle,
              { textAlign: lang === 'ar' ? 'right' : 'left' },
            ]}
          />
          <Text style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
            <TextView
              style={styles(isDarkMode).descriptionText}
              title={
                lang === 'en'
                  ? journey?.description
                  : journey?.arabic_description
              }
            />
          </Text>
        </View>
      </View>

      <View
        style={[
          styles().bottom,
          lang === 'ar' ? styles().arabic : styles().arabic,
        ]}>
        <View
          style={[
            styles().bottomSec,
            { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
          ]}>
          <TextView
            title={`${journey?.price} ${languages[lang].le}`}
            style={[
              styles(isDarkMode).price,
              { marginBottom: lang === 'en' ? 15 : 0 },
            ]}
          />
          <Button
            type="book"
            label={languages[lang].bookNow}
            txtStyle={styles().btn_text}
            onPress={() => {
              setisDetailsModalVisibal(true);
            }}
          />
        </View>
      </View>
      <DetailsModal
        isDetailsModalVisibal={isDetailsModalVisibal}
        setisDetailsModalVisibal={setisDetailsModalVisibal}
        isDarkMode={isDarkMode}
      />
      <RequestReceive
        lang={lang}
        isRequestReceive={isRequestReceive}
        setisRequestReceive={setisRequestReceive}
      />
    </View>
  );
};

export default DetailsTrip;
