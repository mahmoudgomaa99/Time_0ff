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
        id="Group_11021"
        data-name="Group 11021"
        transform="translate(-26 -343)">
        <G id="Group_10852" data-name="Group 10852" transform="translate(-242)">
          <G id="item" transform="translate(49.5)">
            <Rect
              id="Rectangle_102"
              data-name="Rectangle 102"
              width="40"
              height="40"
              rx="10"
              transform="translate(218.5 343)"
              fill={isDarkMode ? COLORS.iconBackDarkMode : '#ece03c'}
            />
          </G>
        </G>
        <G
          id="svgexport-6_3_"
          data-name="svgexport-6 (3)"
          transform="translate(8.168 349.671)">
          <G
            id="Group_11035"
            data-name="Group 11035"
            transform="translate(27.832 0)">
            <G
              id="Group_11034"
              data-name="Group 11034"
              transform="translate(0 0)">
              <G id="Group_11031" data-name="Group 11031">
                <G
                  id="Group_11024"
                  data-name="Group 11024"
                  transform="translate(2.523 24.018)">
                  <G id="Group_11022" data-name="Group 11022">
                    <Path
                      id="Path_17091"
                      data-name="Path 17091"
                      d="M75.7,437.516h-.683a1.581,1.581,0,0,1-1.577-1.577v-1.209a.526.526,0,0,1,1.051,0v1.209a.527.527,0,0,0,.526.526H75.7a.527.527,0,0,0,.526-.526v-1.209a.526.526,0,0,1,1.051,0v1.209A1.581,1.581,0,0,1,75.7,437.516Z"
                      transform="translate(-73.437 -434.205)"
                      fill="#fff"
                    />
                  </G>
                  <G
                    id="Group_11023"
                    data-name="Group 11023"
                    transform="translate(9.197)">
                    <Path
                      id="Path_17092"
                      data-name="Path 17092"
                      d="M241.968,437.516h-.683a1.581,1.581,0,0,1-1.577-1.577v-1.209a.526.526,0,0,1,1.051,0v1.209a.527.527,0,0,0,.526.526h.683a.527.527,0,0,0,.526-.526v-1.209a.526.526,0,0,1,1.051,0v1.209A1.581,1.581,0,0,1,241.968,437.516Z"
                      transform="translate(-239.708 -434.205)"
                      fill="#fff"
                    />
                  </G>
                </G>
                <G
                  id="Group_11025"
                  data-name="Group 11025"
                  transform="translate(5.939 2.102)">
                  <Path
                    id="Path_17093"
                    data-name="Path 17093"
                    d="M140.819,44.68a.5.5,0,0,1-.526-.526v-5.1h-4.047v5.1a.526.526,0,1,1-1.051,0V38.531a.5.5,0,0,1,.526-.526h5.1a.5.5,0,0,1,.526.526v5.623A.527.527,0,0,1,140.819,44.68Z"
                    transform="translate(-135.196 -38.005)"
                    fill="#fff"
                  />
                </G>
                <G
                  id="Group_11026"
                  data-name="Group 11026"
                  transform="translate(3.574)">
                  <Path
                    id="Path_17094"
                    data-name="Path 17094"
                    d="M102.794,8.777a.5.5,0,0,1-.526-.526V1.682a.719.719,0,0,0-.788-.631h-7.2a.719.719,0,0,0-.788.631V8.251a.526.526,0,1,1-1.051,0V1.682A1.766,1.766,0,0,1,94.279,0h7.2a1.766,1.766,0,0,1,1.839,1.682V8.251A.527.527,0,0,1,102.794,8.777Z"
                    transform="translate(-92.44 0)"
                    fill="#fff"
                  />
                </G>
                <G
                  id="Group_11027"
                  data-name="Group 11027"
                  transform="translate(0 7.726)">
                  <Path
                    id="Path_17095"
                    data-name="Path 17095"
                    d="M42.916,157.011H30.775a2.938,2.938,0,0,1-2.943-2.943V142.611a2.938,2.938,0,0,1,2.943-2.943h12.14a2.938,2.938,0,0,1,2.943,2.943v11.457A2.938,2.938,0,0,1,42.916,157.011Zm-12.14-16.292a1.884,1.884,0,0,0-1.892,1.892v11.457a1.884,1.884,0,0,0,1.892,1.892h12.14a1.884,1.884,0,0,0,1.892-1.892V142.611a1.884,1.884,0,0,0-1.892-1.892H30.775Z"
                    transform="translate(-27.832 -139.668)"
                    fill="#fff"
                  />
                </G>
                <G
                  id="Group_11028"
                  data-name="Group 11028"
                  transform="translate(3.311 15.714)">
                  <Path
                    id="Path_17096"
                    data-name="Path 17096"
                    d="M97.15,290.6H89.635a1.94,1.94,0,0,1-1.945-1.945v-2.628a1.94,1.94,0,0,1,1.945-1.945H97.15a1.94,1.94,0,0,1,1.945,1.945v2.628A1.94,1.94,0,0,1,97.15,290.6Zm-7.515-5.413a.886.886,0,0,0-.893.893v2.628a.886.886,0,0,0,.893.893H97.15a.886.886,0,0,0,.893-.893v-2.628a.886.886,0,0,0-.893-.893Z"
                    transform="translate(-87.69 -284.087)"
                    fill="#fff"
                  />
                </G>
                <G
                  id="Group_11029"
                  data-name="Group 11029"
                  transform="translate(5.571 17.922)">
                  <Path
                    id="Path_17097"
                    data-name="Path 17097"
                    d="M134.9,325.043h-5.834a.526.526,0,0,1,0-1.051h5.886a.5.5,0,0,1,.526.526A.54.54,0,0,1,134.9,325.043Z"
                    transform="translate(-128.545 -323.992)"
                    fill="#fff"
                  />
                </G>
                <G
                  id="Group_11030"
                  data-name="Group 11030"
                  transform="translate(3.206 10.721)">
                  <Path
                    id="Path_17098"
                    data-name="Path 17098"
                    d="M95.722,197.188H87.471a1.693,1.693,0,0,1-1.682-1.682,1.66,1.66,0,0,1,1.682-1.682h8.2a1.693,1.693,0,0,1,1.682,1.682,1.649,1.649,0,0,1-1.629,1.682Zm-8.251-2.26a.639.639,0,0,0-.631.631.607.607,0,0,0,.631.631h8.2a.639.639,0,0,0,.631-.631.607.607,0,0,0-.631-.631Z"
                    transform="translate(-85.789 -193.824)"
                    fill="#fff"
                  />
                </G>
              </G>
              <G
                id="Group_11032"
                data-name="Group 11032"
                transform="translate(16.335 8.504)">
                <Path
                  id="Path_17099"
                  data-name="Path 17099"
                  d="M325.933,155.377h-.158l-2.26-.631a.516.516,0,1,1,.263-1l2.26.631a.54.54,0,0,1,.368.631A.5.5,0,0,1,325.933,155.377Z"
                  transform="translate(-323.138 -153.738)"
                  fill="#fff"
                />
              </G>
              <G
                id="Group_11033"
                data-name="Group 11033"
                transform="translate(18.595 8.703)">
                <Path
                  id="Path_17100"
                  data-name="Path 17100"
                  d="M367.785,162.342a.4.4,0,0,1-.263-.105l-3-1.839a.443.443,0,0,1-.21-.368L364,158.348a.484.484,0,0,1,.368-.578l1.682-.42a.558.558,0,0,1,.42.053l2.943,1.892a.432.432,0,0,1,.21.315.593.593,0,0,1-.053.42l-1.366,2.05a.432.432,0,0,1-.315.21A.163.163,0,0,1,367.785,162.342Zm-2.47-2.733,2.312,1.472.788-1.261-2.312-1.472-1,.263Z"
                  transform="translate(-363.991 -157.327)"
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
