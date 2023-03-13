import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'src/screens/App/Home';
import Login from 'screens/App/Home/Login';
import Register from 'screens/App/Register';
export type TAuthStack = {
  home: undefined;
  login:undefined;
  register:undefined
};

const Stack = createNativeStackNavigator<TAuthStack>();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="register">
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
