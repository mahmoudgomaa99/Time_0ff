import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { TSvgProps } from '..';
import useSvgSize from 'hooks/useSvgSize';
const WIDTH = 12.779;
const HEIGHT = 18.458;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 12.779 18.458" {...props}>
      <Path
        data-name="Icon ionic-ios-pin"
        d="M14.264 3.375a6.176 6.176 0 00-6.389 5.932c0 4.615 6.389 12.526 6.389 12.526s6.389-7.911 6.389-12.526a6.176 6.176 0 00-6.389-5.932zm0 8.47a2.081 2.081 0 112.081-2.081 2.081 2.081 0 01-2.081 2.081z"
        transform="translate(-7.875 -3.375)"
        fill="#0370d6"
      />
    </Svg>
  );
}

export default SvgComponent;
