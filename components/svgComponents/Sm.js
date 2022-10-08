import React from "react";
import Svg, {
  Defs,
  Ellipse,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgSm = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SM_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SM_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#7CCCF5" />
        <Stop offset="100%" stopColor="#62B7E3" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SM_svg__a)" />
      <Path d="M0 7h21v8H0z" fill="url(#SM_svg__b)" />
      <Path d="M0 0h21v7H0z" fill="url(#SM_svg__a)" />
      <Path
        d="M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 0 0 .502-.865A1.499 1.499 0 0 1 9 7a.5.5 0 0 0-1 0zm3.846 2.107A2.498 2.498 0 0 0 13 7a.5.5 0 1 0-1 0c0 .518-.264.99-.693 1.265a.5.5 0 1 0 .539.842z"
        fill="#445F42"
        fillRule="nonzero"
      />
      <Ellipse cx={10.5} cy={6.5} fill="#D89F3D" rx={1} ry={1.5} />
    </G>
  </Svg>
);

export default SvgSm;
