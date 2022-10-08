import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgCz = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="CZ_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="CZ_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E8252A" />
        <Stop offset="100%" stopColor="#D7151A" />
      </LinearGradient>
      <LinearGradient id="CZ_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#17579E" />
        <Stop offset="100%" stopColor="#10457F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#CZ_svg__a)" />
      <Path d="M0 7h21v8H0z" fill="url(#CZ_svg__b)" />
      <Path d="M0 0h21v7H0z" fill="url(#CZ_svg__a)" />
      <Path d="M0 0l10 7.5L0 15z" fill="url(#CZ_svg__c)" />
    </G>
  </Svg>
);

export default SvgCz;
