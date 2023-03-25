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
    <Svg {...computedSize} viewBox="0 0 20.5 22.875" {...props}>
      <G
        id="Icon_feather-user"
        data-name="Icon feather-user"
        transform="translate(-5.25 -3.75)">
        <Path
          id="Path_15040"
          data-name="Path 15040"
          d="M25,29.625V27.25a4.75,4.75,0,0,0-4.75-4.75h-9.5A4.75,4.75,0,0,0,6,27.25v2.375"
          transform="translate(0 -3.75)"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <Path
          id="Path_15041"
          data-name="Path 15041"
          d="M21.5,9.25A4.75,4.75,0,1,1,16.75,4.5,4.75,4.75,0,0,1,21.5,9.25Z"
          transform="translate(-1.25)"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
