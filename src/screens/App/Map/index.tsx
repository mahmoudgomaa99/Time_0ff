import { View, Text } from 'react-native';
import React, { Fragment, useRef, useState } from 'react';
import { styles } from './styles';
import MapView from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectLocation } from 'redux/Location/index';
import Button from 'components/molecules/Button';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectLanguage } from '../../../redux/language/index';
import InputView from 'components/molecules/Input';
import { Input } from 'react-native-elements';
import Svg from 'atoms/Svg';
import languages from 'values/languages';
import { useNavigation } from '@react-navigation/native';

const Map = () => {
  const navigation = useNavigation<any>();
  const location = useSelector(selectLocation);
  const lang = useSelector(selectLanguage);
  const mapRef = useRef<any>();
  const [search, setSearch] = useState('');
  const CustomInput = () => {
    return (
      <Input
        value={search}
        containerStyle={{}}
        labelStyle={{}}
        leftIcon={<Svg name="search" />}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={styles.map}
        showsUserLocation
        region={{
          latitude: location.lat,
          longitude: location.lang,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
      <Fragment>
        <GooglePlacesAutocomplete
          placeholder={languages[lang].enterYourPlace}
          onPress={(data, details) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyCi9NgyCxICx83KQSRnGZMbQANkRaRbvpU',
            language: lang,
          }}
          textInputProps={
            {
              // InputComp: CustomInput,
            }
          }
          styles={{
            textInputContainer: {},
            textInput: {
              height: 38,
              fontSize: 16,
              textAlign: lang === 'ar' ? 'right' : 'left',
            },
          }}
          fetchDetails
        />
        <View style={{ marginHorizontal: 20 }}>
          <View
            style={{
              flexDirection: lang === 'ar' ? 'row-reverse' : 'row',
              justifyContent: 'space-between',
            }}>
            <View />
            <Button
              label={languages[lang].yourLocation}
              type="map"
              onPress={() => {
                mapRef.current.animateToRegion({
                  latitude: location.lat,
                  longitude: location.lang,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                });
              }}
              style={{ marginBottom: 25 }}
              svg="miniLocation"
              size={15}
            />
          </View>

          <Button
            type="primary"
            onPress={() => {
              navigation.navigate('home');
            }}
            label={languages[lang].addressConfirmation}
          />
        </View>
      </Fragment>
    </SafeAreaView>
  );
};

export default Map;
