import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgUa = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="UA_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="UA_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#156DD1" />
        <Stop offset="100%" stopColor="#0D5EB9" />
      </LinearGradient>
      <LinearGradient id="UA_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD948" />
        <Stop offset="100%" stopColor="#FFD430" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#UA_svg__a)" />
      <Path d="M0 0h21v8H0z" fill="url(#UA_svg__b)" />
      <Path d="M0 8h21v7H0z" fill="url(#UA_svg__c)" />
    </G>
  </Svg>
);

export default SvgUa;
