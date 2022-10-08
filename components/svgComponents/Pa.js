import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgPa = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="PA_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="PA_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E52448" />
        <Stop offset="100%" stopColor="#D01739" />
      </LinearGradient>
      <LinearGradient id="PA_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1367AE" />
        <Stop offset="100%" stopColor="#0A5492" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#PA_svg__a)" />
      <Path d="M0 0h21v7H0z" fill="url(#PA_svg__b)" />
      <Path d="M0 7h21v8H0z" fill="url(#PA_svg__c)" />
      <Path d="M0 7V0h10v7H0zm10 8V7h11v8H10z" fill="url(#PA_svg__a)" />
      <Path
        d="M5 4.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L5 1.5l.482 1.337 1.42.045-1.122.871.396 1.365z"
        fill="url(#PA_svg__c)"
      />
      <Path
        d="M15.5 11.82l-1.176.798.396-1.365-1.122-.871 1.42-.045L15.5 9l.482 1.337 1.42.045-1.122.871.396 1.365z"
        fill="url(#PA_svg__b)"
      />
    </G>
  </Svg>
);

export default SvgPa;
