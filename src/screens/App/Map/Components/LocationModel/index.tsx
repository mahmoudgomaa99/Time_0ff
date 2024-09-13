import { View, Text, Platform } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { useAppDispatch } from 'redux/store';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Location from 'redux/Location';
const LocationModel = ({
  lang,
  isLocationModel,
  setisLocationModel,
  isDarkMode,
}: {
  lang: string;
  isLocationModel: boolean;
  setisLocationModel: any;
  isDarkMode?: boolean;
}) => {
  const dispatch = useAppDispatch();
  return (
    <Modal isVisible={isLocationModel}>
      <View style={styles(lang, isDarkMode).modalContainer}>
        <Svg name="blueLogo" size={100} />
        <TextView
          title={languages[lang].locationAccess}
          style={styles(lang, isDarkMode).title}
        />
        <View style={styles(lang).textContainer}>
          <TextView
            title={languages[lang].allow}
            style={styles(lang).allow}
            onPress={async () => {
              try {
                let permissionStatus;
                if (Platform.OS === 'ios') {
                  permissionStatus = await request(
                    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
                  );
                } else if (Platform.OS === 'android') {
                  permissionStatus = await request(
                    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                  );
                }

                if (permissionStatus === RESULTS.GRANTED) {
                  console.log('Location permission granted');
                  setisLocationModel(false);
                  Geolocation.getCurrentPosition(i => {
                    dispatch(
                      Location.setLocation({
                        location: {
                          lat: i.coords.latitude,
                          lang: i.coords.longitude,
                        },
                      }),
                    );
                  });
                  // Perform actions when permission is granted
                } else {
                  console.log('Location permission denied');
                  setisLocationModel(false);
                  // Handle the case when permission is denied
                }
              } catch (error) {
                console.log('Error requesting location permission:', error);
                setisLocationModel(false);
                // Handle the error scenario
              }
            }}
          />
          <TextView
            title={languages[lang].cancel}
            style={styles(lang).cancel}
            onPress={() => setisLocationModel(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LocationModel;
