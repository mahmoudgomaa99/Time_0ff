import { View, Text, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg from 'atoms/Svg';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import languages from 'values/languages';
import { h } from '../values/Dimensions';
import COLORS from 'values/colors';
import { selectIsDarkMode } from 'redux/DarkMode';
import Home from 'screens/Vendor/Home';
import Profile from 'screens/Vendor/Profile';
import Notefication from 'screens/Vendor/Notefication';
import Fonts from 'values/fonts';
import Settings from 'screens/App/Settings';

const Tab = createBottomTabNavigator();

const VendorTabBar = () => {
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: isDarkMode ? COLORS.white : '#0370D6',
        tabBarInactiveTintColor: isDarkMode ? COLORS.alfaBlack : '#000000',
        tabBarStyle: {
          height: h * 0.085,
          backgroundColor: isDarkMode ? '#222533' : COLORS.white,
          borderWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: Platform.OS === 'android' ? 5 : -10,
          fontFamily: Fonts.Cairo_SemiBold,
        },
        // tabBarBackground:[]
      }}>
      <Tab.Screen
        name={languages[lang].main}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Svg
                name="main"
                style={{ marginBottom: -10 }}
                bgColor={
                  focused
                    ? isDarkMode
                      ? COLORS.white
                      : '#0370D6'
                    : isDarkMode
                    ? COLORS.alfaBlack
                    : '#000000'
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={languages[lang].notification}
        component={Notefication}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Svg
                name="notification"
                bgColor={
                  focused
                    ? isDarkMode
                      ? COLORS.white
                      : '#0370D6'
                    : isDarkMode
                    ? COLORS.alfaBlack
                    : '#000000'
                }
                style={{ marginBottom: -10 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={languages[lang].profile}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Svg
                name="profile2"
                style={{ marginBottom: -10 }}
                bgColor={
                  focused
                    ? isDarkMode
                      ? COLORS.white
                      : '#0370D6'
                    : isDarkMode
                    ? COLORS.alfaBlack
                    : '#000000'
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={languages[lang].settings}
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Svg
                name="setting"
                style={{ marginBottom: -10 }}
                bgColor={
                  focused
                    ? isDarkMode
                      ? COLORS.white
                      : '#0370D6'
                    : isDarkMode
                    ? COLORS.alfaBlack
                    : '#000000'
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default VendorTabBar;
