import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgCl = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="CL_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="CL_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EA3B2E" />
        <Stop offset="100%" stopColor="#D52B1E" />
      </LinearGradient>
      <LinearGradient id="CL_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0B48C2" />
        <Stop offset="100%" stopColor="#0239A7" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#CL_svg__a)" />
      <Path d="M0 7h21v8H0z" fill="url(#CL_svg__b)" />
      <Path d="M0 0h21v7H0z" fill="url(#CL_svg__a)" />
      <Path d="M0 0h7v7H0z" fill="url(#CL_svg__c)" />
      <Path
        d="M3.5 4.28l-1.176.838.434-1.377-1.16-.859 1.444-.013L3.5 1.5l.458 1.369 1.444.013-1.16.859.434 1.377z"
        fill="url(#CL_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgCl;
