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
    <Svg {...computedSize} viewBox="0 0 38 38" {...props}>
      <G
        id="Group_11045"
        data-name="Group 11045"
        transform="translate(-15 -247)">
        <Rect
          id="Rectangle_215"
          data-name="Rectangle 215"
          width="38"
          height="38"
          rx="10"
          transform="translate(15 247)"
          fill="#f5fcff"
        />
        <Path
          id="Icon_ionic-ios-close"
          data-name="Icon ionic-ios-close"
          d="M17.888,16.625,21.7,12.812a.893.893,0,0,0-1.263-1.263l-3.813,3.813-3.813-3.813a.893.893,0,1,0-1.263,1.263l3.813,3.813-3.813,3.813A.893.893,0,1,0,12.811,21.7l3.813-3.813L20.437,21.7A.893.893,0,1,0,21.7,20.438Z"
          transform="translate(17.377 249.375)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
