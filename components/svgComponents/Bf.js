import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgBf = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BF_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BF_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#00B051" />
        <Stop offset="100%" stopColor="#009F49" />
      </LinearGradient>
      <LinearGradient id="BF_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FA494B" />
        <Stop offset="100%" stopColor="#F02B2D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BF_svg__a)" />
      <Path d="M0 8h21v7H0z" fill="url(#BF_svg__b)" />
      <Path d="M0 0h21v8H0z" fill="url(#BF_svg__c)" />
      <Path
        d="M10.5 9.17l-1.763 1.257.65-2.065-1.74-1.29 2.165-.019L10.5 5l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
        fill="#FDD216"
      />
    </G>
  </Svg>
);

export default SvgBf;
