import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgNi = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="NI_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="NI_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1A78D6" />
        <Stop offset="100%" stopColor="#106AC4" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#NI_svg__a)" />
      <Path d="M0 0h21v5H0zM0 10h21v5H0z" fill="url(#NI_svg__b)" />
      <Path d="M0 5h21v5H0z" fill="url(#NI_svg__a)" />
      <Path
        d="M10.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 .5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        fill="#DBCD92"
        fillRule="nonzero"
      />
      <Path d="M10.5 6.5l1 2h-2z" fill="#9CDDEE" />
    </G>
  </Svg>
);

export default SvgNi;
