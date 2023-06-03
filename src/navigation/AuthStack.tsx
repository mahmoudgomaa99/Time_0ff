import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from 'screens/Auth/Login';
import Register from 'screens/Auth/Register';
import ChooseType from 'screens/PreApp/ChooseType';
import { useSelector } from 'react-redux';
import { selectUserType } from 'redux/UserType';
export type TAuthStack = {
  login: undefined;
  register: undefined;
  chooseType: undefined;
};

const Stack = createNativeStackNavigator<TAuthStack>();

const AuthStack = () => {
  const userType = useSelector(selectUserType);
  return (
    <Stack.Navigator initialRouteName={userType ? 'login' : 'chooseType'}>
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
      <Stack.Screen
        options={{ headerShown: false }}
        name="chooseType"
        component={ChooseType}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
