import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgGf = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GF_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GF_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#2DA446" />
        <Stop offset="100%" stopColor="#218736" />
      </LinearGradient>
      <LinearGradient id="GF_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFE24A" />
        <Stop offset="100%" stopColor="#FCDC34" />
      </LinearGradient>
      <LinearGradient id="GF_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E7242C" />
        <Stop offset="100%" stopColor="#D61C24" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GF_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#GF_svg__b)" />
      <Path d="M0 0l21 15H0z" fill="url(#GF_svg__c)" />
      <Path
        d="M10.5 9.073l-1.837 1.33.697-2.158L7.528 6.91l2.268-.004.704-2.155.704 2.155 2.268.004-1.832 1.336.697 2.158z"
        fill="url(#GF_svg__d)"
      />
    </G>
  </Svg>
);

export default SvgGf;
