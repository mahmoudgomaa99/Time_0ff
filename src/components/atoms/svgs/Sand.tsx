import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Circle,
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
    <Svg {...computedSize} viewBox="0 0 36.833 65" {...props}>
      <G
        id="svgexport-6_11_"
        data-name="svgexport-6 (11)"
        transform="translate(-60 -8)">
        <G id="Group_11174" data-name="Group 11174" transform="translate(60 8)">
          <G
            id="Group_11159"
            data-name="Group 11159"
            transform="translate(3.581 0)">
            <Path
              id="Path_17179"
              data-name="Path 17179"
              d="M102.893,24.033V8H73.222V24.033a14.927,14.927,0,0,0,8.383,13.446A3.255,3.255,0,0,1,83.454,40.4V40.6a3.256,3.256,0,0,1-1.848,2.924,14.927,14.927,0,0,0-8.383,13.446V73h29.671V56.967A14.927,14.927,0,0,0,94.51,43.521,3.255,3.255,0,0,1,92.662,40.6V40.4a3.256,3.256,0,0,1,1.848-2.924A14.926,14.926,0,0,0,102.893,24.033Z"
              transform="translate(-73.222 -8)"
              fill="#ffeacf"
            />
          </G>
          <G
            id="Group_11160"
            data-name="Group 11160"
            transform="translate(23.11 36.657)">
            <Path
              id="Path_17180"
              data-name="Path 17180"
              d="M153.3,156.472a.812.812,0,0,1-.812-.812,12.021,12.021,0,0,0-6.706-10.766.812.812,0,0,1,.71-1.462,13.655,13.655,0,0,1,7.621,12.227A.813.813,0,0,1,153.3,156.472Z"
              transform="translate(-145.328 -143.35)"
              fill="#fcf9de"
            />
          </G>
          <G
            id="Group_11161"
            data-name="Group 11161"
            transform="translate(3.581 0)">
            <Path
              id="Path_17181"
              data-name="Path 17181"
              d="M89.189,43.521A3.256,3.256,0,0,0,91.037,40.6V40.4a3.256,3.256,0,0,0-1.848-2.924,14.927,14.927,0,0,1-8.383-13.446V8H73.222V24.033a14.927,14.927,0,0,0,8.383,13.446A3.256,3.256,0,0,1,83.454,40.4V40.6a3.256,3.256,0,0,1-1.848,2.924,14.927,14.927,0,0,0-8.383,13.446V73h7.583V56.967A14.927,14.927,0,0,1,89.189,43.521Z"
              transform="translate(-73.222 -8)"
              fill="#ffd59a"
            />
          </G>
          <G
            id="Group_11162"
            data-name="Group 11162"
            transform="translate(7.45 21.581)">
            <Path
              id="Path_17182"
              data-name="Path 17182"
              d="M87.509,87.683a12.237,12.237,0,0,0,10.925,6.792h.082a12.237,12.237,0,0,0,10.925-6.792Z"
              transform="translate(-87.509 -87.683)"
              fill="#f9bb32"
            />
          </G>
          <G
            id="Group_11163"
            data-name="Group 11163"
            transform="translate(6.139 46.429)">
            <Path
              id="Path_17183"
              data-name="Path 17183"
              d="M107.222,193.788v-2.019a12.3,12.3,0,0,0-12.237-12.34H94.9a12.3,12.3,0,0,0-12.237,12.34v2.019Z"
              transform="translate(-82.666 -179.429)"
              fill="#f9bb32"
            />
          </G>
          <G
            id="Group_11164"
            data-name="Group 11164"
            transform="translate(17.333 25.794)">
            <Rect
              id="Rectangle_225"
              data-name="Rectangle 225"
              width="2.167"
              height="21.667"
              transform="translate(0 0)"
              fill="#f9bb32"
            />
          </G>
          <G
            id="Group_11165"
            data-name="Group 11165"
            transform="translate(6.139 48.805)">
            <Path
              id="Path_17184"
              data-name="Path 17184"
              d="M87.692,188.365c0-.054,0-.107,0-.161a12.362,12.362,0,0,0-5.028,9.963v2.019h5.026v-11.82Z"
              transform="translate(-82.667 -188.204)"
              fill="#db9c2e"
            />
          </G>
          <G
            id="Group_11166"
            data-name="Group 11166"
            transform="translate(17.333 28.152)">
            <Path
              id="Path_17185"
              data-name="Path 17185"
              d="M124,120.642a14.767,14.767,0,0,1,2.167-1.3v-6.09a14.744,14.744,0,0,1-2.167-1.3Z"
              transform="translate(-124 -111.946)"
              fill="#db9c2e"
            />
          </G>
          <G
            id="Group_11167"
            data-name="Group 11167"
            transform="translate(7.45 21.581)">
            <Path
              id="Path_17186"
              data-name="Path 17186"
              d="M97.671,94.45a14.939,14.939,0,0,1-5.389-6.767H87.509A12.25,12.25,0,0,0,97.671,94.45Z"
              transform="translate(-87.509 -87.683)"
              fill="#db9c2e"
            />
          </G>
          <G
            id="Group_11168"
            data-name="Group 11168"
            transform="translate(0 0.043)">
            <Path
              id="Path_17187"
              data-name="Path 17187"
              d="M95.292,13.834H61.541A1.541,1.541,0,0,1,60,12.292V9.7a1.541,1.541,0,0,1,1.541-1.541H95.292A1.541,1.541,0,0,1,96.833,9.7v2.592A1.541,1.541,0,0,1,95.292,13.834Z"
              transform="translate(-60 -8.159)"
              fill="#bf6c0d"
            />
          </G>
          <G
            id="Group_11169"
            data-name="Group 11169"
            transform="translate(0 59.282)">
            <Path
              id="Path_17188"
              data-name="Path 17188"
              d="M61.541,226.889H95.292a1.541,1.541,0,0,1,1.541,1.541v2.592a1.541,1.541,0,0,1-1.541,1.541H61.541A1.541,1.541,0,0,1,60,231.022V228.43A1.541,1.541,0,0,1,61.541,226.889Z"
              transform="translate(-60 -226.889)"
              fill="#bf6c0d"
            />
          </G>
          <G
            id="Group_11170"
            data-name="Group 11170"
            transform="translate(12.488 7.08)">
            <Circle
              id="Ellipse_39"
              data-name="Ellipse 39"
              cx="2.438"
              cy="2.438"
              r="2.438"
              fill="#ffd59a"
            />
          </G>
          <G
            id="Group_11171"
            data-name="Group 11171"
            transform="translate(12.488 53.618)">
            <Circle
              id="Ellipse_40"
              data-name="Ellipse 40"
              cx="2.438"
              cy="2.438"
              r="2.438"
              fill="#db9c2e"
            />
          </G>
          <G
            id="Group_11172"
            data-name="Group 11172"
            transform="translate(0 0.043)">
            <Path
              id="Path_17189"
              data-name="Path 17189"
              d="M67.583,12.292V9.7a1.541,1.541,0,0,1,1.541-1.541H61.541A1.541,1.541,0,0,0,60,9.7v2.592a1.541,1.541,0,0,0,1.541,1.541h7.583A1.541,1.541,0,0,1,67.583,12.292Z"
              transform="translate(-60 -8.159)"
              fill="#a56021"
            />
          </G>
          <G
            id="Group_11173"
            data-name="Group 11173"
            transform="translate(0 59.282)">
            <Path
              id="Path_17190"
              data-name="Path 17190"
              d="M67.583,231.022V228.43a1.541,1.541,0,0,1,1.541-1.541H61.541A1.541,1.541,0,0,0,60,228.43v2.592a1.541,1.541,0,0,0,1.541,1.541h7.583A1.541,1.541,0,0,1,67.583,231.022Z"
              transform="translate(-60 -226.889)"
              fill="#a56021"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
