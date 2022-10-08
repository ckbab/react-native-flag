import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgGt = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GT_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GT_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#63AEE3" />
        <Stop offset="100%" stopColor="#4998D0" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GT_svg__a)" />
      <Path d="M10 0h11v15H10zM0 0h7v15H0z" fill="url(#GT_svg__b)" />
      <Path d="M7 0h7v15H7z" fill="url(#GT_svg__a)" />
      <Path
        d="M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 0 0 .502-.865A1.499 1.499 0 0 1 9 7a.5.5 0 0 0-1 0zm3.846 2.107A2.498 2.498 0 0 0 13 7a.5.5 0 1 0-1 0c0 .518-.264.99-.693 1.265a.5.5 0 1 0 .539.842z"
        fill="#628A40"
        fillRule="nonzero"
      />
      <Circle cx={10.5} cy={7} fill="#DCC26D" r={1} />
    </G>
  </Svg>
);

export default SvgGt;
