import * as React from 'react';
import Svg, { G, Path, Rect } from 'react-native-svg';

import { TSvgProps } from '..';
import useSvgSize from 'hooks/useSvgSize';
const WIDTH = 16.667;
const HEIGHT = 12.5;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 40 40" {...props}>
      <G id="Icon_Edit-Profile" transform="translate(-966 -1934)">
        <Rect
          id="Rectangle_41"
          data-name="Rectangle 41"
          width="40"
          height="40"
          rx="13"
          transform="translate(966 1934)"
          fill="#e8f8fd"
        />
        <Path
          id="Icon_feather-heart"
          data-name="Icon feather-heart"
          d="M17.97,5.8a4.461,4.461,0,0,0-6.31,0l-.86.86L9.94,5.8a4.462,4.462,0,1,0-6.31,6.31l.86.86,6.31,6.31,6.31-6.31.86-.86a4.461,4.461,0,0,0,0-6.31Z"
          transform="translate(975.2 1942.109)"
          fill="none"
          stroke="#14b5e8"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.2"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
