const COLORS = {
  initialBackGround: "#000111",
  black: "#000",
  white: "#fff",
  orange: "#FF7301",
  pink: "#FFE3CC",
  errorRed: "#F23005",
  green: "#0DD98B",
  // app colors
  primary: "#fff",
  secondery: "#000",
  //
  alfaBlack: "rgba(0, 0, 0, 0.8)",
  lightGrey: "#DDDDDD",
  red: "#ff0000",
  grey: "#B4B4B4",
};

export default COLORS;

export type TThemeColor = keyof typeof COLORS;
