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
      <G
        id="Group_10852"
        data-name="Group 10852"
        transform="translate(-268 -343)">
        <G id="item" transform="translate(49.5)">
          <Rect
            id="Rectangle_102"
            data-name="Rectangle 102"
            width="40"
            height="40"
            rx="10"
            transform="translate(218.5 343)"
            fill="#ad4de6"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
