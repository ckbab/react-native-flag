import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgSl = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SL_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SL_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#35CE4F" />
        <Stop offset="100%" stopColor="#2AB441" />
      </LinearGradient>
      <LinearGradient id="SL_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1C87DB" />
        <Stop offset="100%" stopColor="#1175C4" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SL_svg__a)" />
      <Path d="M0 0h21v5H0z" fill="url(#SL_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#SL_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#SL_svg__a)" />
    </G>
  </Svg>
);

export default SvgSl;
