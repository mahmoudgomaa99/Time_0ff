import { View, Text, ImageBackground } from 'react-native';
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
import { FlatList } from 'react-native-gesture-handler';
import Card from './Card';
import COLORS from 'values/colors';

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

      <View style={styles.paginationContainer}>
        <ImageBackground
          source={imageList[indexSelected]}
          style={styles.imageBackground}>
          <View>
            <Pagination
              inactiveDotColor="white"
              dotColor={'#58ffee'}
              activeDotIndex={indexSelected}
              dotsLength={imageList.length}
              animatedDuration={50}
              inactiveDotScale={1}
              dotStyle={{ width: 25, height: 6 }}
              containerStyle={{
                height: 62,
                margin: 0,
                transform: [{ rotateY: lang === 'ar' ? '180deg' : '0deg' }],
              }}
            />
          </View>
        </ImageBackground>
      </View>

      <View>
        <TextView title={languages[lang].types} style={styles.categoryText} />
        <View>
          <FlatList
            data={categoryData}
            renderItem={({ item }) => (
              <View style={styles.trips}>
                <Svg name={item.svgName} size={80} />
                <TextView title={item.title} style={styles.tripText} />
              </View>
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
            <Card
              title={item.title}
              description={item.description}
              location={item.location}
              name={item.name}
              stars={item.stars}
              lang={lang}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MainPage;
