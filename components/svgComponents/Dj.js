import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgDj = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="DJ_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="DJ_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1DC837" />
        <Stop offset="100%" stopColor="#13AD2B" />
      </LinearGradient>
      <LinearGradient id="DJ_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#82C5F5" />
        <Stop offset="100%" stopColor="#6AB3E8" />
      </LinearGradient>
      <LinearGradient id="DJ_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E21C21" />
        <Stop offset="100%" stopColor="#D7151A" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#DJ_svg__a)" />
      <Path d="M0 7h21v8H0z" fill="url(#DJ_svg__b)" />
      <Path d="M0 0h21v7H0z" fill="url(#DJ_svg__c)" />
      <Path d="M0 0l10 7.5L0 15z" fill="url(#DJ_svg__a)" />
      <Path
        d="M3.5 8.475L2.03 9.523 2.574 7.8l-1.45-1.074 1.804-.016L3.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"
        fill="url(#DJ_svg__d)"
      />
    </G>
  </Svg>
);

export default SvgDj;
