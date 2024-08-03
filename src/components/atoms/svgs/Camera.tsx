import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { TSvgProps } from '../Svg';
import useSvgSize from 'hooks/useSvgSize';
const WIDTH = 73.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} fill="none" {...props}>
      <Circle cx={16} cy={16} r={16} fill="#0370D6" />
      <Path
        fill="#fff"
        d="M15.999 20.06c1.369 0 2.478-1.33 2.478-2.973 0-1.643-1.11-2.975-2.478-2.975-1.369 0-2.479 1.332-2.479 2.975 0 1.642 1.11 2.974 2.479 2.974Z"
      />
      <Path
        fill="#fff"
        d="M24.4 10.4h-2.624a.8.8 0 0 1-.76-.546l-.252-.76A1.6 1.6 0 0 0 19.244 8h-6.49a1.6 1.6 0 0 0-1.518 1.094l-.253.758a.8.8 0 0 1-.76.547H7.6a1.6 1.6 0 0 0-1.6 1.6v9.595a1.6 1.6 0 0 0 1.6 1.6h16.8a1.6 1.6 0 0 0 1.6-1.6v-9.595a1.6 1.6 0 0 0-1.6-1.598Zm-8.397 11.2a4.4 4.4 0 1 1 4.395-4.401 4.405 4.405 0 0 1-4.395 4.401Zm4.795-8a.8.8 0 1 1 0-1.601.8.8 0 0 1 0 1.6Z"
      />
      <Path
        fill="#fff"
        d="M8.8 9.6H7.209a.408.408 0 1 1 0-.8h1.593a.408.408 0 1 1 0 .8Z"
      />
    </Svg>
  );
}
export default SvgComponent;
