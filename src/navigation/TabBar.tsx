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

const Tab = createBottomTabNavigator();

const TabBar = () => {
  const lang = useSelector(selectLanguage);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0370D6',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {
          height: h * 0.085,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: Platform.OS === 'android' ? 5 : -10,
        },
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
                bgColor={focused ? '#0370D6' : '#000000'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={languages[lang].exploreN}
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Svg
                name="explore"
                bgColor={focused ? '#0370D6' : '#000000'}
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
                bgColor={focused ? '#0370D6' : '#000000'}
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
                bgColor={focused ? '#0370D6' : '#000000'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
