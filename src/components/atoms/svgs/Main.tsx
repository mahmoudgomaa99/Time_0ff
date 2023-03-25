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
    <Svg {...computedSize} viewBox="0 0 20.998 21" {...props}>
      <Path
        id="home"
        d="M20.934,9.133l0,0L12.366.566a1.933,1.933,0,0,0-2.734,0L1.07,9.127l-.009.009A1.932,1.932,0,0,0,2.348,12.43l.06,0h.341v6.3A2.265,2.265,0,0,0,5.011,21H8.363a.615.615,0,0,0,.615-.615V15.442a1.034,1.034,0,0,1,1.032-1.032h1.977a1.033,1.033,0,0,1,1.032,1.032v4.942a.615.615,0,0,0,.615.615h3.351a2.265,2.265,0,0,0,2.263-2.263v-6.3h.317a1.934,1.934,0,0,0,1.368-3.3ZM20.063,11a.7.7,0,0,1-.5.206h-.932a.615.615,0,0,0-.615.615v6.919a1.033,1.033,0,0,1-1.032,1.032H14.25V15.442a2.265,2.265,0,0,0-2.263-2.263H10.011a2.265,2.265,0,0,0-2.263,2.263v4.327H5.011a1.033,1.033,0,0,1-1.032-1.032V11.818a.615.615,0,0,0-.615-.615H2.419A.7.7,0,0,1,1.935,10h0L10.5,1.436a.7.7,0,0,1,.994,0L20.06,10l0,0a.7.7,0,0,1,0,.993Zm0,0"
        transform="translate(-0.5 0.001)"
        fill={bgColor}
      />
    </Svg>
  );
}

export default SvgComponent;
