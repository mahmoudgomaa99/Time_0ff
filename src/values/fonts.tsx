import {Platform} from 'react-native';

const Fonts = {
  AndadaBold: Platform.OS === 'ios' ? 'AndadaPro-Bold' : 'AndadaPro-Bold',
  AndadaBoldItalic:
    Platform.OS === 'ios' ? 'AndadaPro-BoldItalic' : 'AndadaPro-BoldItalic',
  AndadaExtraBold:
    Platform.OS === 'ios' ? 'AndadaPro-ExtraBold' : 'AndadaPro-ExtraBold',
  AndadaExtraBoldItalic:
    Platform.OS === 'ios'
      ? 'AndadaPro-ExtraBoldItalic'
      : 'AndadaPro-ExtraBoldItalic',
  AndadaItalic: Platform.OS === 'ios' ? 'AndadaPro-Italic' : 'AndadaPro-Italic',
  AndadaMedium: Platform.OS === 'ios' ? 'AndadaPro-Medium' : 'AndadaPro-Medium',
  AndadaMediumItalic:
    Platform.OS === 'ios' ? 'AndadaPro-MediumItalic' : 'AndadaPro-MediumItalic',
  AndadaRegular:
    Platform.OS === 'ios' ? 'AndadaPro-Regular' : 'AndadaPro-Regular',
  AndadaSemiBold:
    Platform.OS === 'ios' ? 'AndadaPro-SemiBold' : 'AndadaPro-SemiBold',
  AndadaSemiBoldItalic:
    Platform.OS === 'ios'
      ? 'AndadaPro-SemiBoldItalic'
      : 'AndadaPro-SemiBoldItalic',
  RobotoBlack: Platform.OS === 'ios' ? 'Roboto-Black' : 'Roboto-Black',
  RobotoBlackItalic:
    Platform.OS === 'ios' ? 'Roboto-BlackItalic' : 'Roboto-BlackItalic',
  RobotoBold: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto-Bold',
  RobotoBoldItalic:
    Platform.OS === 'ios' ? 'Roboto-BoldItalic' : 'Roboto-BoldItalic',
  RobotoItalic: Platform.OS === 'ios' ? 'Roboto-Italic' : 'Roboto-Italic',
  RobotoLight: Platform.OS === 'ios' ? 'Roboto-Light' : 'Roboto-Light',
  RobotoLightItalic:
    Platform.OS === 'ios' ? 'Roboto-LightItalic' : 'Roboto-LightItalic',
  RobotoMedium: Platform.OS === 'ios' ? 'Roboto-Medium' : 'Roboto-Medium',
  RobotoMediumItalic:
    Platform.OS === 'ios' ? 'Roboto-MediumItalic' : 'Roboto-MediumItalic',
  RobotoRegular: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto-Regular',
  RobotoThin: Platform.OS === 'ios' ? 'Roboto-Thin' : 'Roboto-Thin',
  RobotoThinItalic:
    Platform.OS === 'ios' ? 'Roboto-ThinItalic' : 'Roboto-ThinItalic',
};
export default Fonts;
