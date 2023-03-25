import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Circle,
} from 'react-native-svg';
import { TSvgProps } from '../Svg';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 37 37" {...props}>
      <G
        id="Group_11014"
        data-name="Group 11014"
        transform="translate(-323 -89)">
        <Circle
          id="Ellipse_26"
          data-name="Ellipse 26"
          cx="18.5"
          cy="18.5"
          r="18.5"
          transform="translate(323 89)"
          fill="#0370d6"
        />
        <G id="settings-sliders" transform="translate(333 99)">
          <Path
            id="Path_17072"
            data-name="Path 17072"
            d="M.75,3.562H2.8a2.8,2.8,0,0,0,5.4,0H17.25a.75.75,0,1,0,0-1.5H8.2a2.8,2.8,0,0,0-5.4,0H.75a.75.75,0,0,0,0,1.5ZM5.5,1.5A1.312,1.312,0,1,1,4.187,2.812,1.312,1.312,0,0,1,5.5,1.5Z"
            fill="#fff"
          />
          <Path
            id="Path_17073"
            data-name="Path 17073"
            d="M17.25,10.312H15.2a2.8,2.8,0,0,0-5.4,0H.75a.75.75,0,1,0,0,1.5H9.8a2.8,2.8,0,0,0,5.4,0H17.25a.75.75,0,1,0,0-1.5ZM12.5,12.375a1.312,1.312,0,1,1,1.312-1.312A1.312,1.312,0,0,1,12.5,12.375Z"
            transform="translate(0 -2.062)"
            fill="#fff"
          />
          <Path
            id="Path_17074"
            data-name="Path 17074"
            d="M17.25,18.562H8.2a2.8,2.8,0,0,0-5.4,0H.75a.75.75,0,1,0,0,1.5H2.8a2.8,2.8,0,0,0,5.4,0H17.25a.75.75,0,1,0,0-1.5ZM5.5,20.625a1.312,1.312,0,1,1,1.312-1.312A1.312,1.312,0,0,1,5.5,20.625Z"
            transform="translate(0 -4.125)"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;

