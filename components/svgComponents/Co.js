import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgCo = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="CO_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="CO_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0748AE" />
        <Stop offset="100%" stopColor="#003993" />
      </LinearGradient>
      <LinearGradient id="CO_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DE2035" />
        <Stop offset="100%" stopColor="#CE1126" />
      </LinearGradient>
      <LinearGradient id="CO_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD935" />
        <Stop offset="100%" stopColor="#FDD216" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#CO_svg__a)" />
      <Path d="M0 7h21v4H0z" fill="url(#CO_svg__b)" />
      <Path d="M0 11h21v4H0z" fill="url(#CO_svg__c)" />
      <Path d="M0 0h21v7H0z" fill="url(#CO_svg__d)" />
    </G>
  </Svg>
);

export default SvgCo;
