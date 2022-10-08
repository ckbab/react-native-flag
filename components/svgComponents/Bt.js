import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgBt = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BT_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BT_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FF5F38" />
        <Stop offset="100%" stopColor="#FD5026" />
      </LinearGradient>
      <LinearGradient id="BT_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD951" />
        <Stop offset="100%" stopColor="#FFD43B" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BT_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#BT_svg__b)" />
      <Path d="M0 15L21 0H0z" fill="url(#BT_svg__c)" />
    </G>
  </Svg>
);

export default SvgBt;
