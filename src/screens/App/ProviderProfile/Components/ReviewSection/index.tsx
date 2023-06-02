import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import Card from './Components/Card';
import languages from 'values/languages';
import { Data } from './data';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import SkeletonItem from 'components/molecules/SkeletonItem';
import COLORS from 'values/colors';

const ReviewSection = ({
  lang,
  isDarkMode,
  isGetAgencyReviews,
  agencyReviews,
  pageReviews,
  setpageReviews,
}: {
  isDarkMode?: boolean;
  lang: string;
  isGetAgencyReviews: boolean;
  agencyReviews: any;
  pageReviews: number;
  setpageReviews: any;
}) => {
  return (
    <View>
      {agencyReviews.length > 0 ? (
        isGetAgencyReviews && pageReviews === 1 ? (
          [...Array(10)].map(i => (
            <View key={i}>
              <SkeletonItem />
            </View>
          ))
        ) : (
          <>
            <FlatList
              onEndReached={() => {
                setpageReviews((prev: number) => prev + 1);
              }}
              data={agencyReviews}
              renderItem={({ item }) => (
                <Card
                  lang={lang}
                  isDarkMode={isDarkMode}
                  name={item.user_name}
                  review={item.description}
                  image={item.user_image}
                  rating={item.rating}
                />
              )}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
            />
            {isGetAgencyReviews && pageReviews !== 1 && (
              <View style={{ marginBottom: 10 }}>
                <ActivityIndicator size="large" color={COLORS.primary} />
              </View>
            )}
          </>
          // agencyReviews.map((item: any, index: number) => (
          // <Card
          //   key={index}
          //   lang={lang}
          //   isDarkMode={isDarkMode}
          //   name={item.user_name}
          //   review={item.description}
          //   image={item.user_image}
          //   rating={item.rating}
          // />
          // ))
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
