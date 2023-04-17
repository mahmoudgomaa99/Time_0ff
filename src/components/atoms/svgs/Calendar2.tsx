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
        id="Group_11324"
        data-name="Group 11324"
        transform="translate(-16 -332)">
        <G
          id="Rectangle_228"
          data-name="Rectangle 228"
          transform="translate(16 332)"
          fill={isDarkMode ? COLORS.iconBackDarkMode : '#fff'}
          stroke={isDarkMode ? COLORS.iconBackDarkMode : '#eee'}
          stroke-width="1">
          <Rect width="40" height="40" rx="10" stroke="none" />
          <Rect x="0.5" y="0.5" width="39" height="39" rx="9.5" fill="none" />
        </G>
        <G
          id="svgexport-6_14_"
          data-name="svgexport-6 (14)"
          transform="translate(25.742 341.273)">
          <G id="Calendar" transform="translate(2 2)">
            <Path
              id="Path_17195"
              data-name="Path 17195"
              d="M18,3.745H16.545V3.164a1.164,1.164,0,1,0-2.327,0v.582H11.891V3.164a1.164,1.164,0,0,0-2.327,0v.582H7.236V3.164a1.164,1.164,0,0,0-2.327,0v.582H3.455A1.455,1.455,0,0,0,2,5.2V16.836a1.455,1.455,0,0,0,1.455,1.455H11.6a.291.291,0,0,0,0-.582H3.455a.875.875,0,0,1-.873-.873V7.818H18.873v4.945a.291.291,0,0,0,.582,0V5.2A1.455,1.455,0,0,0,18,3.745Zm-3.2-.582a.582.582,0,1,1,1.164,0V4.909a.582.582,0,1,1-1.164,0Zm-4.655,0a.582.582,0,1,1,1.164,0V4.909a.582.582,0,1,1-1.164,0Zm-4.655,0a.582.582,0,1,1,1.164,0V4.909a.582.582,0,0,1-1.164,0ZM18.873,7.236H2.582V5.2a.875.875,0,0,1,.873-.873H4.909v.582a1.164,1.164,0,0,0,2.327,0V4.327H9.564v.582a1.164,1.164,0,0,0,2.327,0V4.327h2.327v.582a1.164,1.164,0,1,0,2.327,0V4.327H18a.875.875,0,0,1,.873.873Z"
              transform="translate(-2 -2)"
              fill="#b5e633"
            />
            <Path
              id="Path_17196"
              data-name="Path 17196"
              d="M24.327,27.582A.582.582,0,0,0,23.745,27H22.582a.582.582,0,0,0-.582.582v.873a.582.582,0,0,0,.582.582h1.164a.582.582,0,0,0,.582-.582Zm-1.745.873v-.873h1.164v.873Z"
              transform="translate(-16.182 -19.727)"
              fill="#b5e633"
            />
            <Path
              id="Path_17197"
              data-name="Path 17197"
              d="M12.327,27.582A.582.582,0,0,0,11.745,27H10.582a.582.582,0,0,0-.582.582v.873a.582.582,0,0,0,.582.582h1.164a.582.582,0,0,0,.582-.582Zm-1.745.873v-.873h1.164v.873Z"
              transform="translate(-7.673 -19.727)"
              fill="#b5e633"
            />
            <Path
              id="Path_17198"
              data-name="Path 17198"
              d="M47.745,29.036a.582.582,0,0,0,.582-.582v-.873A.582.582,0,0,0,47.745,27H46.582a.582.582,0,0,0-.582.582v.873a.582.582,0,0,0,.582.582Zm-1.164-1.455h1.164v.873H46.582Z"
              transform="translate(-33.2 -19.727)"
              fill="#b5e633"
            />
            <Path
              id="Path_17199"
              data-name="Path 17199"
              d="M24.327,36.582A.582.582,0,0,0,23.745,36H22.582a.582.582,0,0,0-.582.582v.873a.582.582,0,0,0,.582.582h1.164a.582.582,0,0,0,.582-.582Zm-1.745.873v-.873h1.164v.873Z"
              transform="translate(-16.182 -26.109)"
              fill="#b5e633"
            />
            <Path
              id="Path_17200"
              data-name="Path 17200"
              d="M12.327,36.582A.582.582,0,0,0,11.745,36H10.582a.582.582,0,0,0-.582.582v.873a.582.582,0,0,0,.582.582h1.164a.582.582,0,0,0,.582-.582Zm-1.745.873v-.873h1.164v.873Z"
              transform="translate(-7.673 -26.109)"
              fill="#b5e633"
            />
            <Path
              id="Path_17201"
              data-name="Path 17201"
              d="M23.745,45H22.582a.582.582,0,0,0-.582.582v.873a.582.582,0,0,0,.582.582h1.164a.582.582,0,0,0,.582-.582v-.873A.582.582,0,0,0,23.745,45Zm-1.164,1.455v-.873h1.164v.873Z"
              transform="translate(-16.182 -32.491)"
              fill="#b5e633"
            />
            <Path
              id="Path_17202"
              data-name="Path 17202"
              d="M34.582,29.036h1.164a.582.582,0,0,0,.582-.582v-.873A.582.582,0,0,0,35.745,27H34.582a.582.582,0,0,0-.582.582v.873A.582.582,0,0,0,34.582,29.036Zm0-1.455h1.164v.873H34.582Z"
              transform="translate(-24.691 -19.727)"
              fill="#b5e633"
            />
            <Path
              id="Path_17203"
              data-name="Path 17203"
              d="M34,37.455a.582.582,0,0,0,.582.582.291.291,0,0,0,0-.582v-.873h1.164a.291.291,0,1,0,0-.582H34.582a.582.582,0,0,0-.582.582Z"
              transform="translate(-24.691 -26.109)"
              fill="#b5e633"
            />
            <Path
              id="Path_17204"
              data-name="Path 17204"
              d="M11.745,45H10.582a.582.582,0,0,0-.582.582v.873a.582.582,0,0,0,.582.582h1.164a.582.582,0,0,0,.582-.582v-.873A.582.582,0,0,0,11.745,45Zm-1.164,1.455v-.873h1.164v.873Z"
              transform="translate(-7.673 -32.491)"
              fill="#b5e633"
            />
            <Path
              id="Path_17205"
              data-name="Path 17205"
              d="M39.782,36a3.782,3.782,0,1,0,3.782,3.782A3.782,3.782,0,0,0,39.782,36Zm0,6.982a3.2,3.2,0,1,1,3.2-3.2A3.2,3.2,0,0,1,39.782,42.982Z"
              transform="translate(-26.109 -26.109)"
              fill="#b5e633"
            />
            <Path
              id="Path_17206"
              data-name="Path 17206"
              d="M45.546,44.6l-2.263,2.263-1.028-1.029a.291.291,0,1,0-.411.411l1.234,1.234a.291.291,0,0,0,.411,0l2.468-2.468a.291.291,0,1,0-.411-.411Z"
              transform="translate(-30.192 -32.147)"
              fill="#b5e633"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
