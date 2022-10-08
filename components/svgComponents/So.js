import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgSo = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SO_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SO_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#5D9FE9" />
        <Stop offset="100%" stopColor="#458BDB" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SO_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#SO_svg__b)" />
      <Path
        d="M10.5 9.255l-2.645 1.886.976-3.099L6.22 6.11l3.247-.029L10.5 3l1.032 3.08 3.248.03-2.61 1.932.975 3.099z"
        fill="url(#SO_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgSo;
