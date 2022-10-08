import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgMu = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="MU_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="MU_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1DBB63" />
        <Stop offset="100%" stopColor="#17A455" />
      </LinearGradient>
      <LinearGradient id="MU_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#222B82" />
        <Stop offset="100%" stopColor="#1B236C" />
      </LinearGradient>
      <LinearGradient id="MU_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD741" />
        <Stop offset="100%" stopColor="#FFD430" />
      </LinearGradient>
      <LinearGradient id="MU_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F4374A" />
        <Stop offset="100%" stopColor="#E92C3F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#MU_svg__a)" />
      <Path d="M0 12h21v3H0z" fill="url(#MU_svg__b)" />
      <Path d="M0 4h21v4H0z" fill="url(#MU_svg__c)" />
      <Path d="M0 8h21v4H0z" fill="url(#MU_svg__d)" />
      <Path d="M0 0h21v4H0z" fill="url(#MU_svg__e)" />
    </G>
  </Svg>
);

export default SvgMu;
