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
        id="Group_11320"
        data-name="Group 11320"
        transform="translate(-16 -460)">
        <G id="Icon_Edit-Profile" transform="translate(-950 -1474)">
          <Rect
            id="Rectangle_41"
            data-name="Rectangle 41"
            width="40"
            height="40"
            rx="13"
            transform="translate(966 1934)"
            fill={isDarkMode ? COLORS.iconBackDarkMode : '#f8ffd4'}
          />
        </G>
        <G
          id="svgexport-6_9_"
          data-name="svgexport-6 (9)"
          transform="translate(19.923 464.237)">
          <G
            id="Group_11153"
            data-name="Group 11153"
            transform="translate(5.88 8.138)">
            <Path
              id="Path_17163"
              data-name="Path 17163"
              d="M12.085,11.952H22.821l-5.865,4.605a.784.784,0,0,1-.406.158.8.8,0,0,1-.409-.158L11.95,13.265a.448.448,0,0,0-.15-.08,1.635,1.635,0,0,0,.3-.978A2.35,2.35,0,0,0,12.085,11.952ZM9.355,8.99a.409.409,0,0,1,.084.033,1.5,1.5,0,0,1,.4.325,5.221,5.221,0,0,1,.753,1.145l.014.031a3.932,3.932,0,0,1,.636,1.7.658.658,0,0,1-.4.7l-.8.459a1.746,1.746,0,0,0-.825,1.333,2.209,2.209,0,0,0,.251,1.369l1.966,3.388a2.232,2.232,0,0,0,1.068.9,1.762,1.762,0,0,0,1.573-.045l.8-.458a.668.668,0,0,1,.808.006,3.949,3.949,0,0,1,1.161,1.394c.006.011.012.021.019.031a5.246,5.246,0,0,1,.62,1.22,1.487,1.487,0,0,1,.085.5c-.009.105-.012.094-.039.111l-.606.347a4.64,4.64,0,0,1-4.165-.135,7.832,7.832,0,0,1-3.092-3.2s0-.006-.006-.008L8,17.278a.044.044,0,0,1-.006-.009A7.779,7.779,0,0,1,6.752,13,4.581,4.581,0,0,1,8.717,9.349L9.323,9c.014-.008.019-.014.032-.013Zm.006-.852a.9.9,0,0,0-.471.116l-.641.369-.041.025a5.52,5.52,0,0,0-2.322,4.32A8.587,8.587,0,0,0,7.25,17.719L8.9,20.568l0-.008a8.628,8.628,0,0,0,3.452,3.549,5.58,5.58,0,0,0,4.922.16.328.328,0,0,0,.042-.021l.642-.369a1,1,0,0,0,.47-.785,2.123,2.123,0,0,0-.122-.839,5.73,5.73,0,0,0-.726-1.431,4.547,4.547,0,0,0-1.455-1.691,1.66,1.66,0,0,0-1.688-.013l-.8.459a.874.874,0,0,1-.8,0,1.528,1.528,0,0,1-.654-.539L10.22,15.648a1.52,1.52,0,0,1-.142-.835.86.86,0,0,1,.4-.688l.774-.445a.428.428,0,0,0,.164.261L15.6,17.235a1.646,1.646,0,0,0,.921.352h.05a1.644,1.644,0,0,0,.92-.352L23.268,12.7v7.492c0,.114-.13.264-.385.264h-4a.432.432,0,1,0,0,.863h4a1.2,1.2,0,0,0,1.254-1.127V12.216a1.2,1.2,0,0,0-1.254-1.128H11.847a7.691,7.691,0,0,0-.487-.981,5.749,5.749,0,0,0-.885-1.34,2.139,2.139,0,0,0-.668-.525h0a1.113,1.113,0,0,0-.446-.1Z"
              transform="translate(-5.88 -8.138)"
              fill="#a5c112"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
