import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import COLORS from 'values/colors';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import Svg from 'atoms/Svg';

const Checkbox = ({
  value,
  setSort,
  sort,
  checked,
  setChecked,
}: {
  value?: any;
  sort?: any;
  setSort?: any;
  checked?: any;
  setChecked?: any;
}) => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <View style={styles(isDarkMode).container}>
      <TouchableOpacity
        style={
          checked === value.checked ? styles().checked : styles().unchecked
        }
        onPress={() => {
          if (checked === value.checked) {
            setSort({ sort_type: '', sort_by: '' });
            setChecked(0);
          } else {
            setSort(value.value);
            setChecked(value.checked);
          }
        }}>
        {checked === value.checked && <Svg name="true" size={30} />}
      </TouchableOpacity>
      <Text style={styles(isDarkMode).txt}>{value.title}</Text>
    </View>
  );
};

export default Checkbox;
const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    checked: {
      width: 35,
      height: 35,
      borderRadius: 10,
      backgroundColor: COLORS.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    unchecked: {
      width: 35,
      height: 35,
      borderRadius: 10,
      backgroundColor: COLORS.white,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: COLORS.primary,
    },
    txt: {
      fontSize: 18,
      marginLeft: 10,
      color: isDarkMode ? COLORS.white : COLORS.black,
    },
  });
