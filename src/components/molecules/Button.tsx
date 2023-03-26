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
import Svg, { TName } from '../atoms/Svg';

type TType = 'primary' | 'secondry' | 'ticket_type' | 'map';

type TButton = {
  isLoading?: boolean;
  type: TType;
  label: string;
  svg?: TName;
  size?: number;
};

const Button = ({
  isLoading,
  type,
  svg,
  size,
  label,
  ...props
}: TouchableOpacityProps & TButton) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles[type] || styles.primary}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.white} />
        ) : (
          <>
            {svg ? (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Svg name={svg} size={size} style={{ marginHorizontal: 5 }} />
                <Text style={styles[`txt_${type}`] || styles.txt_primary}>
                  {label}
                </Text>
              </View>
            ) : (
              <Text style={styles[`txt_${type}`] || styles.txt_primary}>
                {label}
              </Text>
            )}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  primary: {
    padding: MarginsAndPaddings.xxl + 2,
    backgroundColor: COLORS.primary,
    paddingHorizontal: MarginsAndPaddings.xxl,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.s,
    fontSize: 16,
  },
  map: {
    backgroundColor: COLORS.white,
    paddingHorizontal: MarginsAndPaddings.xxl,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    fontSize: 16,
    paddingVertical: 10,
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
    fontSize: 16,
    lineHeight: 21,
  },
  txt_map: {
    color: COLORS.black,
    fontSize: 16,
    lineHeight: 21,
  },
  txt_secondry: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  txt_ticket_type: { color: COLORS.primary, fontWeight: '700', fontSize: 17 },
});
