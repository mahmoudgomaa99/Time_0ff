import React, { useState } from 'react';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { launchImageLibrary } from 'react-native-image-picker';
import { Platform } from 'react-native';

function useLibraryPermission() {
  const [isGranted, setIsGranted] = useState<any>();
  const [source, setSource] = useState<any>();

  const pick = () => {
    if (Platform.OS === 'ios') {
      check(PERMISSIONS.IOS.PHOTO_LIBRARY)
        .then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              setIsGranted(false);
              break;
            case RESULTS.DENIED:
              request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(() => {
                setIsGranted(true);
                launchImageLibrary({ quality: 0.5, mediaType: 'photo' }).then(
                  res => setSource(res),
                );
              });
              break;
            case RESULTS.LIMITED:
              setIsGranted(true);
              launchImageLibrary({ quality: 0.5, mediaType: 'photo' }).then(
                res => setSource(res),
              );
              break;
            case RESULTS.GRANTED:
              setIsGranted(true);
              launchImageLibrary({ quality: 0.5, mediaType: 'photo' }).then(
                res => setSource(res),
              );
              break;
            case RESULTS.BLOCKED:
              setIsGranted(false);
              break;
          }
        })
        .catch(error => {
          console.log('an error occured in permission', error);
        });
    } else {
      launchImageLibrary({
        quality: 0.5,
        mediaType: 'photo',
        selectionLimit: 3,
      }).then(res => setSource(res));
    }
  };

  return {
    isGranted,
    source,
    pick,
  };
}

export default useLibraryPermission;
