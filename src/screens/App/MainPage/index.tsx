import { View, Text, ImageBackground, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import { useDispatch, useSelector } from 'react-redux';
import Language, { selectLanguage } from 'redux/language';
import languages from 'values/languages';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import { images } from 'src/assets/images';
import Carousel, { Pagination } from 'react-native-new-snap-carousel';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from './Card';
import COLORS from 'values/colors';
import { w } from 'values/Dimensions';

const MainPage = () => {
  // const lang = useSelector(selectLanguage);
  const lang = 'en';
  const imageList = [images.present, images.present, images.present];
  const [indexSelected, setIndexSelected] = useState(0);

  const cardData = [
    {
      title: languages[lang].cardTitle,
      description: languages[lang].cardDescription,
      location: languages[lang].cardLocation,
      name: languages[lang].cardName,
      stars: languages[lang].cardStars,
    },
    {
      title: languages[lang].cardTitle,
      description: languages[lang].cardDescription,
      location: languages[lang].cardLocation,
      name: languages[lang].cardName,
      stars: languages[lang].cardStars,
    },
    {
      title: languages[lang].cardTitle,
      description: languages[lang].cardDescription,
      location: languages[lang].cardLocation,
      name: languages[lang].cardName,
      stars: languages[lang].cardStars,
    },
    {
      title: languages[lang].cardTitle,
      description: languages[lang].cardDescription,
      location: languages[lang].cardLocation,
      name: languages[lang].cardName,
      stars: languages[lang].cardStars,
    },
    {
      title: languages[lang].cardTitle,
      description: languages[lang].cardDescription,
      location: languages[lang].cardLocation,
      name: languages[lang].cardName,
      stars: languages[lang].cardStars,
    },
  ];

  const categoryData = [
    { title: languages[lang].trips, svgName: 'trips' },
    { title: languages[lang].aquaPark, svgName: 'garden' },
    { title: languages[lang].nileTrip, svgName: 'nileTrips' },
    { title: languages[lang].surfing, svgName: 'surfing' },
    { title: languages[lang].bBuggy, svgName: 'bbuggy' },
    { title: languages[lang].diving, svgName: 'diving' },
  ];

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
      <View style={[styles.Top, lang === 'ar' ? styles.Arabic : '']}>
        <View>
          <Svg name="smile" />
        </View>
        <View style={styles.welcome}>
          <View style={styles.welcomeBack}>
            <Svg name="profile" size={50} />
            <TextView
              title={languages[lang].welcomeBackHome}
              style={styles.welcomeText}
            />
            <Svg name="smile" size={42} />
          </View>
          <TextView title={languages[lang].user} style={styles.nameText} />
        </View>
      </View>

      <View style={[styles.search, lang === 'ar' ? styles.Arabic : '']}>
        <View style={styles.input}>
          <Formik
            initialValues={{ search: '' }}
            onSubmit={values => console.log(values)}>
            {props => (
              <>
                <InputView
                  {...props}
                  name="search"
                  onChangeText={props.handleChange('search')}
                  value={props.values.search}
                  inputContainerStyling={styles.inputContainerStyling}
                  placeholder={languages[lang].searchInApp}
                  leftIcon={<Svg name="search" size={20} />}
                />
              </>
            )}
          </Formik>
        </View>
        <View>
          <Svg name="rightMenu" size={65} />
        </View>
      </View>

      <View style={styles.paginationContainerr}>
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
          containerStyle={[styles.paginationContainer]}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.paginationInactiveDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>

      <View>
        <TextView title={languages[lang].types} style={styles.categoryText} />
        <View>
          <FlatList
            data={categoryData}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.trips}>
                  <Svg name={item.svgName} size={80} />
                  <TextView title={item.title} style={styles.tripText} />
                </View>
              </TouchableOpacity>
            )}
            horizontal={true}
          />
        </View>
      </View>

      <View>
        <View style={[styles.experiences, lang === 'ar' ? styles.Arabic : '']}>
          <TextView
            title={languages[lang].experiences}
            style={styles.experiencesText}
          />
          <TextView title={languages[lang].seeMore} style={styles.seeMore} />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={cardData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {}}>
              <Card
                title={item.title}
                description={item.description}
                location={item.location}
                name={item.name}
                stars={item.stars}
                lang={lang}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default MainPage;
