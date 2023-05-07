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
    <Svg {...computedSize} viewBox="0 0 187 187" {...props}>
      <G id="menu" transform="translate(75 72)">
        <G id="Group_10950" data-name="Group 10950">
          <G transform="matrix(1, 0, 0, 1, -75, -72)" filter="url(#Path_17071)">
            <Path
              id="Path_17071-2"
              data-name="Path 17071"
              d="M18.5,0A18.5,18.5,0,1,1,0,18.5,18.5,18.5,0,0,1,18.5,0Z"
              transform="translate(75 72)"
              fill="#fff"
            />
          </G>
          <G id="notfication" transform="translate(12.235 10.634)">
            <Path
              id="Path_15011"
              data-name="Path 15011"
              d="M11.475,11.84v-4.9A5.4,5.4,0,0,0,7.6,1.718V1.369A1.352,1.352,0,0,0,6.272,0H6.255A1.352,1.352,0,0,0,4.925,1.369v.322A5.4,5.4,0,0,0,.954,6.938V11.9A2.034,2.034,0,0,0,0,13.618a.312.312,0,0,0,.087.217.294.294,0,0,0,.211.09H4.682V14.1a1.582,1.582,0,1,0,3.163,0v-.179H12.23a.3.3,0,0,0,.3-.307,2.037,2.037,0,0,0-1.054-1.778ZM5.522,1.526V1.369A.745.745,0,0,1,6.255.614h.016a.745.745,0,0,1,.734.755v.157ZM7.248,14.1a.985.985,0,1,1-1.968,0v-.179H7.248Zm.3-.794H.631a1.412,1.412,0,0,1,.7-.925H6.906a.307.307,0,0,0,0-.615H1.552V6.938a4.737,4.737,0,0,1,4.663-4.8,4.737,4.737,0,0,1,4.663,4.8v5.1a.307.307,0,0,0,.188.286,1.41,1.41,0,0,1,.831.989H7.547Zm0,0"
              transform="translate(0.001 0)"
              fill="none"
            />
            <Path
              id="Path_15012"
              data-name="Path 15012"
              d="M260.108,383.121a.346.346,0,1,0,.245.1A.349.349,0,0,0,260.108,383.121Zm0,0"
              transform="translate(-252.066 -371.41)"
              fill="none"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
