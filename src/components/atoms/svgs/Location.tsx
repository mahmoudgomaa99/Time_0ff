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
    <Svg {...computedSize} viewBox="0 0 7.6 9.156" {...props}>
      <G
        id="Icon_feather-map-pin"
        data-name="Icon feather-map-pin"
        transform="translate(-4.2 -1.2)">
        <Path
          id="Path_17103"
          data-name="Path 17103"
          d="M11.5,5c0,2.722-3.5,5.056-3.5,5.056S4.5,7.722,4.5,5a3.5,3.5,0,1,1,7,0Z"
          fill="none"
          stroke="#0370d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.6"
        />
        <Path
          id="Path_17104"
          data-name="Path 17104"
          d="M15.833,11.667A1.167,1.167,0,1,1,14.667,10.5,1.167,1.167,0,0,1,15.833,11.667Z"
          transform="translate(-6.667 -6.667)"
          fill="none"
          stroke="#0370d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.6"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
