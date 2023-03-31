const COLORS = {
  initialBackGround: '#000111',
  black: '#000',
  white: '#fff',
  orange: '#FF7301',
  pink: '#FFE3CC',
  errorRed: '#F23005',
  green: '#0DD98B',
  // app colors
  primary: '#1F1FEC',
  secondery: '#000',
  //
  alfaBlack: 'rgba(192,192,192, 0.65)',
  alfaBlack2: 'rgba(192,192,192, 0.4)',

  lightGrey: '#F2F2F2',
  red: '#ff0000',
  grey: '#B4B4B4',
  blue: '#0081DF',
  darkBlue: '#1F1FEC',
};

export default COLORS;

export type TThemeColor = keyof typeof COLORS;
