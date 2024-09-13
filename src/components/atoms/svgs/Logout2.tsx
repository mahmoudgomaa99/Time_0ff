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
const HEIGHT = 113.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <Svg {...computedSize} viewBox="0 0 40 40" {...props}>
      <G
        id="Group_11313"
        data-name="Group 11313"
        transform="translate(-16 -521)">
        <G id="Icon_Edit-Profile" transform="translate(-950 -1413)">
          {/* <Rect
            id="Rectangle_41"
            data-name="Rectangle 41"
            width="40"
            height="40"
            rx="13"
            transform="translate(966 1934)"
            fill={isDarkMode ? COLORS.iconBackDarkMode : '#ffdfdf'}
          /> */}
        </G>
        <G id="sign-out-alt" transform="translate(28 529.892)">
          <Path
            id="Path_17123"
            data-name="Path 17123"
            d="M9.666,12.635a.842.842,0,0,0-.842.842V16A2.527,2.527,0,0,1,6.3,18.531H4.212A2.527,2.527,0,0,1,1.685,16V4.212A2.527,2.527,0,0,1,4.212,1.685H6.3A2.527,2.527,0,0,1,8.824,4.212V6.738a.842.842,0,0,0,1.685,0V4.212A4.217,4.217,0,0,0,6.3,0H4.212A4.217,4.217,0,0,0,0,4.212V16a4.217,4.217,0,0,0,4.212,4.212H6.3A4.217,4.217,0,0,0,10.509,16V13.477A.842.842,0,0,0,9.666,12.635Z"
            fill={bgColor}
          />
          <Path
            id="Path_17124"
            data-name="Path 17124"
            d="M20.049,9.11,16.187,5.247A.842.842,0,1,0,15,6.438l3.59,3.591-12.743.025a.842.842,0,1,0,0,1.685h0l12.793-.026-3.641,3.642a.842.842,0,1,0,1.191,1.191l3.863-3.863a2.527,2.527,0,0,0,0-3.573Z"
            transform="translate(-0.788 -0.788)"
            fill={bgColor}
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
