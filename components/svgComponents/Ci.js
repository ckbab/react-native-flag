import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgCi = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="CI_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="CI_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1DC87D" />
        <Stop offset="100%" stopColor="#169E62" />
      </LinearGradient>
      <LinearGradient id="CI_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F89242" />
        <Stop offset="100%" stopColor="#F67F22" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#CI_svg__a)" />
      <Path d="M10 0h11v15H10z" fill="url(#CI_svg__b)" />
      <Path d="M0 0h7v15H0z" fill="url(#CI_svg__c)" />
      <Path d="M7 0h7v15H7z" fill="url(#CI_svg__a)" />
    </G>
  </Svg>
);

export default SvgCi;
