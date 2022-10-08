import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgSe = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SE_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SE_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#157CBB" />
        <Stop offset="100%" stopColor="#0E6CA5" />
      </LinearGradient>
      <LinearGradient id="SE_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD34D" />
        <Stop offset="100%" stopColor="#FECB2F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SE_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#SE_svg__b)" />
      <Path d="M0 9h6v6h3V9h12V6H9V0H6v6H0z" fill="url(#SE_svg__c)" />
    </G>
  </Svg>
);

export default SvgSe;
