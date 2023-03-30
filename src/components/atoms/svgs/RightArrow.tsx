import { TSvgProps } from 'atoms/Svg';
import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const WIDTH = 40;
const HEIGHT = 40;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg viewBox="0 0 40 40" fill="none" {...computedSize} {...props}>
      <Path
        d="M8.334 20h23.333M20 31.667L31.667 20 20 8.334"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
