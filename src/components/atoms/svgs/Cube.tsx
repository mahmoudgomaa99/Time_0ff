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
        id="Group_11325"
        data-name="Group 11325"
        transform="translate(-16 -222)">
        <G
          id="Rectangle_228"
          data-name="Rectangle 228"
          transform="translate(16 222)"
          fill={isDarkMode ? COLORS.iconBackDarkMode : '#fff'}
          stroke={isDarkMode ? COLORS.iconBackDarkMode : '#eee'}
          stroke-width="1">
          <Rect width="40" height="40" rx="10" stroke="none" />
          <Rect x="0.5" y="0.5" width="39" height="39" rx="9.5" fill="none" />
        </G>
        <G
          id="svgexport-6_12_"
          data-name="svgexport-6 (12)"
          transform="translate(22.001 228.5)">
          <Path
            id="Path_17191"
            data-name="Path 17191"
            d="M23.8,8.107,13.662,3.038a.362.362,0,0,0-.324,0L3.2,8.107a.362.362,0,0,0-.2.324V18.57a.362.362,0,0,0,.2.326l10.139,5.069a.362.362,0,0,0,.324,0L23.8,18.9a.362.362,0,0,0,.2-.326V8.431A.362.362,0,0,0,23.8,8.107ZM13.5,13.1,10.67,11.68l9.047-4.806,3.114,1.557ZM7.773,10.232l9.047-4.806,2.1,1.05L9.875,11.283Zm-.428.6,2.173,1.086V14.8l-.83-.83a.362.362,0,0,0-.256-.106H7.345ZM13.5,3.767l2.524,1.261L6.978,9.834l-2.806-1.4ZM3.724,9.017l2.9,1.448v3.759a.362.362,0,0,0,.362.362h1.3l1.342,1.342a.362.362,0,0,0,.618-.256v-3.4l2.9,1.448v9.329L3.724,18.346ZM13.863,23.053V13.724l9.414-4.707v9.329Z"
            transform="translate(0 0)"
            fill="#b5e633"
            stroke="#b5e633"
            stroke-width="0.3"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
