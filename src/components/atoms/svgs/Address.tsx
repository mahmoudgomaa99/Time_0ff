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

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 40 40" {...props}>
      <G id="العنوان" transform="translate(0 -27.465)">
        <G
          id="Group_10203"
          data-name="Group 10203"
          transform="translate(6.886 36.084)">
          <Path
            id="Path_1891"
            data-name="Path 1891"
            d="M370.287,206.525l-2.112-11.636a.394.394,0,0,0-.2-.274l-5.316-2.957a.393.393,0,0,0-.222-.048l.967,12.476-.032.014,6.362,2.854a.395.395,0,0,0,.55-.43Z"
            transform="translate(-350.295 -191.609)"
            fill="#44c868"
          />
          <Path
            id="Path_1892"
            data-name="Path 1892"
            d="M137.7,194.482l-5.437-2.832a.394.394,0,0,0-.209-.043.407.407,0,0,1,.057,0l-.967,12.476,6.395,2.869a.4.4,0,0,0,.162.035h0Z"
            transform="translate(-131.142 -191.607)"
            fill="#44c868"
          />
        </G>
        <G
          id="Group_10204"
          data-name="Group 10204"
          transform="translate(0 36.084)">
          <Path
            id="Path_1893"
            data-name="Path 1893"
            d="M7.853,191.611a.394.394,0,0,0-.222.048l-5.316,2.957a.394.394,0,0,0-.2.274L.006,206.526a.395.395,0,0,0,.55.43l6.327-2.839Z"
            transform="translate(0 -191.61)"
            fill="#4ce166"
          />
          <Path
            id="Path_1894"
            data-name="Path 1894"
            d="M261.589,191.628a.393.393,0,0,0-.152.043L256,194.5v12.505h0a.394.394,0,0,0,.162-.035l6.395-2.869Z"
            transform="translate(-242.558 -191.627)"
            fill="#4ce166"
          />
        </G>
        <Path
          id="Path_1895"
          data-name="Path 1895"
          d="M20.412,263.307l-.429,2.364,6.353-3.356.147-1.9.024-.316Z"
          transform="translate(-18.934 -220.417)"
          fill="#ffdb56"
        />
        <Path
          id="Path_1896"
          data-name="Path 1896"
          d="M7.46,288.294l-.057.738-6.353,3.356L.006,298.134a.395.395,0,0,0,.55.43l6.327-2.839.576-7.431Z"
          transform="translate(0 -247.133)"
          fill="#a8eefc"
        />
        <G
          id="Group_10205"
          data-name="Group 10205"
          transform="translate(7.403 37.437)">
          <Path
            id="Path_1897"
            data-name="Path 1897"
            d="M147.018,260.936l-5.869-.839-.172,2.218,6.04,9.172v-3.335l-3.6-5.675,3.606.431Z"
            transform="translate(-140.977 -257.853)"
            fill="#ffbb24"
          />
          <Path
            id="Path_1898"
            data-name="Path 1898"
            d="M370.24,218.79l-2.554-1.42-2.418.565.03.39.119,1.54Z"
            transform="translate(-353.492 -217.37)"
            fill="#ffbb24"
          />
        </G>
        <Path
          id="Path_1899"
          data-name="Path 1899"
          d="M262.13,232.825l-.229-2.954h0l-.135-1.743-5.736,2.518v1.972l3.747-1.629Z"
          transform="translate(-242.586 -190.126)"
          fill="#ffdb56"
        />
        <Path
          id="Path_1900"
          data-name="Path 1900"
          d="M375.668,275.966l-.53-2.923-7.018-8.145.214,2.766,7.2,8.676A.394.394,0,0,0,375.668,275.966Z"
          transform="translate(-348.789 -224.966)"
          fill="#ffbb24"
        />
        <Path
          id="Path_1901"
          data-name="Path 1901"
          d="M156.881,27.465a5.524,5.524,0,0,0-5.52,5.515,9.626,9.626,0,0,0,2.655,6,18.865,18.865,0,0,0,2.624,2.578.395.395,0,0,0,.483,0,18.869,18.869,0,0,0,2.624-2.578,9.625,9.625,0,0,0,2.655-6A5.524,5.524,0,0,0,156.881,27.465Zm2.044,5.515a2.044,2.044,0,1,1-2.044-2.042A2.043,2.043,0,0,1,158.925,32.98Z"
          transform="translate(-143.413)"
          fill="#ff4a4a"
        />
        <Path
          id="Path_1902"
          data-name="Path 1902"
          d="M243.634,27.465a5.551,5.551,0,0,0-.712.046,5.525,5.525,0,0,1,4.808,5.469,9.626,9.626,0,0,1-2.655,6,19.739,19.739,0,0,1-2.153,2.188c.276.239.451.376.47.39a.395.395,0,0,0,.483,0,18.87,18.87,0,0,0,2.624-2.578,9.626,9.626,0,0,0,2.655-6A5.524,5.524,0,0,0,243.634,27.465Z"
          transform="translate(-230.166)"
          fill="#e7343f"
        />
        <Path
          id="Path_1903"
          data-name="Path 1903"
          d="M256.162,417.2l2.378-1.067L256,413.507v3.729h0A.394.394,0,0,0,256.162,417.2Z"
          transform="translate(-242.558 -365.771)"
          fill="#ffdb56"
        />
        <G
          id="Group_10206"
          data-name="Group 10206"
          transform="translate(6.886 38.857)">
          <Path
            id="Path_1904"
            data-name="Path 1904"
            d="M373.554,244.927a.394.394,0,0,0-.2-.274l-.419-.233-4.822,1.075h0l7.018,8.145Z"
            transform="translate(-355.675 -244.42)"
            fill="#1ea4e9"
          />
          <Path
            id="Path_1905"
            data-name="Path 1905"
            d="M137.7,311.912h0v-.394l-6.04-9.172-.517,6.663,6.395,2.869A.394.394,0,0,0,137.7,311.912Z"
            transform="translate(-131.14 -299.304)"
            fill="#1ea4e9"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="26.884"
  height="24"
  viewBox="0 0 26.884 24"></svg>;
