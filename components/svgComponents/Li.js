import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgLi = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="LI_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="LI_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0A3B97" />
        <Stop offset="100%" stopColor="#042E7D" />
      </LinearGradient>
      <LinearGradient id="LI_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E6273E" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#LI_svg__a)" />
      <Path d="M0 0h21v8H0z" fill="url(#LI_svg__b)" />
      <Path d="M0 8h21v7H0z" fill="url(#LI_svg__c)" />
    </G>
  </Svg>
);

export default SvgLi;
