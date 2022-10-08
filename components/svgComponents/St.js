import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgSt = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="ST_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="ST_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#2ACB41" />
        <Stop offset="100%" stopColor="#21AC35" />
      </LinearGradient>
      <LinearGradient id="ST_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FDD043" />
        <Stop offset="100%" stopColor="#FFCD2F" />
      </LinearGradient>
      <LinearGradient id="ST_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E71E43" />
        <Stop offset="100%" stopColor="#D01739" />
      </LinearGradient>
      <LinearGradient id="ST_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#ST_svg__a)" />
      <Path d="M0 10h21v5H0zM0 0h21v5H0z" fill="url(#ST_svg__b)" />
      <Path d="M0 5h21v5H0z" fill="url(#ST_svg__c)" />
      <Path d="M0 0l8 7.5L0 15z" fill="url(#ST_svg__d)" />
      <Path
        d="M11 8.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L11 5.5l.482 1.337 1.42.045-1.122.871.396 1.365zM16 8.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L16 5.5l.482 1.337 1.42.045-1.122.871.396 1.365z"
        fill="url(#ST_svg__e)"
      />
    </G>
  </Svg>
);

export default SvgSt;
