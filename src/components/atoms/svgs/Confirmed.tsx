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
    <Svg {...computedSize} viewBox="0 0 57 57" {...props}>
      <G
        id="Group_11328"
        data-name="Group 11328"
        transform="translate(-16 -120)">
        <Path
          id="Path_17129"
          data-name="Path 17129"
          d="M15,0H42A15,15,0,0,1,57,15V42A15,15,0,0,1,42,57H15A15,15,0,0,1,0,42V15A15,15,0,0,1,15,0Z"
          transform="translate(16 120)"
          fill={isDarkMode ? COLORS.iconBackDarkMode : '#b5e633'}
        />
        <G
          id="svgexport-6_5_"
          data-name="svgexport-6 (5)"
          transform="translate(28.5 132.498)">
          <G
            id="Group_11094"
            data-name="Group 11094"
            transform="translate(0 0.003)">
            <Path
              id="Path_17130"
              data-name="Path 17130"
              d="M101.187,91.06a10.149,10.149,0,1,0,10.149,10.149A10.161,10.161,0,0,0,101.187,91.06Zm0,18.453a8.3,8.3,0,1,1,8.3-8.3A8.313,8.313,0,0,1,101.187,109.513Z"
              transform="translate(-85.438 -85.459)"
              fill="#fff"
            />
            <Path
              id="Path_17131"
              data-name="Path 17131"
              d="M175.534,196.33l-4.883,4.883-3.038-3.038a.923.923,0,1,0-1.3,1.3L170,203.17a.922.922,0,0,0,1.3,0l5.536-5.536a.923.923,0,0,0-1.3-1.3Z"
              transform="translate(-155.825 -184)"
              fill="#fff"
            />
            <Path
              id="Path_17132"
              data-name="Path 17132"
              d="M30.179,9.284,26.957,7.355l-.723-2.993a2.756,2.756,0,0,0-2.9-2.11l-3.669.284L17.544.667a2.757,2.757,0,0,0-3.59,0L11.837,2.536,8.168,2.252a2.755,2.755,0,0,0-2.9,2.077L4.266,7.534,1.321,9.284A2.756,2.756,0,0,0,.212,12.7L1.467,15.74.212,18.782A2.756,2.756,0,0,0,1.321,22.2l3.217,1.917.726,3.005a2.755,2.755,0,0,0,2.685,2.119c.195,0-.024.007,3.849-.289l2.156,1.891a2.757,2.757,0,0,0,3.59,0L19.7,28.947l3.63.281a2.757,2.757,0,0,0,2.9-2.11l.723-2.993c3.94-2.358,3.1-1.856,3.222-1.929a2.757,2.757,0,0,0,1.109-3.414l-1.255-3.042L31.289,12.7a2.756,2.756,0,0,0-1.109-3.414Zm-2,6.808,1.4,3.394a.919.919,0,0,1-.366,1.136l-3.54,2.119a.923.923,0,0,0-.423.575l-.814,3.369a.918.918,0,0,1-.968.7l-4.018-.311a.923.923,0,0,0-.68.226l-2.432,2.134a.919.919,0,0,1-1.188,0L12.723,27.3a.923.923,0,0,0-.68-.226l-4.018.311a.919.919,0,0,1-.968-.7L6.241,23.3a.923.923,0,0,0-.425-.576L2.283,20.621a.919.919,0,0,1-.365-1.135l1.4-3.394a.922.922,0,0,0,0-.7l-1.4-3.394a.919.919,0,0,1,.365-1.135L5.512,8.94a.923.923,0,0,0,.409-.517c1.19-3.794,1.123-3.572,1.137-3.629a.918.918,0,0,1,.968-.7l4.058.314a.923.923,0,0,0,.682-.228l2.391-2.11a.919.919,0,0,1,1.186,0l2.391,2.11a.923.923,0,0,0,.682.228l4.058-.314a.919.919,0,0,1,.968.7l.814,3.369a.923.923,0,0,0,.423.575l3.54,2.119a.919.919,0,0,1,.366,1.136l-1.4,3.394a.923.923,0,0,0,0,.7Z"
              transform="translate(0 -0.003)"
              fill="#fff"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
