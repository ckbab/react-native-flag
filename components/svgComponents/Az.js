import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgAz = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="AZ_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="AZ_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#24AAD5" />
        <Stop offset="100%" stopColor="#1899C2" />
      </LinearGradient>
      <LinearGradient id="AZ_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#ED1845" />
        <Stop offset="100%" stopColor="#DE0C39" />
      </LinearGradient>
      <LinearGradient id="AZ_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#21BF75" />
        <Stop offset="100%" stopColor="#19AD68" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#AZ_svg__a)" />
      <Path d="M0 0h21v5H0z" fill="url(#AZ_svg__b)" />
      <Path d="M0 5h21v5H0z" fill="url(#AZ_svg__c)" />
      <Path d="M0 10h21v5H0z" fill="url(#AZ_svg__d)" />
      <Path
        d="M11.334 6.253a1.25 1.25 0 1 0 0 2.495 1.5 1.5 0 1 1 0-2.495zM11.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="url(#AZ_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgAz;
