import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Rect,
} from 'react-native-svg';
import { TSvgProps } from '../Svg';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 40 40" {...props}>
      <G id="history" transform="translate(-15.731 -296)">
        <G id="Icon_Edit-Profile" transform="translate(-950.269 -1638)">
          <Rect
            id="Rectangle_41"
            data-name="Rectangle 41"
            width="40"
            height="40"
            rx="13"
            transform="translate(966 1934)"
            fill="#bff0df"
          />
        </G>
        <G id="time-past" transform="translate(26 307.667)">
          <Path
            id="Path_17119"
            data-name="Path 17119"
            d="M9.167,0A9.145,9.145,0,0,0,3.056,2.347V.764a.764.764,0,0,0-1.528,0V3.056A2.292,2.292,0,0,0,3.819,5.347H6.111a.764.764,0,1,0,0-1.528H3.819A.652.652,0,0,1,3.743,3.8,7.629,7.629,0,1,1,1.528,9.167.764.764,0,0,0,0,9.167,9.167,9.167,0,1,0,9.167,0Z"
            transform="translate(0 0)"
            fill="#17c98b"
          />
          <Path
            id="Path_17120"
            data-name="Path 17120"
            d="M11.764,6A.764.764,0,0,0,11,6.764v3.819a.764.764,0,0,0,.224.54l2.292,2.292a.764.764,0,1,0,1.08-1.08l-2.068-2.068v-3.5A.764.764,0,0,0,11.764,6Z"
            transform="translate(-2.597 -1.417)"
            fill="#17c98b"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
