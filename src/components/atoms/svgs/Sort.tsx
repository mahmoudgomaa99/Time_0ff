import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TSvgProps } from '..';
import useSvgSize from 'hooks/useSvgSize';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, txtColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 512.000000 512.000000" {...props}>
      <Path
        d="M3115 5101c-27-13-191-171-501-482-451-453-462-465-472-514-12-55-2-123 23-162 39-60 114-102 180-103 82 0 125 33 390 299l250 251 5-1272 5-1273 27-38c14-22 43-51 65-65 33-23 48-27 113-27s80 4 113 27c22 14 51 43 65 65l27 38 5 1273 5 1272 250-251c265-266 308-299 390-299 66 1 141 43 180 103 25 39 35 107 23 162-10 49-21 61-472 514-310 311-474 469-501 482-22 10-60 19-85 19s-63-9-85-19zM1832 3394c-44-23-85-64-106-107-15-32-16-146-16-1298V725l-257 257c-271 271-307 298-388 298-66 0-141-43-180-103-25-39-35-107-23-162 10-49 21-61 472-514 310-311 474-469 501-482 51-24 119-24 170 0 27 13 191 171 501 482 451 453 462 465 472 514 12 55 2 123-23 162-39 60-114 102-180 103-82 0-125-33-390-299l-250-251-5 1272-5 1273-27 38c-43 63-92 91-168 95-46 2-75-2-98-14z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    </Svg>
  );
}

export default SvgComponent;
