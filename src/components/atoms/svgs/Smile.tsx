import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg';
import { TSvgProps } from '../Svg';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 22 22" {...props}>
      <Path
        id="Path_1836"
        data-name="Path 1836"
        d="M133.5,22,128,11l5.5-11a11,11,0,1,1,0,22Z"
        transform="translate(-122.5)"
        fill="#ffd23b"
      />
      <Path
        id="Path_1837"
        data-name="Path 1837"
        d="M0,11A11,11,0,0,1,11,0V22A11,11,0,0,1,0,11Z"
        fill="#ffd23b"
      />
      <Path
        id="Path_1838"
        data-name="Path 1838"
        d="M320.867,139.223h-1.289v-1.289a.645.645,0,1,0-1.289,0v1.289H317v-1.289a1.934,1.934,0,1,1,3.867,0Z"
        transform="translate(-303.379 -130.156)"
        fill="#16202d"
      />
      <Path
        id="Path_1839"
        data-name="Path 1839"
        d="M108.867,139.223h-1.289v-1.289a.645.645,0,1,0-1.289,0v1.289H105v-1.289a1.934,1.934,0,1,1,3.867,0Z"
        transform="translate(-100.488 -130.156)"
        fill="#2d3e53"
      />
      <Path
        id="Path_1840"
        data-name="Path 1840"
        d="M179.438,256,176,260.211h8.373A6.462,6.462,0,0,0,185.926,256Z"
        transform="translate(-168.438 -245)"
        fill="#cb2e81"
      />
      <Path
        id="Path_1841"
        data-name="Path 1841"
        d="M105,256a6.462,6.462,0,0,0,1.552,4.211h4.936V256Z"
        transform="translate(-100.488 -245)"
        fill="#cb2e81"
      />
      <Path
        id="Path_1842"
        data-name="Path 1842"
        d="M198.578,301,196,303.277l2.578,2.277a6.473,6.473,0,0,0,4.936-2.277A6.473,6.473,0,0,0,198.578,301Z"
        transform="translate(-187.578 -288.066)"
        fill="#ff3187"
      />
      <Path
        id="Path_1843"
        data-name="Path 1843"
        d="M141.13,303.277a6.474,6.474,0,0,0,4.936,2.277V301A6.473,6.473,0,0,0,141.13,303.277Z"
        transform="translate(-135.066 -288.066)"
        fill="#ff5178"
      />
    </Svg>
  );
}

export default SvgComponent;
