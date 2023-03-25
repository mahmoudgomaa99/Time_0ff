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
    <Svg {...computedSize} viewBox="0 0 10.071 9.044" {...props}>
      <Path
        id="Icon_feather-heart"
        data-name="Icon feather-heart"
        d="M10.972,5.22a2.466,2.466,0,0,0-3.488,0L7.009,5.7,6.533,5.22A2.466,2.466,0,1,0,3.045,8.708l.475.475,3.488,3.488L10.5,9.183l.475-.475a2.466,2.466,0,0,0,0-3.488Z"
        transform="translate(-1.973 -3.977)"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.7"
      />
    </Svg>
  );
}

export default SvgComponent;
