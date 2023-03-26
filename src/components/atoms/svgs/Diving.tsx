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
        id="Group_10852"
        data-name="Group 10852"
        transform="translate(-260 -343)">
        <G id="item" transform="translate(49.5)">
          <Rect
            id="Rectangle_102"
            data-name="Rectangle 102"
            width="40"
            height="40"
            rx="10"
            transform="translate(210.5 343)"
            fill="#2494fc"
          />
          <G id="diving" transform="translate(208.15 352)">
            <G id="_x32_1_Diving_Goggles" transform="translate(11.86)">
              <G
                id="Group_11015"
                data-name="Group 11015"
                transform="translate(0)">
                <Path
                  id="Path_17075"
                  data-name="Path 17075"
                  d="M26.918,5.143H17.6a5.689,5.689,0,0,0-1.71.262V1.379a1.381,1.381,0,0,0-2.763,0v5.9A5.788,5.788,0,0,0,11.9,11.554a5.644,5.644,0,0,0,1.233,2.918v1.173a5.416,5.416,0,0,0,3.738,5.161l1.517.494a1.439,1.439,0,0,0,1.233.7h2.1a1.44,1.44,0,0,0,1.439-1.439V19.345a1.436,1.436,0,0,0-1.439-1.435h-2.1a1.431,1.431,0,0,0-1.113.524l-.778-.254A2.644,2.644,0,0,1,16,16.4a5.614,5.614,0,0,0,.718.163,5.733,5.733,0,0,0,4.409-1.143,2.052,2.052,0,0,1,2.5.047,5.75,5.75,0,0,0,9.213-4.684A5.859,5.859,0,0,0,26.918,5.143ZM19.1,19.246a.526.526,0,0,1,.511-.421h2.1a.523.523,0,0,1,.524.52v1.216a.524.524,0,0,1-.524.524h-2.1a.525.525,0,0,1-.486-.331A12.147,12.147,0,0,1,19.1,19.246ZM14.049,1.379a.464.464,0,0,1,.928,0v4.4a5.882,5.882,0,0,0-.928.6Zm3.39,17.673.739.245v.971l-1.023-.331a4.5,4.5,0,0,1-3.107-4.288v-.266a5.963,5.963,0,0,0,.945.619,3.575,3.575,0,0,0,2.445,3.051Zm9.655-3.339a4.776,4.776,0,0,1-2.913-.975,2.973,2.973,0,0,0-3.614-.039A4.828,4.828,0,1,1,17.6,6.059h9.316a4.94,4.94,0,0,1,5,4.739A4.825,4.825,0,0,1,27.094,15.714Z"
                  transform="translate(-11.86)"
                  fill="#fff"
                />
                <Path
                  id="Path_17076"
                  data-name="Path 17076"
                  d="M67.914,162.6H58.6a3.9,3.9,0,1,0,2.393,6.978,3.894,3.894,0,0,1,4.744.03,3.906,3.906,0,0,0,6.256-3.184,4.012,4.012,0,0,0-4.078-3.824Zm.176,6.884a2.976,2.976,0,0,1-1.8-.6,4.8,4.8,0,0,0-5.861-.026A2.982,2.982,0,1,1,58.6,163.52h9.316a3.088,3.088,0,0,1,3.158,2.93A2.987,2.987,0,0,1,68.09,169.484Z"
                  transform="translate(-52.856 -155.613)"
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
