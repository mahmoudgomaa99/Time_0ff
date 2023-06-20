import { Platform } from 'react-native';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
export const checkLocationPermission = async (setisLocationModel: any) => {
  try {
    let permissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    if (permissionStatus === RESULTS.GRANTED) {
      console.log('Location permission is granted');
      // Perform actions when permission is granted
      setisLocationModel(false);
    } else {
      setisLocationModel(true);
      // Perform actions when permission is not granted
    }
  } catch (error) {
    console.log('Error checking location permission:', error);
    // Handle the error scenario
  }
};
