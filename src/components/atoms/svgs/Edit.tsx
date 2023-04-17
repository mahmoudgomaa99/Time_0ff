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
      <G id="Icon_Edit-Profile" transform="translate(-966 -1934)">
        <Rect
          id="Rectangle_41"
          data-name="Rectangle 41"
          width="40"
          height="40"
          rx="13"
          transform="translate(966 1934)"
          fill={isDarkMode ? COLORS.iconBackDarkMode : '#fff1e1'}
        />
        <G id="edit" transform="translate(977.333 1945.333)">
          <Path
            id="Path_17117"
            data-name="Path 17117"
            d="M14.863.684,6.057,9.489A3.587,3.587,0,0,0,5,12.043v.97a.722.722,0,0,0,.722.722h.97a3.587,3.587,0,0,0,2.553-1.057l8.805-8.805a2.257,2.257,0,0,0,0-3.188A2.307,2.307,0,0,0,14.863.684Zm2.167,2.167L8.224,11.656a2.181,2.181,0,0,1-1.532.634H6.444v-.248a2.181,2.181,0,0,1,.634-1.532l8.805-8.805a.829.829,0,0,1,1.145,0,.811.811,0,0,1,0,1.145Z"
            transform="translate(-1.389 -0.012)"
            fill="#f99625"
          />
          <Path
            id="Path_17118"
            data-name="Path 17118"
            d="M16.611,6.485a.722.722,0,0,0-.722.722v3.626H13A2.167,2.167,0,0,0,10.833,13v2.889H3.611a2.167,2.167,0,0,1-2.167-2.167V3.611A2.167,2.167,0,0,1,3.611,1.444h6.53a.722.722,0,0,0,0-1.444H3.611A3.615,3.615,0,0,0,0,3.611V13.722a3.615,3.615,0,0,0,3.611,3.611H11.8a3.588,3.588,0,0,0,2.554-1.057l1.918-1.92A3.588,3.588,0,0,0,17.333,11.8v-4.6A.722.722,0,0,0,16.611,6.485Zm-3.275,8.77a2.149,2.149,0,0,1-1.058.578V13A.722.722,0,0,1,13,12.278h2.835a2.178,2.178,0,0,1-.578,1.057Z"
            fill="#f99625"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
