import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgVe = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="VE_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="VE_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#063191" />
        <Stop offset="100%" stopColor="#03287C" />
      </LinearGradient>
      <LinearGradient id="VE_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E2213B" />
        <Stop offset="100%" stopColor="#CD1931" />
      </LinearGradient>
      <LinearGradient id="VE_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD044" />
        <Stop offset="100%" stopColor="#FFCB2F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#VE_svg__a)" />
      <Path d="M0 5h21v5H0z" fill="url(#VE_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#VE_svg__c)" />
      <Path
        d="M10.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 .5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM7.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm6 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="url(#VE_svg__a)"
      />
      <Path d="M0 0h21v5H0z" fill="url(#VE_svg__d)" />
    </G>
  </Svg>
);

export default SvgVe;
