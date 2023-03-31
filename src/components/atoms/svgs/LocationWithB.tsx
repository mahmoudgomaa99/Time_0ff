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
        id="Group_11309"
        data-name="Group 11309"
        transform="translate(-145 -257)">
        <G
          id="Group_11066"
          data-name="Group 11066"
          transform="translate(98 -345)">
          <Circle
            id="Ellipse_37"
            data-name="Ellipse 37"
            cx="12"
            cy="12"
            r="12"
            transform="translate(47 602)"
            fill="#58ffee"
          />
        </G>
        <G
          id="Icon_feather-map-pin"
          data-name="Icon feather-map-pin"
          transform="translate(147.7 261.417)">
          <Path
            id="Path_17113"
            data-name="Path 17113"
            d="M14.455,6.477c0,3.871-4.977,7.189-4.977,7.189S4.5,10.348,4.5,6.477a4.977,4.977,0,1,1,9.955,0Z"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
          />
          <Path
            id="Path_17114"
            data-name="Path 17114"
            d="M16.818,12.159A1.659,1.659,0,1,1,15.159,10.5,1.659,1.659,0,0,1,16.818,12.159Z"
            transform="translate(-5.682 -5.682)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
