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
        id="Group_10852"
        data-name="Group 10852"
        transform="translate(-268 -343)">
        <G id="item" transform="translate(49.5)">
          <Rect
            id="Rectangle_102"
            data-name="Rectangle 102"
            width="40"
            height="40"
            rx="10"
            transform="translate(218.5 343)"
            fill={isDarkMode ? COLORS.iconBackDarkMode : '#6ecd83'}
          />
          <G id="svgexport-6" transform="translate(223.482 334.444)">
            <G id="buggy" transform="translate(1 22)">
              <G id="Group_11016" data-name="Group 11016">
                <Path
                  id="Path_17077"
                  data-name="Path 17077"
                  d="M6.4,40a1.4,1.4,0,1,0,1.4,1.4A1.38,1.38,0,0,0,6.4,40Zm0,1.873a.468.468,0,1,1,.468-.468A.442.442,0,0,1,6.4,41.873Z"
                  transform="translate(-3.127 -31.57)"
                  fill="#fff"
                />
                <Path
                  id="Path_17078"
                  data-name="Path 17078"
                  d="M26.851,28.556,20.482,26.73l-4.59-4.59a.623.623,0,0,0-.375-.14H7.884c-.047,0-.047.047-.094.047A2.5,2.5,0,0,0,6.151,23.4l-2.2,5.151A3.336,3.336,0,0,0,1,31.835a3.258,3.258,0,0,0,3.278,3.278,3.217,3.217,0,0,0,2.95-1.873H23.807a3.217,3.217,0,0,0,2.95,1.873,3.279,3.279,0,0,0,.094-6.556ZM4.981,28.6,5.4,27.62H8.915l.375,1.358Zm6.229.421h-.937l-.234-1.077,1.03.468Zm-1.358-2.2-.328-1.545h.937l.421,2.014Zm2.342,2.388-.047-.281.8.375Zm7.915-1.452L22.449,30.1l-5.432-.468Zm3.84,2.435H23.9c0-.047-.047-.047-.047-.094l-2.061-2.014,3.278.937A3,3,0,0,0,23.948,30.2Zm-4.5-3.138-3.934,2.388-3.606-1.639L11.3,24.716a.456.456,0,0,0-.468-.375H9.008l-.375-1.4h6.7ZM7.041,23.78a1.377,1.377,0,0,1,.656-.7l.983,3.606H5.824Zm-2.763,10.4a2.342,2.342,0,1,1,0-4.683h.094a2.343,2.343,0,0,1-.094,4.683Zm2.482-4.5,2.669.234V32.3H7.51c0-.14.047-.328.047-.468A3.31,3.31,0,0,0,6.76,29.68ZM10.366,32.3V30.008l13.207,1.077a3.64,3.64,0,0,0-.094.749,1.593,1.593,0,0,0,.047.468Zm16.391,1.873A2.342,2.342,0,1,1,29.1,31.835,2.319,2.319,0,0,1,26.757,34.176Z"
                  transform="translate(-1 -22)"
                  fill="#fff"
                />
                <Path
                  id="Path_17079"
                  data-name="Path 17079"
                  d="M54.4,40a1.4,1.4,0,1,0,1.4,1.4A1.38,1.38,0,0,0,54.4,40Zm0,1.873a.468.468,0,1,1,.468-.468A.442.442,0,0,1,54.4,41.873Z"
                  transform="translate(-28.647 -31.57)"
                  fill="#fff"
                />
                <Path
                  id="Path_17080"
                  data-name="Path 17080"
                  d="M32.312,31.588a.282.282,0,0,0,.187.047.45.45,0,0,0,.421-.281l.187-.375.562.328a.422.422,0,0,0,.234.047.492.492,0,0,0,.421-.234.474.474,0,0,0-.187-.656l-.609-.328.234-.468a.461.461,0,0,0-.843-.375l-.8,1.686a.413.413,0,0,0,.187.609Z"
                  transform="translate(-17.514 -25.734)"
                  fill="#fff"
                />
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
