import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Circle,
} from 'react-native-svg';
import { TSvgProps } from '../Svg';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 24 24" {...props}>
      <G
        id="Group_11066"
        data-name="Group 11066"
        transform="translate(-47 -602)">
        <Circle
          id="Ellipse_37"
          data-name="Ellipse 37"
          cx="12"
          cy="12"
          r="12"
          transform="translate(47 602)"
          fill="#ffc757"
        />
        <Path
          id="Icon_awesome-star"
          data-name="Icon awesome-star"
          d="M6.12.348,4.841,2.942,1.978,3.36a.627.627,0,0,0-.347,1.07L3.7,6.448,3.213,9.3a.627.627,0,0,0,.909.66L6.683,8.613,9.244,9.959a.627.627,0,0,0,.909-.66l-.49-2.851L11.734,4.43a.627.627,0,0,0-.347-1.07L8.525,2.942,7.245.348A.628.628,0,0,0,6.12.348Z"
          transform="translate(52.317 608.984)"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
