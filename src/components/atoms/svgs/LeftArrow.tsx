import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { TSvgProps } from '../Svg';
import useSvgSize from 'hooks/useSvgSize';

const WIDTH = 1;
const HEIGHT = 1;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg viewBox="0 0 21 22" fill="none" {...computedSize} {...props}>
      <Path
        d="M19.667 11H1M10.333 20.333L1 11l9.333-9.334"
        stroke={bgColor || '#fff'}
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
