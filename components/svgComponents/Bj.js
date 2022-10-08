import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgBj = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BJ_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BJ_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F12641" />
        <Stop offset="100%" stopColor="#E71834" />
      </LinearGradient>
      <LinearGradient id="BJ_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD648" />
        <Stop offset="100%" stopColor="#FCD036" />
      </LinearGradient>
      <LinearGradient id="BJ_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#17A668" />
        <Stop offset="100%" stopColor="#118653" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BJ_svg__a)" />
      <Path d="M0 7h21v8H0z" fill="url(#BJ_svg__b)" />
      <Path d="M0 0h21v7H0z" fill="url(#BJ_svg__c)" />
      <Path d="M0 0h8v15H0z" fill="url(#BJ_svg__d)" />
    </G>
  </Svg>
);

export default SvgBj;
