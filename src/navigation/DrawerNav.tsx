import { useNavigation } from '@react-navigation/native';
import Svg, { TName } from 'atoms/Svg';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import languages from 'values/languages';
import { useAppDispatch } from '../redux/store';
import User from 'redux/user';
import COLORS from 'values/colors';
import { UserType } from 'redux/UserType';
import Fonts from 'values/fonts';
const Data = (
  lang: string,
): {
  name?: string;
  main?: string;
  sub?: string;
  icon: TName;
  value?: number;
}[] => [
  {
    name: languages[lang].main,
    main: 'home',
    sub: languages[lang].main,
    icon: 'main',
  },
  {
    name: languages[lang].whathot,
    main: 'home',
    icon: 'explore',
    sub: languages[lang].whathot,
  },
  {
    name: languages[lang].notification,
    main: 'home',
    icon: 'notification',
    sub: languages[lang].notification,
  },
  {
    name: languages[lang].wishlist,
    icon: 'wishlist',
    main: 'wishlist',
  },
  {
    name: languages[lang].profile,
    main: 'home',
    icon: 'profile2',
    sub: languages[lang].profile,
  },
  {
    name: languages[lang].settings,
    icon: 'setting',
    main: 'settings',
  },
  {
    name: languages[lang].logout,
    icon: 'logout2',
    value: 1,
  },
];
const DrawerNav = ({
  setCurrentTab,
  currrentTab,
}: {
  setCurrentTab?: any;
  currrentTab?: string;
}) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const lang = useSelector(selectLanguage);
  return (
    <View style={{ justifyContent: 'flex-start', padding: 15 }}>
      <Svg name="default" size={100} style={{ marginTop: 30 }} />
      <View style={{ marginTop: 40 }}>
        {Data(lang).map((item, index) => (
          <TouchableOpacity
            style={styles(currrentTab === item.name, lang).item}
            key={index}
            onPress={() => {
              //   setCurrentTab(item.name);
              if (item.sub) {
                navigation.navigate(item.main, { screen: item.sub });
              } else if (item.value) {
                dispatch(User.actions.logoutAction());
                dispatch(UserType.setUserData(undefined));
                navigation.navigate('auth', { screen: 'login' });
                // User.actions.logout()
              } else {
                navigation.navigate(item.main);
              }
            }}>
            <Svg
              bgColor={currrentTab === item.name ? COLORS.black : '#fff'}
              name={item.icon}
              size={30}
            />
            <Text style={styles(currrentTab === item.name).item_name}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default DrawerNav;
const styles = (iSCurrentTap?: boolean, lang?: string) =>
  StyleSheet.create({
    item: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      marginVertical: 10,
      backgroundColor: iSCurrentTap ? COLORS.white : COLORS.primary,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    item_name: {
      fontSize: 18,
      lineHeight: 27,
      color: iSCurrentTap ? COLORS.black : COLORS.white,
      marginHorizontal: 10,
      fontFamily: Fonts.Cairo_SemiBold,
    },
  });
