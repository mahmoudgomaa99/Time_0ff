import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { TSvgProps } from '../Svg';
import useSvgSize from 'hooks/useSvgSize';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 512.000000 512.000000" {...props}>
      <Path
        d="M142 4469c-46-14-118-88-131-135-34-123 32-240 154-273 28-8 744-11 2396-11 2596 0 2420-4 2488 62 92 89 93 216 5 305-24 24-58 46-80 52-51 14-4783 14-4832 0zM125 2753c-141-74-167-249-52-350 20-18 54-37 74-43 27-8 610-10 2010-8l1971 3 44 30c123 87 123 263 0 350l-44 30-1986 2c-1796 2-1990 1-2017-14zM162 1060c-59-14-108-55-137-115C1 898-2 881 3 834c7-68 41-123 99-161l42-28 2394-3c1678-1 2406 1 2434 9 56 14 121 82 137 142 27 95-13 195-97 244l-47 28-2385 2c-1312 0-2400-2-2418-7z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    </Svg>
  );
}

export default SvgComponent;
