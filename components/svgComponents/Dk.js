import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgDk = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="DK_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="DK_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EF264D" />
        <Stop offset="100%" stopColor="#E1143C" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#DK_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#DK_svg__b)" />
      <Path d="M0 9h6v6h3V9h12V6H9V0H6v6H0z" fill="url(#DK_svg__a)" />
    </G>
  </Svg>
);

export default SvgDk;
