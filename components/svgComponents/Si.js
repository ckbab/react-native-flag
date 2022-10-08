import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgSi = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SI_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SI_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0C47B7" />
        <Stop offset="100%" stopColor="#073DA4" />
      </LinearGradient>
      <LinearGradient id="SI_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E53B35" />
        <Stop offset="100%" stopColor="#D32E28" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SI_svg__a)" />
      <Path d="M0 3h21v7H0z" fill="url(#SI_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#SI_svg__c)" />
      <Path
        d="M0 5V0h21v5H6.933V4s-.705-.5-1.433-.5C4.772 3.5 4 4 4 4v1H0zm5.5 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        fill="url(#SI_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgSi;
