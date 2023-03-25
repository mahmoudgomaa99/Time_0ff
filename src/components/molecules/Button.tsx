import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

type TType = 'primary' | 'secondry' | 'ticket_type'|'book';

type TButton = {
  isLoading?: boolean;
  type: TType;
  label: string;
};

const Button = ({
  isLoading,
  type,
  label,
  ...props
}: TouchableOpacityProps & TButton) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles[type] || styles.primary}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.white} />
        ) : (
          <Text style={styles[`txt_${type}`] || styles.txt_primary}>
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  primary: {
    padding: MarginsAndPaddings.xxl,
    backgroundColor: COLORS.darkBlue,
    paddingHorizontal: MarginsAndPaddings.xxl,
    marginTop:0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.s,
    marginBottom:
      Platform.OS === 'ios' ? MarginsAndPaddings.ml : MarginsAndPaddings.m,
    height:h*.08,
    fontSize:16,
  },
  book:{
    padding: MarginsAndPaddings.xxl,
    backgroundColor: COLORS.darkBlue,
    paddingHorizontal: 50,
    marginTop:0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.s,
    marginBottom:
      Platform.OS === 'ios' ? MarginsAndPaddings.ml : MarginsAndPaddings.m,
    height:h*.06,
    fontSize:16,
  },
  secondry: {
    backgroundColor: COLORS.white,
    paddingHorizontal: MarginsAndPaddings.ml + 15,
    padding: MarginsAndPaddings.l,
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#888',
    shadowOpacity: Platform.OS === 'ios' ? 1 : 0,
  },
  ticket_type: {
    backgroundColor: '#F8F8F8',
    padding: MarginsAndPaddings.ml - 3,
    borderRadius: 15,
    margin: MarginsAndPaddings.xxl,
    marginTop: MarginsAndPaddings.ml,
  },
  txt_primary: {
    color: COLORS.white,
    fontFamily: Fonts.RobotoBold,
  },
  txt_secondry: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  txt_ticket_type: { color: COLORS.primary, fontWeight: '700', fontSize: 17 },

});
