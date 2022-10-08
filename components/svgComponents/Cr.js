import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgCr = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="CR_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="CR_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#06358F" />
        <Stop offset="100%" stopColor="#042E7D" />
      </LinearGradient>
      <LinearGradient id="CR_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E61F37" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#CR_svg__a)" />
      <Path d="M0 0h21v3H0zM0 12h21v3H0z" fill="url(#CR_svg__b)" />
      <Path d="M0 3h21v9H0z" fill="url(#CR_svg__a)" />
      <Path d="M0 5h21v5H0z" fill="url(#CR_svg__c)" />
    </G>
  </Svg>
);

export default SvgCr;
