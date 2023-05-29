import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserType, selectUserType } from 'redux/UserType';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import { set } from 'lodash';
import Button from 'components/molecules/Button';
import { h, w } from 'values/Dimensions';
import { selectIsDarkMode } from 'redux/DarkMode';

const ChooseType = () => {
  const dispatch = useDispatch();
  const userType = useSelector(selectUserType);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [type, setType] = useState<string>();
  console.log(userType);

  return (
    <SafeAreaView style={styles(undefined, undefined, isDarkMode).conatiner}>
      <Svg name="blueLogo" size={140} />
      <Text style={styles(undefined, undefined, isDarkMode).title}>
        Welcome to Time Off
      </Text>
      <Text style={styles(undefined, undefined, isDarkMode).sub_title}>
        Who are you?
      </Text>
      <View style={styles().btns}>
        <TouchableOpacity
          style={styles('agency', type).btn}
          onPress={() => {
            setType('agency');
          }}>
          <Text style={styles('agency', type).btn_txt}>Agency</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles('user', type).btn}
          onPress={() => {
            setType('user');
          }}>
          <Text style={styles('user', type).btn_txt}>User</Text>
        </TouchableOpacity>
      </View>
      <Button
        type="primary"
        label="Next"
        style={{ marginTop: h * 0.2, width: w * 0.8 }}
        onPress={() => {
          dispatch(UserType.setUserData(type));
        }}
      />
    </SafeAreaView>
  );
};

export default ChooseType;
