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
    <Svg {...computedSize} viewBox="0 0 57 57" {...props}>
      <G
        id="Group_11329"
        data-name="Group 11329"
        transform="translate(-16 -120)">
        <Path
          id="Path_17129"
          data-name="Path 17129"
          d="M15,0H42A15,15,0,0,1,57,15V42A15,15,0,0,1,42,57H15A15,15,0,0,1,0,42V15A15,15,0,0,1,15,0Z"
          transform="translate(16 120)"
          fill="#0370d6"
        />
        <G id="travels" transform="translate(26.75 124.552)">
          <G
            id="Group_11096"
            data-name="Group 11096"
            transform="translate(4.859 36.048)">
            <G id="Group_11095" data-name="Group 11095">
              <Path
                id="Path_17133"
                data-name="Path 17133"
                d="M54.627,322.967l-.036-.03c-.37-.307-.739-.636-1.08-.976a.553.553,0,1,0-.78.784,14.136,14.136,0,0,0,1.153,1.046.555.555,0,1,0,.742-.824Z"
                transform="translate(-52.569 -321.801)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11098"
            data-name="Group 11098"
            transform="translate(0.114 20.742)">
            <G id="Group_11097" data-name="Group 11097">
              <Path
                id="Path_17134"
                data-name="Path 17134"
                d="M2.231,156.228a.555.555,0,0,0-.735.473c-.111.506-.2,1.02-.259,1.534a.555.555,0,0,0,.47.621h.07a.554.554,0,0,0,.551-.488c.059-.481.14-.965.244-1.434A.554.554,0,0,0,2.231,156.228Z"
                transform="translate(-1.232 -156.197)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11100"
            data-name="Group 11100"
            transform="translate(2.324 32.791)">
            <G id="Group_11099" data-name="Group 11099">
              <Path
                id="Path_17135"
                data-name="Path 17135"
                d="M26.985,288.046c-.285-.392-.555-.8-.8-1.213a.555.555,0,0,0-.76-.193h0a.555.555,0,0,0-.193.76h0c.266.444.555.88.861,1.3a.555.555,0,0,0,.895-.654Z"
                transform="translate(-25.15 -286.562)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11102"
            data-name="Group 11102"
            transform="translate(0.654 29.002)">
            <G id="Group_11101" data-name="Group 11101">
              <Path
                id="Path_17136"
                data-name="Path 17136"
                d="M8.648,247.341c-.177-.447-.34-.909-.477-1.375a.555.555,0,0,0-.687-.378l-.015,0a.555.555,0,0,0-.37.688c.148.5.318.991.51,1.479a.56.56,0,0,0,1.039-.418Z"
                transform="translate(-7.076 -245.566)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11104"
            data-name="Group 11104"
            transform="translate(1.138 16.912)">
            <G
              id="Group_11103"
              data-name="Group 11103"
              transform="translate(0 0)">
              <Path
                id="Path_17137"
                data-name="Path 17137"
                d="M13.728,114.813a.555.555,0,0,0-.745.246c-.233.462-.447.939-.636,1.423a.554.554,0,0,0,1.03.406v0a13.335,13.335,0,0,1,.6-1.327A.555.555,0,0,0,13.728,114.813Z"
                transform="translate(-12.309 -114.753)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11106"
            data-name="Group 11106"
            transform="translate(0 24.934)">
            <G
              id="Group_11105"
              data-name="Group 11105"
              transform="translate(0)">
              <Path
                id="Path_17138"
                data-name="Path 17138"
                d="M1.228,203.538h0c-.059-.481-.1-.969-.118-1.449A.555.555,0,0,0,0,202.128a12.154,12.154,0,0,0,.126,1.553.554.554,0,0,0,.536.477H.747A.555.555,0,0,0,1.228,203.538Z"
                transform="translate(0 -201.553)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11108"
            data-name="Group 11108"
            transform="translate(13.285 7.916)">
            <G
              id="Group_11107"
              data-name="Group 11107"
              transform="translate(0 0)">
              <Path
                id="Path_17139"
                data-name="Path 17139"
                d="M146.393,17.931a.557.557,0,0,0-.608-.5c-.514.052-1.031.126-1.542.226a.557.557,0,1,0,.1,1.109l0-.015h.107c.477-.092.961-.163,1.442-.211A.557.557,0,0,0,146.393,17.931Z"
                transform="translate(-143.738 -17.428)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11110"
            data-name="Group 11110"
            transform="translate(3.104 13.476)">
            <G
              id="Group_11109"
              data-name="Group 11109"
              transform="translate(0 0)">
              <Path
                id="Path_17140"
                data-name="Path 17140"
                d="M35.444,77.72a.558.558,0,0,0-.787.048c-.34.388-.665.8-.969,1.22a.555.555,0,0,0,.447.88v.007a.554.554,0,0,0,.451-.229c.285-.392.588-.776.906-1.139A.558.558,0,0,0,35.444,77.72Z"
                transform="translate(-33.582 -77.58)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11112"
            data-name="Group 11112"
            transform="translate(17.456 7.848)">
            <G
              id="Group_11111"
              data-name="Group 11111"
              transform="translate(0 0)">
              <Path
                id="Path_17141"
                data-name="Path 17141"
                d="M191.011,16.849c-.51-.078-1.031-.133-1.549-.163A.556.556,0,1,0,189.4,17.8c.488.037.972.089,1.449.163h.085a.556.556,0,0,0,.081-1.109Z"
                transform="translate(-188.873 -16.685)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11114"
            data-name="Group 11114"
            transform="translate(5.926 10.748)">
            <G id="Group_11113" data-name="Group 11113">
              <Path
                id="Path_17142"
                data-name="Path 17142"
                d="M66.305,48.29a.555.555,0,0,0-.746-.138c-.425.292-.843.61-1.242.939a.555.555,0,1,0,.71.854c.37-.311.762-.606,1.161-.88A.555.555,0,0,0,66.305,48.29Z"
                transform="translate(-64.116 -48.064)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11117"
            data-name="Group 11117"
            transform="translate(9.417 8.818)">
            <G
              id="Group_11116"
              data-name="Group 11116"
              transform="translate(0 0)">
              <G id="Group_11115" data-name="Group 11115">
                <Path
                  id="Path_17143"
                  data-name="Path 17143"
                  d="M107.815,45.652h0Z"
                  transform="translate(-107.258 -43.946)"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="0.3"
                />
                <Path
                  id="Path_17144"
                  data-name="Path 17144"
                  d="M104.405,27.6a.555.555,0,0,0-.758-.361,13.856,13.856,0,0,0-1.434.6.552.552,0,1,0,.462,1c.436-.207.887-.4,1.342-.562A.555.555,0,0,0,104.405,27.6Z"
                  transform="translate(-101.892 -27.189)"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="0.3"
                />
              </G>
            </G>
          </G>
          <G
            id="Group_11119"
            data-name="Group 11119"
            transform="translate(16.019 40.784)">
            <G id="Group_11118" data-name="Group 11118">
              <Path
                id="Path_17145"
                data-name="Path 17145"
                d="M175.938,373.564a.556.556,0,0,0-.59-.519,13.693,13.693,0,0,1-1.457.033.555.555,0,1,0-.03,1.109h.47c.37,0,.739,0,1.087-.033A.556.556,0,0,0,175.938,373.564Z"
                transform="translate(-173.322 -373.044)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11121"
            data-name="Group 11121"
            transform="translate(32.02 28.44)">
            <G
              id="Group_11120"
              data-name="Group 11120"
              transform="translate(0 0)">
              <Path
                id="Path_17146"
                data-name="Path 17146"
                d="M347.577,239.507a.555.555,0,0,0-.675.4c-.118.47-.262.935-.425,1.39a.554.554,0,0,0,1.046.364v0c.174-.488.325-.987.455-1.479A.555.555,0,0,0,347.577,239.507Z"
                transform="translate(-346.447 -239.489)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11123"
            data-name="Group 11123"
            transform="translate(32.45 20.19)">
            <G id="Group_11122" data-name="Group 11122">
              <Path
                id="Path_17147"
                data-name="Path 17147"
                d="M352.507,152.147c-.085-.51-.192-1.024-.322-1.523a.555.555,0,0,0-1.072.281c.122.466.222.946.3,1.423a.555.555,0,0,0,.54.455h.092A.554.554,0,0,0,352.507,152.147Z"
                transform="translate(-351.099 -150.23)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11125"
            data-name="Group 11125"
            transform="translate(3.953 6.948)">
            <G
              id="Group_11124"
              data-name="Group 11124"
              transform="translate(0 0)">
              <Path
                id="Path_17148"
                data-name="Path 17148"
                d="M75.036,15.743a.538.538,0,0,0-.105-.153l-.98-1.02a.536.536,0,0,0-.536-.133l-1.767.536-2.07-2.2,4.647-2.588a.54.54,0,0,0,.159-.869L73.078,8.015a.54.54,0,0,0-.536-.126L66.653,9.671l-1.982-2.1a1.793,1.793,0,0,0-2.041-.484H62.6A2.181,2.181,0,0,0,61.411,8.27a2,2,0,0,0-.118.436l-.226-.078a.555.555,0,1,0-.34,1.057c.285.092.569.2.854.3a2.129,2.129,0,0,0,.3.37l2.089,1.982-.6,1.978a13.028,13.028,0,1,0,2.754,2.654l.946-1.708,2.2,2.07-.529,1.749a.536.536,0,0,0,.129.547s1.083,1.072,1.109,1.109a.536.536,0,0,0,.733-.195l.007-.012,1.446-2.651,2.61-1.423A.54.54,0,0,0,75.036,15.743Zm-27.6.731A11.871,11.871,0,0,1,55.836,13q.37,0,.739.022c2.1,1.934,1.479,3.7.074,5.287a25.951,25.951,0,0,1-2.662,2.455,11.682,11.682,0,0,0-3.117,3.327c-.569,1.287-.152,2.451,2.148,3.468a6.044,6.044,0,0,1,2.019,1.205l.011.01-.026.008a4.6,4.6,0,0,1-1.745.3c-2.788.118-4.773-1.664-6.314-3.043-1.109-.987-2.03-1.808-2.987-1.815A11.871,11.871,0,0,1,47.432,16.474ZM67.762,24.9h0a11.919,11.919,0,0,1-8.211,11.324A3.878,3.878,0,0,1,60.01,33.7a9.166,9.166,0,0,1,2.218-2.44c3.412-2.847,3.6-4.436,3.752-5.66.092-.773.163-1.349,1.69-2.189A12.045,12.045,0,0,1,67.762,24.9Zm-.688-4a11.8,11.8,0,0,1,.407,1.423c-2.325,1.183-2.429,2.026-2.569,3.176-.126,1.035-.288,2.388-3.372,4.961A10.112,10.112,0,0,0,59.063,33.2a4.9,4.9,0,0,0-.555,3.3A11.912,11.912,0,0,1,43.95,25.313c.588,0,1.349.7,2.285,1.531,1.693,1.512,3.86,3.442,7.087,3.327a5.545,5.545,0,0,0,2.218-.421,1.109,1.109,0,0,0,.614-.7,1.057,1.057,0,0,0-.266-.965,6.905,6.905,0,0,0-2.418-1.512c-1.564-.691-1.9-1.364-1.6-2.052A11.5,11.5,0,0,1,54.7,21.568a26.911,26.911,0,0,0,2.776-2.588c1.545-1.76,2.34-3.679.769-5.778a11.83,11.83,0,0,1,4.806,2.185l-.85,2.806a.54.54,0,0,0,.129.547s1.379,1.368,1.423,1.394a.536.536,0,0,0,.733-.195l.007-.012,1.076-1.945A11.887,11.887,0,0,1,67.074,20.9Zm4.958-4.13L71.555,17a.532.532,0,0,0-.244.248l-.237.481-.921,1.664-.27-.3.536-1.771a.536.536,0,0,0-.174-.569L67.33,14.012a.536.536,0,0,0-.758.007l-.015.015C66.52,14.074,63.9,18.8,63.9,18.8l-.573-.573,1.789-5.9a.536.536,0,0,0-.174-.573L62.616,9.575a.769.769,0,0,1-.211-.887,1.161,1.161,0,0,1,.6-.6h.018a.769.769,0,0,1,.865.222l2.218,2.344a.536.536,0,0,0,.547.148l5.915-1.786.573.573-4.7,2.58a.536.536,0,0,0-.214.727l.007.012c.022.041,2.85,3.05,2.85,3.05a.536.536,0,0,0,.547.144l1.778-.536.277.277Z"
                transform="translate(-42.775 -6.948)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11127"
            data-name="Group 11127"
            transform="translate(30.155 32.278)">
            <G
              id="Group_11126"
              data-name="Group 11126"
              transform="translate(0 0)">
              <Path
                id="Path_17149"
                data-name="Path 17149"
                d="M327.9,281.09l-.025-.014a.555.555,0,0,0-.739.218c-.233.425-.488.843-.762,1.242a.556.556,0,1,0,.909.64c.288-.429.562-.876.813-1.327A.554.554,0,0,0,327.9,281.09Z"
                transform="translate(-326.269 -281.013)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11129"
            data-name="Group 11129"
            transform="translate(32.905 24.26)">
            <G id="Group_11128" data-name="Group 11128">
              <Path
                id="Path_17150"
                data-name="Path 17150"
                d="M356.65,194.255a.555.555,0,0,0-.562.547c0,.007,0,.015,0,.022v.063c0,.484-.022.972-.067,1.457a.555.555,0,0,0,.5.6h.053a.554.554,0,0,0,.558-.514c.048-.514.07-1.035.07-1.553v-.074A.555.555,0,0,0,356.65,194.255Z"
                transform="translate(-356.019 -194.255)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11131"
            data-name="Group 11131"
            transform="translate(11.905 40.184)">
            <G id="Group_11130" data-name="Group 11130">
              <Path
                id="Path_17151"
                data-name="Path 17151"
                d="M130.97,366.912a11.456,11.456,0,0,1-1.42-.325.555.555,0,1,0-.368,1.046.561.561,0,0,0,.065.018c.5.141,1.006.262,1.516.37h.1a.557.557,0,0,0,.1-1.109Z"
                transform="translate(-128.811 -366.555)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11133"
            data-name="Group 11133"
            transform="translate(20.137 40.01)">
            <G id="Group_11132" data-name="Group 11132">
              <Path
                id="Path_17152"
                data-name="Path 17152"
                d="M220.383,365.028a.555.555,0,0,0-.673-.342v.015a11.02,11.02,0,0,1-1.4.37.555.555,0,0,0,.244,1.083c.5-.115,1.009-.255,1.5-.414A.555.555,0,0,0,220.383,365.028Z"
                transform="translate(-217.876 -364.665)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11135"
            data-name="Group 11135"
            transform="translate(8.133 38.564)">
            <G id="Group_11134" data-name="Group 11134">
              <Path
                id="Path_17153"
                data-name="Path 17153"
                d="M90.123,349.8c-.44-.218-.872-.455-1.29-.691a.555.555,0,1,0-.562.958c.447.262.909.506,1.379.739a.556.556,0,0,0,.473-1.006Z"
                transform="translate(-87.997 -349.029)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11137"
            data-name="Group 11137"
            transform="translate(27.428 35.62)">
            <G id="Group_11136" data-name="Group 11136">
              <Path
                id="Path_17154"
                data-name="Path 17154"
                d="M298.757,317.316a.555.555,0,0,0-.774.026h0a13.478,13.478,0,0,1-1.043,1.017.555.555,0,1,0,.739.828c.37-.344.762-.71,1.109-1.087A.555.555,0,0,0,298.757,317.316Z"
                transform="translate(-296.758 -317.171)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
          <G
            id="Group_11139"
            data-name="Group 11139"
            transform="translate(24.017 38.261)">
            <G id="Group_11138" data-name="Group 11138">
              <Path
                id="Path_17155"
                data-name="Path 17155"
                d="M262.21,346.016a.555.555,0,0,0-.761-.191l-.026.017v-.015c-.407.259-.832.5-1.261.739a.555.555,0,1,0,.507.987c.458-.237.913-.5,1.349-.776A.555.555,0,0,0,262.21,346.016Z"
                transform="translate(-259.861 -345.746)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.3"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
