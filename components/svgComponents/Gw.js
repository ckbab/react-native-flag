import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgGw = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GW_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GW_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1AB558" />
        <Stop offset="100%" stopColor="#169E4D" />
      </LinearGradient>
      <LinearGradient id="GW_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD952" />
        <Stop offset="100%" stopColor="#FCD036" />
      </LinearGradient>
      <LinearGradient id="GW_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E72B42" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
      <LinearGradient id="GW_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GW_svg__a)" />
      <Path d="M0 7h21v8H0z" fill="url(#GW_svg__b)" />
      <Path d="M0 0h21v7H0z" fill="url(#GW_svg__c)" />
      <Path d="M0 0h8v15H0z" fill="url(#GW_svg__d)" />
      <Path
        d="M4 8.459L2.53 9.523l.558-1.727-1.466-1.069 1.814-.003L4 5l.564 1.724 1.814.003-1.466 1.07.557 1.726z"
        fill="url(#GW_svg__e)"
      />
    </G>
  </Svg>
);

export default SvgGw;
