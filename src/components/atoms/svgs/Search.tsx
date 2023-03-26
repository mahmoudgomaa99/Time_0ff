import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Mask, Path, G} from 'react-native-svg';
import {TSvgProps} from '..';

const WIDTH = 25;
const HEIGHT = 24;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;
function SvgComponent({size, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg viewBox="0 0 25 24" fill="none" {...computedSize} {...props}>
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={25}
        height={30}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 2h19.477v19.477H2.5V2z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.239 3.5c-4.543 0-8.24 3.695-8.24 8.238 0 4.543 3.697 8.239 8.24 8.239 4.542 0 8.238-3.696 8.238-8.239 0-4.543-3.696-8.238-8.238-8.238zm0 17.977c-5.37 0-9.74-4.369-9.74-9.739C2.5 6.368 6.87 2 12.24 2s9.738 4.368 9.738 9.738c0 5.37-4.368 9.739-9.738 9.739z"
          fill="#172742"
        />
      </G>
      <Mask
        id="b"
        maskUnits="userSpaceOnUse"
        x={17}
        y={17}
        width={36}
        height={26}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.74 17.707h5.024v5.015H17.74v-5.015z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.014 22.722a.75.75 0 01-.53-.22L17.96 18.99a.75.75 0 011.06-1.063l3.524 3.515a.749.749 0 01-.53 1.28z"
          fill="#172742"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
