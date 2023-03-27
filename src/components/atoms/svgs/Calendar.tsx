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
    <Svg {...computedSize} viewBox="0 0 13.825 15.25" {...props}>
      <G
        id="Icon_feather-calendar"
        data-name="Icon feather-calendar"
        transform="translate(-4 -2.5)">
        <Path
          id="Path_17256"
          data-name="Path 17256"
          d="M5.925,6H15.9a1.425,1.425,0,0,1,1.425,1.425V17.4A1.425,1.425,0,0,1,15.9,18.825H5.925A1.425,1.425,0,0,1,4.5,17.4V7.425A1.425,1.425,0,0,1,5.925,6Z"
          transform="translate(0 -1.575)"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Path
          id="Path_17257"
          data-name="Path 17257"
          d="M24,3V5.85"
          transform="translate(-10.238)"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Path
          id="Path_17258"
          data-name="Path 17258"
          d="M12,3V5.85"
          transform="translate(-3.938)"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Path
          id="Path_17259"
          data-name="Path 17259"
          d="M4.5,15H17.325"
          transform="translate(0 -6.3)"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
