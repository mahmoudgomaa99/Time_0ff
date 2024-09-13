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
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import COLORS from 'values/colors';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <Svg {...computedSize} viewBox="0 0 40 40" {...props}>
      <G
        id="Group_11319"
        data-name="Group 11319"
        transform="translate(-15.425 -357)">
        <G id="Icon_Edit-Profile" transform="translate(-950.575 -1577)">
          <Rect
            id="Rectangle_41"
            data-name="Rectangle 41"
            width="40"
            height="40"
            rx="13"
            transform="translate(966 1934)"
            fill={isDarkMode ? COLORS.iconBackDarkMode : '#effef7'}
          />
        </G>
        <G
          id="svgexport-6_8_"
          data-name="svgexport-6 (8)"
          transform="translate(24.365 366.375)">
          <G
            id="Group_11151"
            data-name="Group 11151"
            transform="translate(5 1)">
            <Path
              id="Path_17161"
              data-name="Path 17161"
              d="M11.469,1A4.831,4.831,0,0,0,6.617,5.852V8.008A1.588,1.588,0,0,0,5,9.625v7.008A1.588,1.588,0,0,0,6.617,18.25h9.7a1.588,1.588,0,0,0,1.617-1.617V9.625A1.588,1.588,0,0,0,16.32,8.008V5.852A4.831,4.831,0,0,0,11.469,1Zm5.391,8.625v7.008a.509.509,0,0,1-.539.539h-9.7a.509.509,0,0,1-.539-.539V9.625a.509.509,0,0,1,.539-.539h9.7A.509.509,0,0,1,16.859,9.625ZM7.7,8.008V5.852a3.773,3.773,0,0,1,7.547,0V8.008Z"
              transform="translate(-5 -1)"
              fill="#26d282"
            />
            <Path
              id="Path_17162"
              data-name="Path 17162"
              d="M15.617,19A1.588,1.588,0,0,0,14,20.617a1.57,1.57,0,0,0,1.078,1.509v1.186a.539.539,0,0,0,1.078,0V22.127a1.57,1.57,0,0,0,1.078-1.509A1.588,1.588,0,0,0,15.617,19Zm0,2.156a.539.539,0,1,1,.539-.539A.509.509,0,0,1,15.617,21.156Z"
              transform="translate(-9.148 -9.297)"
              fill="#26d282"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
