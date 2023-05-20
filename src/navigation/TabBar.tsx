import { View, Text, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from 'screens/App/MainPage';
import Notification from 'screens/App/Notification';
import Svg from 'atoms/Svg';
import Explore from 'screens/App/Explore';
import Profile from 'screens/App/Profile';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import languages from 'values/languages';
import { h } from '../values/Dimensions';
import COLORS from 'values/colors';
import { selectIsDarkMode } from 'redux/DarkMode';
import Fonts from 'values/fonts';

const Tab = createBottomTabNavigator();

const TabBar = () => {
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
        component={MainPage}
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
        name={languages[lang].whathot}
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Svg
                name="explore"
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
        name={languages[lang].notification}
        component={Notification}
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
    </Tab.Navigator>
  );
};

export default TabBar;
