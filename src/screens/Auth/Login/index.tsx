import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useAppDispatch } from '../../../redux/store';
import Present from 'redux/Presenting';

const Login = () => {
  const dispatch = useAppDispatch();

  // for using presentScreen in editing
  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(Present.setIsPresent());
  //   }, 1000);
  // }, []);
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

export default Login;
