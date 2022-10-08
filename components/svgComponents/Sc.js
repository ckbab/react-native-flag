import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgSc = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SC_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SC_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1DBE4F" />
        <Stop offset="100%" stopColor="#159B3F" />
      </LinearGradient>
      <LinearGradient id="SC_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0858B4" />
        <Stop offset="100%" stopColor="#013F87" />
      </LinearGradient>
      <LinearGradient id="SC_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#ED3535" />
        <Stop offset="100%" stopColor="#D62828" />
      </LinearGradient>
      <LinearGradient id="SC_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#08964F" />
        <Stop offset="100%" stopColor="#017B3E" />
      </LinearGradient>
      <LinearGradient id="SC_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFDD67" />
        <Stop offset="100%" stopColor="#FDD856" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SC_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#SC_svg__b)" />
      <Path d="M0 0h7L0 15z" fill="url(#SC_svg__c)" />
      <Path d="M14 0h7v5L0 15z" fill="url(#SC_svg__d)" />
      <Path d="M21 15v-5L0 15z" fill="url(#SC_svg__e)" />
      <Path d="M7 0h7L0 15z" fill="url(#SC_svg__f)" />
      <Path d="M21 10V5L0 15z" fill="url(#SC_svg__a)" />
    </G>
  </Svg>
);

export default SvgSc;
