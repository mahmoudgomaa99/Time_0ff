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
      <G
        id="Group_11294"
        data-name="Group 11294"
        transform="translate(-145 -344)">
        <G
          id="Group_11017"
          data-name="Group 11017"
          transform="translate(119 1)">
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
                fill="#fdb473"
              />
            </G>
          </G>
        </G>
        <G
          id="svgexport-6_1_"
          data-name="svgexport-6 (1)"
          transform="translate(153.009 350.971)">
          <G
            id="_005---Surfing"
            data-name="005---Surfing"
            transform="translate(0 0.029)">
            <Path
              id="Shape"
              d="M6,23.6a.4.4,0,0,0,.4.4H24.786a.4.4,0,0,0,0-.8H19.378c1.314-1.169,2.784-3.105,4.575-7.886a17.423,17.423,0,0,0,.068-12.431A.769.769,0,0,0,22.976,2.5a17.064,17.064,0,0,0-6.9,6.815A18.339,18.339,0,0,0,11.777.27a.823.823,0,0,0-1.162,0A18.381,18.381,0,0,0,6.28,9.514a21.635,21.635,0,0,0-.263,2.764c0,.177-.016.349-.016.53,0,6.143.938,8.549,1.951,10.232a1.822,1.822,0,0,0,.11.16H6.4a.4.4,0,0,0-.4.4Zm17.2-8.566c-1.943,5.185-3.512,6.92-4.789,7.933-.388.3-.664.234-2.283.234L23.518,3.815A16.843,16.843,0,0,1,23.2,15.034ZM22.779,3.51,15.278,23.2h-.946a1.821,1.821,0,0,0,.11-.16c1.013-1.683,1.951-4.09,1.951-10.232,0-.511-.054-1.5-.123-2.14A16.684,16.684,0,0,1,22.779,3.51ZM7.039,9.836,11.2,6.9l4.157,2.933c.08.5.143,1.014.182,1.551L11.658,8.65a.8.8,0,0,0-.927,0L6.855,11.389c.04-.539.1-1.053.185-1.552Zm-.225,2.558L11.2,9.3,15.579,12.4c.026,1.234-.012,2.388-.076,3.362l-3.842-2.71a.8.8,0,0,0-.927,0l-3.845,2.71c-.064-.973-.1-2.116-.076-3.362Zm.148,4.291L11.2,13.7l4.233,2.987c-.044.471-.1.9-.158,1.309L11.66,15.446a.8.8,0,0,0-.927,0L7.119,17.993c-.058-.4-.112-.838-.156-1.307ZM11.2.817a17.371,17.371,0,0,1,3.949,7.891L11.66,6.253a.8.8,0,0,0-.926,0L7.249,8.712A17.394,17.394,0,0,1,11.2.817ZM8.638,22.631a10.967,10.967,0,0,1-1.367-3.764L11.2,16.1l3.926,2.77a10.967,10.967,0,0,1-1.367,3.764,1.2,1.2,0,0,1-1.02.57H9.657a1.2,1.2,0,0,1-1.022-.57Z"
              transform="translate(-3.602 -0.029)"
              fill="#fff"
            />
            <Path
              id="Shape-2"
              data-name="Shape"
              d="M.4,58.8h.8a.4.4,0,1,0,0-.8H.4a.4.4,0,1,0,0,.8Z"
              transform="translate(0 -34.829)"
              fill="#fff"
            />
            <Path
              id="Shape-3"
              data-name="Shape"
              d="M57.2,58h-.8a.4.4,0,1,0,0,.8h.8a.4.4,0,1,0,0-.8Z"
              transform="translate(-33.617 -34.829)"
              fill="#fff"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
