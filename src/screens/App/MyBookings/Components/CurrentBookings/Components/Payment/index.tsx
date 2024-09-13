import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { Data } from './data';

const Payment = ({
  lang,
  isDarkMode,
  book,
  EGPRate,
  currency,
  isLoading,
}: {
  isDarkMode?: boolean;
  lang: string;
  book: any;
  EGPRate: any;
  currency: any;
  isLoading: boolean;
}) => {
  console.log(book);
  return (
    <View>
      <TextView
        title={languages[lang].payment}
        style={styles(lang, isDarkMode).title}
      />
      <View style={styles(lang).outerContainer}>
        {Data(lang, book, currency, EGPRate).map(value => (
          <View style={styles(lang).container}>
            <TextView
              title={value.title}
              style={styles(lang, isDarkMode).firstText}
            />
            {isLoading ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : (
              <TextView
                title={`${value.value}${
                  value.value == languages[lang].fawry ? '' : ''
                }`}
                style={styles(lang, isDarkMode).secondText}
              />
            )}
          </View>
        ))}
      </View>

      <View style={styles(lang).container}>
        <TextView
          title={languages[lang].total}
          style={styles(lang, isDarkMode).firstText}
        />
        {isLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <TextView
            title={`${Data(lang, book, currency, EGPRate)[0].value}`}
            style={styles(lang, isDarkMode).secondText}
          />
        )}
      </View>
    </View>
  );
};

export default Payment;
