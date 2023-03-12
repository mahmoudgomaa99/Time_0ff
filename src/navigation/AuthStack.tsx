import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'src/screens/Auth/Login';
export type TAuthStack = {
  login: undefined;
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
    </Stack.Navigator>
  );
};

export default AuthStack;
