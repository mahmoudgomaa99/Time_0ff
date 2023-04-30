import svgMap from './svgs';
import { get } from 'lodash';
import { TThemeColor } from 'values/colors';
import { SvgProps } from 'react-native-svg';
import svgmap from './svgs';
import React from 'react';

type TWeight = 'solid' | 'light';
export type TName = keyof typeof svgmap;
export type TDimensions = { width?: number; height?: number };
export type TSize = number | number[] | TDimensions;
export type TSvgProps = SvgProps & {
  color?: TThemeColor;
  weight?: TWeight;
  colors?: TThemeColor[];
  size?: TSize;
  percentage?: number;
  bgColor?: string;
  txtColor?: string;
};
export type TSvgCommponentProps = TSvgProps & {
  name: TName;
  isTripDetails?: boolean;
};

const Svg = ({ name, ...props }: TSvgCommponentProps) => {
  const DefaultComponent = svgMap.default;
  const SvgComponent = get(svgMap, [name], DefaultComponent);
  return <SvgComponent {...props} />;
};

export default Svg;
