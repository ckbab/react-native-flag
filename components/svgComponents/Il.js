import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgIl = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="IL_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="IL_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0E46D4" />
        <Stop offset="100%" stopColor="#0538B9" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#IL_svg__a)" />
      <Path d="M0 0h21v3H0zM0 12h21v3H0z" fill="url(#IL_svg__b)" />
      <Path d="M0 3h21v9H0z" fill="url(#IL_svg__a)" />
      <Path
        d="M7.575 9.25L10.5 3.985l2.925 5.265h-5.85z"
        stroke="#093EC5"
        strokeWidth={0.5}
      />
      <Path
        d="M7.575 5.75l2.925 5.265 2.925-5.265h-5.85z"
        stroke="#093EC5"
        strokeWidth={0.5}
      />
    </G>
  </Svg>
);

export default SvgIl;
