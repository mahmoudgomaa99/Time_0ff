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
        id="Group_11293"
        data-name="Group 11293"
        transform="translate(-210 -344)">
        <G
          id="Group_11018"
          data-name="Group 11018"
          transform="translate(184 1)">
          <G
            id="Group_10852"
            data-name="Group 10852"
            transform="translate(-242)">
            <G id="item" transform="translate(49.5)">
              <Rect
                id="Rectangle_102"
                data-name="Rectangle 102"
                width="40"
                height="40"
                rx="10"
                transform="translate(218.5 343)"
                fill={isDarkMode ? COLORS.iconBackDarkMode : '#ad4de6'}
              />
            </G>
          </G>
        </G>
        <G id="trip" transform="translate(217.305 350.468)">
          <Path
            id="Path_17081"
            data-name="Path 17081"
            d="M329.4,275.328a4.172,4.172,0,1,0,4.172-4.172A4.172,4.172,0,0,0,329.4,275.328Zm4.172-3.338a3.338,3.338,0,1,1-3.338,3.338A3.338,3.338,0,0,1,333.57,271.99Zm0,0"
            transform="translate(-315.034 -259.472)"
            fill="#fff"
          />
          <Path
            id="Path_17082"
            data-name="Path 17082"
            d="M370.9,561.637h4.768v.834H370.9Zm0,0"
            transform="translate(-354.746 -537.436)"
            fill="#fff"
          />
          <Path
            id="Path_17083"
            data-name="Path 17083"
            d="M329.4,522.9h8.345v.834H329.4Zm0,0"
            transform="translate(-315.034 -500.37)"
            fill="#fff"
          />
          <Path
            id="Path_17084"
            data-name="Path 17084"
            d="M116.379,522.9h.835v.834h-.835Zm0,0"
            transform="translate(-111.194 -500.37)"
            fill="#fff"
          />
          <Path
            id="Path_17085"
            data-name="Path 17085"
            d="M58.285,542.27h.834v.835h-.834Zm0,0"
            transform="translate(-55.603 -518.904)"
            fill="#fff"
          />
          <Path
            id="Path_17086"
            data-name="Path 17086"
            d="M5.227,20.184A31.6,31.6,0,0,0,9.241,7.834l3.88,3.857a.417.417,0,0,0,.292.121.394.394,0,0,0,.067-.005.417.417,0,0,0,.306-.225,4.073,4.073,0,0,0-.764-4.708l-.341-.341h2.935a.418.418,0,0,0,.4-.549A4.074,4.074,0,0,0,12.142,3.2H11.6l2.084-2.1a.417.417,0,0,0-.109-.668,4.075,4.075,0,0,0-4.71.764l-.4.4a4.081,4.081,0,0,0-.362.417,4.009,4.009,0,0,0-.359-.417l-.4-.4A4.073,4.073,0,0,0,2.64.432a.417.417,0,0,0-.109.668L4.617,3.2H4.069A4.073,4.073,0,0,0,.2,5.984a.417.417,0,0,0,.4.549H3.528l-.341.341a4.073,4.073,0,0,0-.765,4.708.417.417,0,0,0,.306.225.4.4,0,0,0,.068.005.417.417,0,0,0,.294-.121L6.7,8.1A22.614,22.614,0,0,1,2.341,19.126a15.568,15.568,0,0,0-1.7-.347l-.261-.026-.083.831.243.024c.417.06.832.144,1.244.24-.083.1-.167.211-.253.314l.64.535A23.49,23.49,0,0,0,7.626,7.182l.48-.477.36.358A30.505,30.505,0,0,1,3.175,21.873l.683.478c.328-.468.641-.954.944-1.449a14.8,14.8,0,0,1,5.048,3.955l.645-.529A15.584,15.584,0,0,0,7.725,21.7H25.212v-.835H6.489c-.409-.247-.831-.471-1.262-.679Zm8.033-9.532L8.852,6.269a3.218,3.218,0,0,1,3.185.8l.4.4a3.239,3.239,0,0,1,.825,3.187ZM14.979,5.7H11.525A4.069,4.069,0,0,0,8.94,5.39,3.236,3.236,0,0,1,11.578,4.03h.563A3.239,3.239,0,0,1,14.979,5.7ZM9.055,2.184l.4-.4A3.242,3.242,0,0,1,12.642.961L10.169,3.449A4.069,4.069,0,0,0,8.2,4.995a3.158,3.158,0,0,1,.857-2.81Zm-2.3-.4.4.4a3.166,3.166,0,0,1,.48.632A3.97,3.97,0,0,0,7.316,4.2a4.07,4.07,0,0,0-1.272-.754L3.569.961a3.24,3.24,0,0,1,3.188.825ZM4.068,4.03h.563a3.236,3.236,0,0,1,2.64,1.36A4.071,4.071,0,0,0,4.688,5.7H1.232A3.24,3.24,0,0,1,4.069,4.03ZM2.951,10.652a3.239,3.239,0,0,1,.825-3.187l.4-.4a3.189,3.189,0,0,1,2.262-.931,3.3,3.3,0,0,1,.925.133Zm0,0"
            transform="translate(0 0)"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
