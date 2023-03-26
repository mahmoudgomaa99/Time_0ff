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
    <Svg {...computedSize} viewBox="0 0 12.25 12.25" {...props}>
      <Path
        id="search"
        d="M12.069,11.348,9.026,8.305A5.106,5.106,0,1,0,1.287,8.5c1.825,2.017,7.018.527,7.018.527l3.043,3.043a.51.51,0,1,0,.721-.721ZM5.082,9.16A4.078,4.078,0,1,1,9.16,5.082,4.078,4.078,0,0,1,5.082,9.16Z"
        transform="translate(0.032 0.032)"
        fill="#5d5d5d"
      />
    </Svg>
  );
}

export default SvgComponent;
