import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgBg = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BG_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BG_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#06A77C" />
        <Stop offset="100%" stopColor="#00966E" />
      </LinearGradient>
      <LinearGradient id="BG_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E32E19" />
        <Stop offset="100%" stopColor="#D62612" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BG_svg__a)" />
      <Path d="M0 5h21v5H0z" fill="url(#BG_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#BG_svg__c)" />
      <Path d="M0 0h21v5H0z" fill="url(#BG_svg__a)" />
    </G>
  </Svg>
);

export default SvgBg;
