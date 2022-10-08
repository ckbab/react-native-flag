import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgGm = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GM_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GM_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DF2237" />
        <Stop offset="100%" stopColor="#CE1126" />
      </LinearGradient>
      <LinearGradient id="GM_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#4B9334" />
        <Stop offset="100%" stopColor="#3B7828" />
      </LinearGradient>
      <LinearGradient id="GM_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1526A7" />
        <Stop offset="100%" stopColor="#0C1B8D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GM_svg__a)" />
      <Path d="M0 0h21v5H0z" fill="url(#GM_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#GM_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#GM_svg__a)" />
      <Path d="M0 6h21v3H0z" fill="url(#GM_svg__d)" />
    </G>
  </Svg>
);

export default SvgGm;
