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
        id="Group_11323"
        data-name="Group 11323"
        transform="translate(-16 -277)">
        <G
          id="Rectangle_228"
          data-name="Rectangle 228"
          transform="translate(16 277)"
          fill={isDarkMode ? COLORS.iconBackDarkMode : '#fff'}
          stroke={isDarkMode ? COLORS.iconBackDarkMode : '#eee'}
          stroke-width="1">
          <Rect width="40" height="40" rx="10" stroke="none" />
          <Rect x="0.5" y="0.5" width="39" height="39" rx="9.5" fill="none" />
        </G>
        <G
          id="svgexport-6_13_"
          data-name="svgexport-6 (13)"
          transform="translate(24.819 214.885)">
          <G
            id="Group_11181"
            data-name="Group 11181"
            transform="translate(18.095 83.026)">
            <G
              id="Group_11180"
              data-name="Group 11180"
              transform="translate(0 0)">
              <Path
                id="Path_17192"
                data-name="Path 17192"
                d="M438.163,278.179a.415.415,0,0,0-.658.507,3.115,3.115,0,0,1,.653,1.919.415.415,0,1,0,.831,0A3.939,3.939,0,0,0,438.163,278.179Z"
                transform="translate(-437.419 -278.017)"
                fill="#b5e633"
              />
            </G>
          </G>
          <G
            id="Group_11183"
            data-name="Group 11183"
            transform="translate(0 74.611)">
            <G
              id="Group_11182"
              data-name="Group 11182"
              transform="translate(0 0)">
              <Path
                id="Path_17193"
                data-name="Path 17193"
                d="M17.444,80.4a3.165,3.165,0,1,0-3.534,0,5.472,5.472,0,0,0-1.7.939,2.335,2.335,0,0,0-3.242,0,5.475,5.475,0,0,0-1.7-.939,3.165,3.165,0,1,0-3.534,0A5.513,5.513,0,0,0,0,85.6s0,.007,0,.011c0,.638.362,1.579,2.088,2.441a15.908,15.908,0,0,0,4.888,1.335,28.574,28.574,0,0,0,7.228,0,15.907,15.907,0,0,0,4.888-1.335c1.726-.862,2.088-1.8,2.088-2.441A5.513,5.513,0,0,0,17.444,80.4Zm-4.1-2.625a2.334,2.334,0,1,1,2.334,2.334A2.337,2.337,0,0,1,13.343,77.776ZM9.351,82.164a1.508,1.508,0,0,1,2.479,0h0a1.509,1.509,0,1,1-2.479,0ZM3.169,77.776A2.334,2.334,0,1,1,5.5,80.11,2.337,2.337,0,0,1,3.169,77.776ZM6.616,88.5A14.41,14.41,0,0,1,2.46,87.311C1.412,86.788.834,86.187.831,85.618c0,0,0,0,0,0a4.672,4.672,0,0,1,7.65-3.6A2.338,2.338,0,0,0,9.1,84.824,3.981,3.981,0,0,0,6.616,88.5Zm7.119.111a27.867,27.867,0,0,1-6.289,0v-.1a3.145,3.145,0,0,1,6.289,0Zm4.986-1.3A14.406,14.406,0,0,1,14.566,88.5a3.981,3.981,0,0,0-2.483-3.675,2.338,2.338,0,0,0,.617-2.811,4.672,4.672,0,0,1,7.65,3.6C20.35,86.183,19.772,86.786,18.721,87.311Z"
                transform="translate(0 -74.611)"
                fill="#b5e633"
              />
            </G>
          </G>
          <G
            id="Group_11185"
            data-name="Group 11185"
            transform="translate(17.194 82.212)">
            <G
              id="Group_11184"
              data-name="Group 11184"
              transform="translate(0 0)">
              <Path
                id="Path_17194"
                data-name="Path 17194"
                d="M416.031,258.344a.416.416,0,0,0,0,.831A.416.416,0,0,0,416.031,258.344Z"
                transform="translate(-415.63 -258.344)"
                fill="#b5e633"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
