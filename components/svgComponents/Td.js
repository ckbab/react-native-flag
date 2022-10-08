import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgTd = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="TD_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="TD_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DE1D42" />
        <Stop offset="100%" stopColor="#C51335" />
      </LinearGradient>
      <LinearGradient id="TD_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#083780" />
        <Stop offset="100%" stopColor="#032862" />
      </LinearGradient>
      <LinearGradient id="TD_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD147" />
        <Stop offset="100%" stopColor="#FECA2F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#TD_svg__a)" />
      <Path d="M10 0h11v15H10z" fill="url(#TD_svg__b)" />
      <Path d="M0 0h7v15H0z" fill="url(#TD_svg__c)" />
      <Path d="M7 0h7v15H7z" fill="url(#TD_svg__d)" />
    </G>
  </Svg>
);

export default SvgTd;
