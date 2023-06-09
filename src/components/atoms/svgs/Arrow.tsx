import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg';
import { TSvgProps } from '../Svg';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import COLORS from 'values/colors';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({
  size,
  isTripDetails,
  bgColor,
  txtColor,
  ...props
}: any) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <Svg {...computedSize} viewBox="0 0 38.886 38.886" {...props}>
      <G
        id="Group_11055"
        data-name="Group 11055"
        transform="translate(55.121 60.131) rotate(177)">
        <G
          id="Path_17111"
          data-name="Path 17111"
          transform="translate(15 24)"
          fill={isTripDetails ? COLORS.white : isDarkMode ? '#2b2c3a' : '#fff'}>
          <Path
            d="M 18.5 36.5 C 13.69202041625977 36.5 9.171830177307129 34.62767028808594 5.772079944610596 31.22792053222656 C 2.372329950332642 27.82817077636719 0.5 23.30797958374023 0.5 18.5 C 0.5 13.69202041625977 2.372329950332642 9.171830177307129 5.772079944610596 5.772079944610596 C 9.171830177307129 2.372329950332642 13.69202041625977 0.5 18.5 0.5 C 23.30797958374023 0.5 27.82817077636719 2.372329950332642 31.22792053222656 5.772079944610596 C 34.62767028808594 9.171830177307129 36.5 13.69202041625977 36.5 18.5 C 36.5 23.30797958374023 34.62767028808594 27.82817077636719 31.22792053222656 31.22792053222656 C 27.82817077636719 34.62767028808594 23.30797958374023 36.5 18.5 36.5 Z"
            stroke="none"
          />
          <Path
            d="M 18.5 1 C 13.82558059692383 1 9.430940628051758 2.820320129394531 6.125629425048828 6.125629425048828 C 2.820320129394531 9.430940628051758 1 13.82558059692383 1 18.5 C 1 23.17441940307617 2.820320129394531 27.56906127929688 6.125629425048828 30.87437057495117 C 9.430940628051758 34.17967987060547 13.82558059692383 36 18.5 36 C 23.17441940307617 36 27.56906127929688 34.17967987060547 30.87437057495117 30.87437057495117 C 34.17967987060547 27.56906127929688 36 23.17441940307617 36 18.5 C 36 13.82558059692383 34.17967987060547 9.430940628051758 30.87437057495117 6.125629425048828 C 27.56906127929688 2.820320129394531 23.17441940307617 1 18.5 1 M 18.5 0 C 28.71726989746094 0 37 8.282730102539062 37 18.5 C 37 28.71726989746094 28.71726989746094 37 18.5 37 C 8.282730102539062 37 0 28.71726989746094 0 18.5 C 0 8.282730102539062 8.282730102539062 0 18.5 0 Z"
            stroke="none"
            fill={
              isTripDetails ? COLORS.white : isDarkMode ? '#2b2c3a' : '#e1e1e1'
            }
          />
        </G>
        <Path
          id="Icon_ionic-ios-arrow-back"
          data-name="Icon ionic-ios-arrow-back"
          d="M13.286,12.1l4.468-4.465a.844.844,0,0,0-1.2-1.192L11.5,11.5a.842.842,0,0,0-.025,1.164l5.084,5.094a.844.844,0,1,0,1.2-1.192Z"
          transform="translate(18.729 30.306)"
          fill={isTripDetails ? COLORS.black : isDarkMode ? '#fff' : '#000'}
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
