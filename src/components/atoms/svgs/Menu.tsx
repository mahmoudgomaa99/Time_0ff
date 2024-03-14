import { TSvgProps } from 'atoms/Svg';
import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgProps } from 'react-native-svg';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);

  return (
    <Svg {...computedSize} viewBox="0 0 18 13" fill="none" {...props}>
      <Path
        d="M5.175 1.656c0-.229.09-.449.25-.611A.85.85 0 016.03.792h11.115a.846.846 0 01.605.253.866.866 0 01.185.942.866.866 0 01-.463.468.846.846 0 01-.327.066H6.03a.85.85 0 01-.605-.253.87.87 0 01-.25-.612zm11.97 4.324H1.755a.847.847 0 00-.605.254.865.865 0 00-.25.611.873.873 0 00.25.612.854.854 0 00.605.253h15.39a.846.846 0 00.605-.253.866.866 0 00.185-.943.866.866 0 00-.463-.468.846.846 0 00-.327-.066zm0 5.19H9.45a.85.85 0 00-.605.253.87.87 0 000 1.223.85.85 0 00.605.253h7.695a.85.85 0 00.605-.253.87.87 0 000-1.223.85.85 0 00-.605-.254z"
        fill="#0370D6"
      />
    </Svg>
  );
}

export default SvgComponent;
