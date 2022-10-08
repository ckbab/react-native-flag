import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgSv = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SV_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SV_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1B57C4" />
        <Stop offset="100%" stopColor="#154BAD" />
      </LinearGradient>
      <LinearGradient id="SV_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#3C7839" />
        <Stop offset="100%" stopColor="#31642E" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SV_svg__a)" />
      <Path d="M0 0h21v5H0zM0 10h21v5H0z" fill="url(#SV_svg__b)" />
      <Path d="M0 5h21v5H0z" fill="url(#SV_svg__a)" />
      <Path
        d="M9.3 5.9a2 2 0 1 0 2.4 0L11 8h-1l-.7-2.1z"
        fill="url(#SV_svg__c)"
      />
      <Path d="M10.5 5.5L11 8h-1z" fill="#F9C92E" />
    </G>
  </Svg>
);

export default SvgSv;
