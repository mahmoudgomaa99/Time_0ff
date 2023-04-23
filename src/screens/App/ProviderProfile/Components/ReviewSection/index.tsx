import { View, Text } from 'react-native';
import React from 'react';
import Card from './Components/Card';
import languages from 'values/languages';
import { Data } from './data';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import SkeletonItem from 'components/molecules/SkeletonItem';

const ReviewSection = ({
  lang,
  isDarkMode,
  isGetAgencyReviews,
  agencyReviews,
}: {
  isDarkMode?: boolean;
  lang: string;
  isGetAgencyReviews: boolean;
  agencyReviews: any;
}) => {
  return (
    <View>
      {agencyReviews.length > 0 ? (
        isGetAgencyReviews ? (
          [...Array(10)].map(i => (
            <View key={i}>
              <SkeletonItem />
            </View>
          ))
        ) : (
          agencyReviews.map((item: any) => (
            <Card
              lang={lang}
              isDarkMode={isDarkMode}
              name={item.user_name}
              review={item.description}
              image={item.user_image}
              rating={item.rating}
            />
          ))
        )
      ) : (
        <TextView
          title={languages[lang].noReviews}
          style={styles(lang).noReviews}
        />
      )}
    </View>
  );
};

export default ReviewSection;
