import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg';
import { TSvgProps } from '../Svg';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 7.301 11.709" {...props}>
      <G
        id="Icon_Arrow-Right"
        transform="matrix(0.087, 0.996, -0.996, 0.087, 5.361, 1.149)">
        <Path
          id="Shape"
          d="M4.539,9.077,0,4.539,4.539,0"
          transform="translate(0 4.539) rotate(-90)"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1.5"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
