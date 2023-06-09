import * as React from 'react';
import Svg, { G, Path, Rect } from 'react-native-svg';

import { TSvgProps } from '../Svg';
import useSvgSize from 'hooks/useSvgSize';
import { seelctIsDarkMode } from '../../../redux/DarmkMode/index';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import COLORS from 'values/colors';

const WIDTH = 1;
const HEIGHT = 1;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <Svg viewBox="0 0 40 40" fill="none" {...computedSize} {...props}>
      <G
        id="Group_11317"
        data-name="Group 11317"
        transform="translate(-15.426 -101)">
        <G id="Icon_Edit-Profile" transform="translate(-950.574 -1833)">
          <Rect
            id="Rectangle_41"
            data-name="Rectangle 41"
            width="40"
            height="40"
            rx="13"
            transform="translate(966 1934)"
            fill={isDarkMode ? COLORS.iconBackDarkMode : '#eff7fe'}
          />
        </G>
        <G id="global" transform="translate(27.167 112.667)">
          <Path
            id="Path_17266"
            data-name="Path 17266"
            d="M8.667,0a8.667,8.667,0,1,0,8.667,8.667A8.667,8.667,0,0,0,8.667,0Zm7.5,11.7-2.465.425a12.933,12.933,0,0,0,.454-3.173h2.6a8.035,8.035,0,0,1-.586,2.747ZM.585,8.956h2.6a12.933,12.933,0,0,0,.454,3.173L1.171,11.7A8.035,8.035,0,0,1,.585,8.956Zm.586-3.325,2.465-.425a12.933,12.933,0,0,0-.454,3.173H.585a8.035,8.035,0,0,1,.586-2.747Zm7.784-.992a19.874,19.874,0,0,1,3.1.283l1.02.176a12.4,12.4,0,0,1,.5,3.281H8.956Zm3.2-.287a20.477,20.477,0,0,0-3.2-.291V.594c1.656.159,3.095,1.675,3.91,3.882ZM8.378,4.061a20.474,20.474,0,0,0-3.2.291l-.715.124C5.283,2.268,6.722.751,8.378.593Zm-3.1.861a19.868,19.868,0,0,1,3.1-.283V8.378H3.76a12.4,12.4,0,0,1,.5-3.281ZM3.76,8.956H8.378v3.739a19.874,19.874,0,0,1-3.1-.283l-1.02-.176a12.4,12.4,0,0,1-.5-3.281Zm1.422,4.026a20.547,20.547,0,0,0,3.2.293v3.467c-1.656-.159-3.095-1.676-3.91-3.883Zm3.773.293a20.545,20.545,0,0,0,3.2-.293l.715-.124c-.815,2.207-2.254,3.724-3.91,3.883Zm3.1-.862a19.869,19.869,0,0,1-3.1.283V8.956h4.618a12.4,12.4,0,0,1-.5,3.281Zm2.1-4.034A12.933,12.933,0,0,0,13.7,5.205l2.465.425a8.035,8.035,0,0,1,.586,2.747ZM15.87,4.994l-2.363-.408a7.966,7.966,0,0,0-2.3-3.6,8.127,8.127,0,0,1,4.661,4Zm-9.745-4a7.966,7.966,0,0,0-2.3,3.6l-2.363.408a8.127,8.127,0,0,1,4.661-4ZM1.463,12.34l2.363.408a7.966,7.966,0,0,0,2.3,3.6,8.127,8.127,0,0,1-4.661-4Zm9.745,4a7.966,7.966,0,0,0,2.3-3.6l2.363-.408a8.127,8.127,0,0,1-4.661,4Zm0,0"
            fill="#0370d6"
            stroke="#0370d6"
            stroke-width="0.5"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"></svg>;
