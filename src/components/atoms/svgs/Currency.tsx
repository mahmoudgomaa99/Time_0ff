import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Rect,
} from 'react-native-svg';
import { TSvgProps } from '../Svg';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 40 40" {...props}>
      <G
        id="Group_11318"
        data-name="Group 11318"
        transform="translate(-966 -2004)">
        <G id="Icon_Edit-Profile" transform="translate(0 70)">
          <Rect
            id="Rectangle_41"
            data-name="Rectangle 41"
            width="40"
            height="40"
            rx="13"
            transform="translate(966 1934)"
            fill="#feeffe"
          />
        </G>
        <G
          id="svgexport-6_6_"
          data-name="svgexport-6 (6)"
          transform="translate(975.258 2013.257)">
          <G id="Group_11148" data-name="Group 11148">
            <G id="Group_11147" data-name="Group 11147">
              <Path
                id="Path_17159"
                data-name="Path 17159"
                d="M10.743,0A10.743,10.743,0,1,0,21.486,10.743,10.756,10.756,0,0,0,10.743,0Zm0,20.143a9.4,9.4,0,1,1,9.4-9.4A9.411,9.411,0,0,1,10.743,20.143Z"
                fill="#ad09b2"
              />
            </G>
          </G>
          <G
            id="Group_11150"
            data-name="Group 11150"
            transform="translate(7.386 4.7)">
            <G id="Group_11149" data-name="Group 11149">
              <Path
                id="Path_17160"
                data-name="Path 17160"
                d="M179.357,117.372c-1.092,0-2.014-.615-2.014-1.343s.923-1.343,2.014-1.343a2.383,2.383,0,0,1,1.569.529.672.672,0,1,0,.892-1,3.554,3.554,0,0,0-1.789-.811v-.728a.671.671,0,1,0-1.343,0v.725A2.921,2.921,0,0,0,176,116.029c0,1.481,1.507,2.686,3.357,2.686,1.092,0,2.014.615,2.014,1.343s-.923,1.343-2.014,1.343a2.383,2.383,0,0,1-1.568-.529.672.672,0,0,0-.892,1,3.556,3.556,0,0,0,1.789.812v.727a.671.671,0,1,0,1.343,0v-.725a2.921,2.921,0,0,0,2.686-2.632C182.714,118.576,181.208,117.372,179.357,117.372Z"
                transform="translate(-176 -112)"
                fill="#ad09b2"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"></svg>;
