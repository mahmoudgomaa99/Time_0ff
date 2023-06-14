import { TSvgProps } from 'atoms/Svg';
import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg
      {...computedSize}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
      {...props}>
      <G
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#fff"
        stroke="none">
        <Path d="M4831 4349 c-39 -12 -74 -46 -1939 -1899 -645 -641 -1179 -1165 -1186 -1165 -7 0 -317 299 -687 665 -427 421 -688 672 -712 684 -42 19 -127 23 -169 7 -45 -17 -106 -79 -124 -127 -20 -54 -14 -130 15 -177 11 -18 362 -370 781 -782 573 -565 773 -756 808 -772 55 -27 118 -29 170 -7 46 19 -22 -48 1786 1749 1075 1069 1514 1512 1527 1540 27 57 24 112 -8 176 -38 73 -91 109 -169 115 -32 2 -74 -1 -93 -7z" />
      </G>
    </Svg>
  );
}
export default SvgComponent;
