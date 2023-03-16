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
    <Svg {...computedSize} viewBox="0 0 23.354 23.354" {...props}>
      <G id="Group_10994" data-name="Group 10994" transform="translate(0 0)">
        <Path
          id="Path_17062"
          data-name="Path 17062"
          d="M53.929,302.388A11.547,11.547,0,0,1,36.4,299.419l.758-3.5,3.361-.624a6.2,6.2,0,0,0,5.9,4.365,6.07,6.07,0,0,0,3.613-1.177l3.229.493Z"
          transform="translate(-34.74 -281.83)"
          fill="#59c36a"
        />
        <Path
          id="Path_17063"
          data-name="Path 17063"
          d="M263.513,369.1l-.671-3.407-3.229-.493A6.07,6.07,0,0,1,256,366.377V371.9A11.659,11.659,0,0,0,263.513,369.1Z"
          transform="translate(-244.323 -348.542)"
          fill="#00a66c"
        />
        <G id="Connected_Home_1_" transform="translate(0 5.766)">
          <G id="Group_10993" data-name="Group 10993">
            <G id="Group_10992" data-name="Group 10992">
              <G id="Group_10991" data-name="Group 10991">
                <Path
                  id="Path_17064"
                  data-name="Path 17064"
                  d="M5.519,132.311a6.377,6.377,0,0,0,.26,1.793L1.66,138.223a11.354,11.354,0,0,1,0-11.823l3.306.569.813,3.55a6.376,6.376,0,0,0-.26,1.793Z"
                  transform="translate(0 -126.4)"
                  fill="#ffda2d"
                />
              </G>
            </G>
          </G>
        </G>
        <Path
          id="Path_17065"
          data-name="Path 17065"
          d="M253.361,198.737a11.659,11.659,0,0,1-4.164,8.881l-3.9-3.9a6.055,6.055,0,0,0,1.9-2.244h-5.515a.678.678,0,0,1-.684-.684v-4.105a.678.678,0,0,1,.684-.684h10.8a.676.676,0,0,1,.671.561A11.6,11.6,0,0,1,253.361,198.737Z"
          transform="translate(-230.007 -187.06)"
          fill="#4086f4"
        />
        <Path
          id="Path_17066"
          data-name="Path 17066"
          d="M261.515,201.474a6.056,6.056,0,0,1-1.9,2.244l3.9,3.9a11.565,11.565,0,0,0,3.959-11.057A.676.676,0,0,0,266.8,196H256v5.474Z"
          transform="translate(-244.323 -187.06)"
          fill="#4175df"
        />
        <Path
          id="Path_17067"
          data-name="Path 17067"
          d="M54.121,3.261a.69.69,0,0,1-.192.506L51,6.682a.67.67,0,0,1-.889.068,6.121,6.121,0,0,0-3.695-1.232,6.2,6.2,0,0,0-5.9,4.365L36.4,5.766A11.54,11.54,0,0,1,53.875,2.755a.72.72,0,0,1,.246.506Z"
          transform="translate(-34.74 0)"
          fill="#ff641a"
        />
        <Path
          id="Path_17068"
          data-name="Path 17068"
          d="M259.695,6.751a.67.67,0,0,0,.889-.068l2.928-2.915a.69.69,0,0,0,.192-.506.72.72,0,0,0-.246-.506A11.642,11.642,0,0,0,256,0V5.519A6.121,6.121,0,0,1,259.695,6.751Z"
          transform="translate(-244.323 0)"
          fill="#f03800"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;

