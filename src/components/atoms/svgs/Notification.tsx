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
    <Svg {...computedSize} viewBox="0 0 17.125 18.897" {...props}>
      <Path
        id="bell"
        d="M17.966,10.756l-1.5-5.382a7.338,7.338,0,0,0-14.233.373L1.08,10.955a3.936,3.936,0,0,0,3.843,4.79H5.8a3.936,3.936,0,0,0,7.715,0h.66a3.936,3.936,0,0,0,3.793-4.99ZM9.657,17.32A2.362,2.362,0,0,1,7.44,15.746h4.434A2.362,2.362,0,0,1,9.657,17.32Zm6.4-4.082a2.344,2.344,0,0,1-1.881.933H4.922A2.362,2.362,0,0,1,2.617,11.3L3.774,6.088A5.764,5.764,0,0,1,14.954,5.8l1.5,5.382a2.344,2.344,0,0,1-.4,2.061Z"
        transform="translate(-0.986 -0.002)"
        fill={bgColor}
      />
    </Svg>
  );
}

export default SvgComponent;
