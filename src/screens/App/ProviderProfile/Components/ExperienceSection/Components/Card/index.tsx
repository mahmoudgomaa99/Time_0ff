import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { images } from 'src/assets/images';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import { useNavigation } from '@react-navigation/native';

const Card = ({
  title,
  description,
  location,
  name,
  stars,
  lang,
}: {
  title: string;
  description: string;
  location: string;
  name: string;
  stars: string;
  lang: string;
}) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('detailsTrip');
      }}>
      <View
        style={[
          styles.container,
          { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
        ]}>
        <View style={styles.imageContainer}>
          <Image source={images.present} style={styles.image} />
        </View>
        <View style={styles.contentContainer}>
          <View
            style={[
              styles.top,
              { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
            ]}>
            <TextView title={title} style={styles.title} />
            <View style={styles.heart}>
              <Svg name="heart" size={20} />
            </View>
          </View>

          <View>
            <TextView
              title={description}
              style={[
                styles.decription,
                { textAlign: lang === 'ar' ? 'right' : 'left' },
              ]}
            />
          </View>

          <View
            style={[
              styles.location,
              { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
            ]}>
            <Svg name="location" size={20} />
            <TextView title={location} style={styles.locationText} />
          </View>

          <View
            style={[
              styles.end,
              {
                flexDirection: lang === 'ar' ? 'row-reverse' : 'row',
              },
            ]}>
            <Svg name="jamp" size={20} />
            <TextView style={{}} title={name} />
            <Svg name="star" size={20} />
            <TextView title={`(${stars})`} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
