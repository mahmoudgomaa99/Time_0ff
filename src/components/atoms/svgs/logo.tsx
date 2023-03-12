import useSvgSize from 'hooks/useSvgSize';
import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, G, Path} from 'react-native-svg';
import {TSvgProps} from '../Svg';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({size, bgColor, txtColor, ...props}: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 113.715 77.212" {...props}>
      <Defs>
        <LinearGradient
          id="a"
          x1={-0.256}
          y1={-0.238}
          x2={1.078}
          y2={1.065}
          gradientUnits="objectBoundingBox">
          <Stop offset={0.47} stopColor="#00d7e1" />
          <Stop offset={0.76} stopColor="#2b6ec8" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={-1.107}
          y1={-1.339}
          x2={2.516}
          y2={2.808}
          gradientUnits="objectBoundingBox">
          <Stop offset={0.47} stopColor="#00d7e1" />
          <Stop offset={0.76} stopColor="#2b6ec8" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={-0.858}
          y1={-14.302}
          x2={1.721}
          y2={13.812}
          gradientUnits="objectBoundingBox">
          <Stop offset={0.47} stopColor="#00d7e1" />
          <Stop offset={0.76} stopColor="#2b6ec8" />
        </LinearGradient>
        <LinearGradient
          id="d"
          x1={-0.54}
          y1={-0.479}
          x2={1.106}
          y2={1.072}
          gradientUnits="objectBoundingBox">
          <Stop offset={0.47} stopColor="#00d7e1" />
          <Stop offset={0.76} stopColor="#2b6ec8" />
        </LinearGradient>
        <LinearGradient
          id="e"
          x1={-0.015}
          y1={-0.019}
          x2={1.055}
          y2={1.06}
          gradientUnits="objectBoundingBox">
          <Stop offset={0.47} stopColor="#00d7e1" />
          <Stop offset={0.76} stopColor="#2b6ec8" />
        </LinearGradient>
        <LinearGradient
          id="f"
          x1={-6.86}
          y1={-1.538}
          x2={17.475}
          y2={5.208}
          gradientUnits="objectBoundingBox">
          <Stop offset={0.47} stopColor="#00d7e1" />
          <Stop offset={0.76} stopColor="#2b6ec8" />
        </LinearGradient>
      </Defs>
      <G data-name="Layer 2">
        <G data-name="Layer 1">
          <Path
            data-name="Path 4814"
            d="M3.164 541.265v3.266h4.675v2.169H3.164v5.43H1v-5.43H0v-2.164h1V539.1h6.839v2.165z"
            transform="translate(0 -39.109) translate(0 39.109) translate(0 -475.072)"
            fill={txtColor}
          />
          <Path
            data-name="Path 4815"
            d="M111.645 547.868l2.34 4.258h-2.47l-2.077-3.78h-2.278v3.78h-2.165v-3.78H104v-2.164h1V539.1h4.53a4.619 4.619 0 012.6 8.433zm.336-4.147a2.473 2.473 0 00-2.457-2.457h-2.365v4.916h2.365a2.473 2.473 0 002.457-2.46z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-91.648 -475.072)"
            fill={txtColor}
          />
          <Path
            data-name="Path 4816"
            d="M240.683 544.58a6.662 6.662 0 11-6.661-6.661 6.662 6.662 0 016.661 6.661zm-2.138 0a4.524 4.524 0 10-4.523 4.524 4.524 4.524 0 004.523-4.524z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-200.357 -474.032)"
            fill={txtColor}
          />
          <Path
            data-name="Path 4817"
            d="M387.047 539.1v13.025h-1.287l-6.164-8.762v8.757h-2.166V539.1h1.77l2.34 3.195 3.34 4.774V539.1z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-332.603 -475.072)"
            fill={txtColor}
          />
          <Path
            data-name="Path 4818"
            d="M504.381 539.1v2.165h-2.969v10.86h-2.163v-10.86h-2.969V539.1z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-437.337 -475.072)"
            fill={txtColor}
          />
          <Path
            data-name="Path 4819"
            d="M602.52 552.125V539.1h2.165v13.025z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-530.959 -475.072)"
            fill={txtColor}
          />
          <Path
            data-name="Path 4820"
            d="M661.758 541.265v3.266h4.675v2.169h-4.675v3.266h4.675v2.164h-6.844v-5.43h-1v-2.164h1V539.1h6.84v2.165z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-580.37 -475.072)"
            fill={txtColor}
          />
          <Path
            data-name="Path 4821"
            d="M770.231 547.868l2.341 4.258H770.1l-2.08-3.78h-2.279v3.78h-2.161v-3.78h-1v-2.164h1V539.1h4.529a4.619 4.619 0 012.606 8.433zm.337-4.145a2.473 2.473 0 00-2.459-2.457h-2.367v4.916h2.365a2.473 2.473 0 002.459-2.461z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-672.009 -475.072)"
            fill={txtColor}
          />
          <Path
            data-name="Path 4822"
            d="M894.476 548.311a3.809 3.809 0 01-3.8 3.8H886.7v-2.167h3.974a1.645 1.645 0 001.633-1.633 1.48 1.48 0 00-.422-1.145 2.128 2.128 0 00-1.188-.441c-.493-.066-.988-.091-1.481-.173a3.635 3.635 0 01-3.23-3.671 3.81 3.81 0 013.8-3.8h3.974v2.165h-3.973a1.645 1.645 0 00-1.633 1.633 1.48 1.48 0 00.422 1.143 2.466 2.466 0 001.4.468 13.688 13.688 0 011.729.238 3.614 3.614 0 012.771 3.583z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-780.762 -475.054)"
            fill={txtColor}
          />
          <Path
            data-name="Path 4823"
            d="M364.886 117.882a1.011 1.011 0 01-.38-.075 1 1 0 01-.616-.922V75.922a1 1 0 011-1h34.31a1 1 0 110 1.992h-33.318v37.551l4.878-4.916V81.3a1 1 0 011.992 0v28.662a.993.993 0 01-.289.7l-6.87 6.924a1 1 0 01-.707.296z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-320.671 -66.026)"
            fill="url(#a)"
          />
          <Path
            data-name="Path 4824"
            d="M434.124 144.657a.989.989 0 01-.707-.3l-11.394-11.507a1 1 0 111.415-1.4l11.393 11.51a1 1 0 01-.713 1.7z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-371.646 -115.578)"
            fill="url(#b)"
          />
          <Path
            data-name="Path 4825"
            d="M439.857 230.062h-16.875a1 1 0 010-1.992h16.876a1 1 0 010 1.992z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-371.897 -200.982)"
            fill="url(#c)"
          />
          <Path
            data-name="Path 4826"
            d="M449.994 168.786h-27.5a1 1 0 010-1.992H449v-33.109a1 1 0 111.991 0v34.1a1 1 0 01-.997 1.001z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-371.465 -116.931)"
            fill="url(#d)"
          />
          <Path
            data-name="Path 4827"
            d="M297.922 51.856H288.9a1 1 0 01-1-1V1a1 1 0 01.992-1h43.343a1 1 0 011 1v8.9a1 1 0 01-1.991 0V2h-41.356v47.864h8.034a1 1 0 010 1.992z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-253.706)"
            fill="url(#e)"
          />
          <Path
            data-name="Path 4828"
            d="M422.722 86.34a1 1 0 01-1-1v-6.269a1 1 0 111.992 0v6.273a1 1 0 01-.992.996z"
            transform="translate(0 -39.109) translate(0 39.109) translate(-371.637 -68.771)"
            fill="url(#f)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
