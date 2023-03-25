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

const Tab = createBottomTabNavigator();

const TabBar = () => {
  const lang = useSelector(selectLanguage)
  // const lang = 'ar';
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0370D6',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: { height: 55 },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
      }}>
      <Tab.Screen
        name={languages[lang].main}
        component={MainPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Svg name="main" bgColor={focused ? '#0370D6' : '#000000'} />
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
              <Svg name="explore" bgColor={focused ? '#0370D6' : '#000000'} />
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
              <Svg name="profile2" bgColor={focused ? '#0370D6' : '#000000'} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
