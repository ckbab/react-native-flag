import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgPl = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="PL_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="PL_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EB2A50" />
        <Stop offset="100%" stopColor="#DA1B40" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#PL_svg__a)" />
      <Path d="M0 7h21v8H0z" fill="url(#PL_svg__b)" />
      <Path d="M0 0h21v7H0z" fill="url(#PL_svg__a)" />
    </G>
  </Svg>
);

export default SvgPl;
