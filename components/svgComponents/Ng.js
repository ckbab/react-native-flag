import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgNg = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="NG_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="NG_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#189B62" />
        <Stop offset="100%" stopColor="#118653" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#NG_svg__a)" />
      <Path d="M10 0h11v15H10zM0 0h7v15H0z" fill="url(#NG_svg__b)" />
      <Path d="M7 0h7v15H7z" fill="url(#NG_svg__a)" />
    </G>
  </Svg>
);

export default SvgNg;
