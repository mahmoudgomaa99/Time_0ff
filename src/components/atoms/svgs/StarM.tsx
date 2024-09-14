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
    <Svg {...computedSize} viewBox="0 0 14 14" fill="none" {...props}>
      <Path
        d="M6.213.464l-1.7 3.448-3.8.555A.834.834 0 00.252 5.89L3 8.571l-.647 3.79a.833.833 0 001.2.877l3.4-1.789 3.4 1.79a.833.833 0 001.207-.879l-.639-3.789 2.754-2.682a.833.833 0 00-.462-1.422l-3.8-.555L7.709.464a.834.834 0 00-1.495 0z"
        fill={bgColor || '#FFC757'}
      />
    </Svg>
  );
}

export default SvgComponent;
