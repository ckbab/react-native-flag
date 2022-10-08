import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgBo = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BO_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BO_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#058C3F" />
        <Stop offset="100%" stopColor="#007A34" />
      </LinearGradient>
      <LinearGradient id="BO_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E63426" />
        <Stop offset="100%" stopColor="#D52B1E" />
      </LinearGradient>
      <LinearGradient id="BO_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFEB1F" />
        <Stop offset="100%" stopColor="#FAE400" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BO_svg__a)" />
      <Path d="M0 10h21v5H0z" fill="url(#BO_svg__b)" />
      <Path d="M0 0h21v5H0z" fill="url(#BO_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#BO_svg__d)" />
    </G>
  </Svg>
);

export default SvgBo;
