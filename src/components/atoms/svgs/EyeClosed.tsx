import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

import { TSvgProps } from '..';
import useSvgSize from 'hooks/useSvgSize';
const WIDTH = 16.667;
const HEIGHT = 12.5;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 16.667 12.5" {...props}>
      <G data-name="svgexport-6 (6)">
        <G data-name="Group 10931">
          <G data-name="Group 10930">
            <Path
              data-name="Path 15027"
              d="M196.58 192.644a.347.347 0 10-.491.491 2.083 2.083 0 11-2.946 2.946.347.347 0 10-.491.491 2.777 2.777 0 103.928-3.928z"
              transform="translate(0 -64.008) translate(6.268 68.192) translate(-192.55 -192.542)"
            />
          </G>
        </G>
        <G data-name="Group 10933">
          <G data-name="Group 10932">
            <Path
              data-name="Path 15028"
              d="M173.93 170.707a2.75 2.75 0 00-3.262 2.73 2.717 2.717 0 00.049.484.348.348 0 00.341.287.308.308 0 00.061-.006.348.348 0 00.281-.4 2.014 2.014 0 01-.038-.363 2.058 2.058 0 012.447-2.047.347.347 0 10.121-.683z"
              transform="translate(0 -64.008) translate(5.555 67.48) translate(-170.668 -170.659)"
            />
          </G>
        </G>
        <G data-name="Group 10935">
          <G data-name="Group 10934">
            <Path
              data-name="Path 15029"
              d="M145.676 140.128a16.869 16.869 0 00-4.548-3.628.347.347 0 00-.319.617 16.319 16.319 0 014.136 3.235c-.828.9-4.086 4.167-7.52 4.167a8.006 8.006 0 01-3.492-.837.347.347 0 00-.3.625 8.683 8.683 0 003.793.906c4.279 0 8.091-4.447 8.252-4.637a.347.347 0 00-.002-.448z"
              transform="translate(0 -64.008) translate(4.343 66.367) translate(-133.435 -136.461)"
            />
          </G>
        </G>
        <G data-name="Group 10937">
          <G data-name="Group 10936">
            <Path
              data-name="Path 15030"
              d="M10.612 107.059a7.17 7.17 0 00-2.279-.4c-4.279 0-8.091 4.447-8.252 4.637a.347.347 0 00-.019.423 12.892 12.892 0 003.186 3.02.345.345 0 00.481-.1.346.346 0 00-.1-.481A12.7 12.7 0 01.8 111.539c.8-.868 4.079-4.186 7.538-4.186a6.5 6.5 0 012.057.363.342.342 0 00.44-.218.347.347 0 00-.223-.439z"
              transform="translate(0 -64.008) translate(0 65.396) translate(0 -106.659)"
            />
          </G>
        </G>
        <G data-name="Group 10939">
          <G data-name="Group 10938">
            <Path
              data-name="Path 15031"
              d="M76.395 64.11a.347.347 0 00-.491 0L64.1 75.916a.347.347 0 00.491.491L76.395 64.6a.347.347 0 000-.49z"
              transform="translate(0 -64.008) translate(2.083 64.008) translate(-63.996 -64.008)"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
