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
    <Svg {...computedSize} viewBox="0 0 9.06 8.671" {...props}>
      <Path
        id="Icon_awesome-star"
        data-name="Icon awesome-star"
        d="M5.485.3,4.379,2.543,1.905,2.9a.542.542,0,0,0-.3.925L3.4,5.572,2.972,8.036a.542.542,0,0,0,.786.571L5.971,7.443,8.184,8.607a.542.542,0,0,0,.786-.571L8.547,5.572l1.79-1.744a.542.542,0,0,0-.3-.925L7.563,2.543,6.457.3A.542.542,0,0,0,5.485.3Z"
        transform="translate(-1.441 0.001)"
        fill="#ffc757"
      />
    </Svg>
  );
}

export default SvgComponent;
