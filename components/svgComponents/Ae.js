import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgAe = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="AE_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="AE_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#12833B" />
        <Stop offset="100%" stopColor="#0D7332" />
      </LinearGradient>
      <LinearGradient id="AE_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="AE_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FF323E" />
        <Stop offset="100%" stopColor="#FD0D1B" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#AE_svg__a)" />
      <Path d="M6 0h15v5H6z" fill="url(#AE_svg__b)" />
      <Path d="M6 10h15v5H6z" fill="url(#AE_svg__c)" />
      <Path d="M6 5h15v5H6z" fill="url(#AE_svg__a)" />
      <Path d="M0 0h6v15H0z" fill="url(#AE_svg__d)" />
    </G>
  </Svg>
);

export default SvgAe;
