import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg';
import { TSvgProps } from '../Svg';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 17.26 23.225" {...props}>
      <G
        id="svgexport-7_1_"
        data-name="svgexport-7 (1)"
        transform="translate(-11.884 -4.876)">
        <G
          id="Group_11307"
          data-name="Group 11307"
          transform="translate(12.034 5)">
          <G
            id="Group_11294"
            data-name="Group 11294"
            transform="translate(5.257 17.028)">
            <Path
              id="Path_17324"
              data-name="Path 17324"
              d="M25.758,50.952a.424.424,0,0,1-.348-.18,5.635,5.635,0,0,1-.548-5.539.426.426,0,1,1,.778.348,4.779,4.779,0,0,0,.465,4.7.427.427,0,0,1-.347.673Z"
              transform="translate(-24.377 -44.981)"
              stroke={bgColor}
              stroke-width="0.2"
            />
          </G>
          <G
            id="Group_11295"
            data-name="Group 11295"
            transform="translate(8.165 11.347)">
            <Path
              id="Path_17325"
              data-name="Path 17325"
              d="M33.185,43.295a.426.426,0,0,1-.358-.656A7.932,7.932,0,0,0,31.351,32.39a.426.426,0,0,1,.557-.645A8.789,8.789,0,0,1,33.543,43.1.423.423,0,0,1,33.185,43.295Z"
              transform="translate(-31.204 -31.642)"
              stroke={bgColor}
              stroke-width="0.2"
            />
          </G>
          <G
            id="Group_11296"
            data-name="Group 11296"
            transform="translate(5.705 13.67)">
            <Path
              id="Path_17326"
              data-name="Path 17326"
              d="M25.854,41.307a.413.413,0,0,1-.173-.037.426.426,0,0,1-.215-.562,7.759,7.759,0,0,0,.68-3.186.426.426,0,0,1,.852,0,8.612,8.612,0,0,1-.754,3.534.426.426,0,0,1-.389.252Z"
              transform="translate(-25.429 -37.095)"
              stroke={bgColor}
              stroke-width="0.2"
            />
          </G>
          <G
            id="Group_11297"
            data-name="Group 11297"
            transform="translate(6.422 13.67)">
            <Path
              id="Path_17327"
              data-name="Path 17327"
              d="M28.468,41.249l-.044,0a.427.427,0,0,1-.381-.468,4.224,4.224,0,0,0-.846-3,.426.426,0,0,1,.678-.517,5.079,5.079,0,0,1,1.016,3.6A.425.425,0,0,1,28.468,41.249Z"
              transform="translate(-27.111 -37.095)"
              stroke={bgColor}
              stroke-width="0.2"
            />
          </G>
          <G
            id="Group_11298"
            data-name="Group 11298"
            transform="translate(7.353 11.347)">
            <Path
              id="Path_17328"
              data-name="Path 17328"
              d="M29.722,38.119a.421.421,0,0,1-.263-.091.425.425,0,0,1-.072-.6,5.282,5.282,0,0,0,.752-5.2.426.426,0,1,1,.791-.315,6.135,6.135,0,0,1-.874,6.046.427.427,0,0,1-.336.162Z"
              transform="translate(-29.297 -31.642)"
              stroke={bgColor}
              stroke-width="0.2"
            />
          </G>
          <G
            id="Group_11299"
            data-name="Group 11299"
            transform="translate(12.022 3.892)">
            <Path
              id="Path_17329"
              data-name="Path 17329"
              d="M40.684,18.818a.426.426,0,0,1-.336-.687,3.294,3.294,0,0,0,.4-3.391.426.426,0,0,1,.775-.352,4.142,4.142,0,0,1-.5,4.265.426.426,0,0,1-.337.164Z"
              transform="translate(-40.259 -14.139)"
              stroke={bgColor}
              stroke-width="0.2"
            />
          </G>
          <G
            id="Group_11300"
            data-name="Group 11300"
            transform="translate(6.546)">
            <Path
              id="Path_17330"
              data-name="Path 17330"
              d="M33.3,13.572a.425.425,0,0,1-.419-.352A10.605,10.605,0,0,0,27.62,5.8a.426.426,0,0,1,.417-.743,11.455,11.455,0,0,1,5.686,8.018.425.425,0,0,1-.345.493.373.373,0,0,1-.075.007Z"
              transform="translate(-27.403 -5)"
              stroke={bgColor}
              stroke-width="0.2"
            />
          </G>
          <G
            id="Group_11301"
            data-name="Group 11301"
            transform="translate(2.391 6.021)">
            <Path
              id="Path_17331"
              data-name="Path 17331"
              d="M19.323,22.632a.426.426,0,0,1-.417-.342,5.67,5.67,0,0,0-1.162-2.458.426.426,0,1,1,.661-.538,6.543,6.543,0,0,1,1.337,2.829.426.426,0,0,1-.333.5.483.483,0,0,1-.085.008Z"
              transform="translate(-17.648 -19.137)"
              stroke={bgColor}
              stroke-width="0.2"
            />
          </G>
          <G
            id="Group_11302"
            data-name="Group 11302"
            transform="translate(3.641 0.001)">
            <Path
              id="Path_17332"
              data-name="Path 17332"
              d="M21.007,14.518a.426.426,0,0,1-.34-.682,14.107,14.107,0,0,0,2.819-8.409A.425.425,0,0,1,23.913,5h0a.426.426,0,0,1,.425.427,14.963,14.963,0,0,1-2.99,8.919A.427.427,0,0,1,21.007,14.518Z"
              transform="translate(-20.582 -5.002)"
              stroke={bgColor}
              stroke-width="0.2"
            />
          </G>
          <G
            id="Group_11303"
            data-name="Group 11303"
            transform="translate(12.472 3.893)">
            <Path
              id="Path_17333"
              data-name="Path 17333"
              d="M45.415,24.477H45.4a.426.426,0,0,1-.408-.443,12.34,12.34,0,0,0-3.55-9.169.426.426,0,0,1,.606-.6,13.2,13.2,0,0,1,3.8,9.8A.425.425,0,0,1,45.415,24.477Z"
              transform="translate(-41.316 -14.139)"
              stroke={bgColor}
              stroke-width="0.2"
            />
          </G>
          <G
            id="Group_11304"
            data-name="Group 11304"
            transform="translate(9.72 13.378)">
            <Path
              id="Path_17334"
              data-name="Path 17334"
              d="M35.282,46.032a.426.426,0,0,1-.145-.827,9.3,9.3,0,0,0,6.144-8.386.42.42,0,0,1,.443-.408.425.425,0,0,1,.408.443,10.151,10.151,0,0,1-6.7,9.151A.436.436,0,0,1,35.282,46.032Z"
              transform="translate(-34.856 -36.411)"
              stroke={bgColor}
              stroke-width="0.2"
            />
          </G>
          <G
            id="Group_11305"
            data-name="Group 11305"
            transform="translate(0 10.49)">
            <Path
              id="Path_17335"
              data-name="Path 17335"
              d="M18.672,42.139a.433.433,0,0,1-.095-.011,8.416,8.416,0,0,1-5.5-12.28.426.426,0,0,1,.745.412A7.563,7.563,0,0,0,18.766,41.3a.427.427,0,0,1-.094.842Z"
              transform="translate(-12.034 -29.629)"
              stroke={bgColor}
              stroke-width="0.2"
            />
          </G>
          <G
            id="Group_11306"
            data-name="Group 11306"
            transform="translate(0.989 6.021)">
            <Path
              id="Path_17336"
              data-name="Path 17336"
              d="M14.782,24.459a.426.426,0,0,1-.372-.632A11.234,11.234,0,0,0,15.76,19.52a.426.426,0,0,1,.848.087,12.081,12.081,0,0,1-1.453,4.631.427.427,0,0,1-.374.22Z"
              transform="translate(-14.356 -19.138)"
              stroke={bgColor}
              stroke-width="0.2"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;

<svg xmlns="http://www.w3.org/2000/svg" width="17.26" height="23.225"></svg>;
