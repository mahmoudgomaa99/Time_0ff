import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';

const Home = () => {
  const userData = useSelector(selectCurrentUser);
  console.log(userData);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
