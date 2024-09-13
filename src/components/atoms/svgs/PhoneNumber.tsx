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
    <Svg {...computedSize} viewBox="0 0 25 25" {...props}>
      <G
        id="svgexport-6_6_"
        data-name="svgexport-6 (6)"
        transform="translate(-0.333 -0.333)">
        <Circle
          id="Ellipse_166"
          data-name="Ellipse 166"
          cx="12.5"
          cy="12.5"
          r="12.5"
          transform="translate(0.333 0.333)"
          fill="#2196f3"
        />
        <Path
          id="Path_1906"
          data-name="Path 1906"
          d="M114.032,110.936l-.014.034c-.128.325-.256.651-.39.974-.115.278-.235.556-.367.826a2.3,2.3,0,0,1-.33.543,2.547,2.547,0,0,1-.425.343,3.692,3.692,0,0,1-2.959.225c-4.171-1.117-9.731-6.677-10.849-10.849a3.692,3.692,0,0,1,.226-2.96,2.517,2.517,0,0,1,.342-.424,2.3,2.3,0,0,1,.543-.33c.27-.132.549-.251.827-.367.323-.134.648-.262.973-.39l.034-.013a.763.763,0,0,1,.942.329l1.613,2.794a.768.768,0,0,1-.28,1.045,2.3,2.3,0,0,0-1.16,1.5,2.207,2.207,0,0,0,.407,1.81,19.439,19.439,0,0,0,3.388,3.388,2.206,2.206,0,0,0,1.81.407,2.3,2.3,0,0,0,1.5-1.16.767.767,0,0,1,1.045-.28l2.794,1.613a.763.763,0,0,1,.33.942Z"
          transform="translate(-93.626 -93.62)"
          fill="#fff"
          fill-rule="evenodd"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
