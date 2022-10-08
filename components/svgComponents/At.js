import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgAt = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="AT_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="AT_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F64253" />
        <Stop offset="100%" stopColor="#EA2D3F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#AT_svg__a)" />
      <Path d="M0 0h21v5H0zM0 10h21v5H0z" fill="url(#AT_svg__b)" />
      <Path d="M0 5h21v5H0z" fill="url(#AT_svg__a)" />
    </G>
  </Svg>
);

export default SvgAt;
