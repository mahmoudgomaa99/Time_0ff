import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'screens/Auth/Login';
import Register from 'screens/Auth/Register';
export type TAuthStack = {
  login:undefined;
  register:undefined
};

const Stack = createNativeStackNavigator<TAuthStack>();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="login">
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

export default AuthStack;
