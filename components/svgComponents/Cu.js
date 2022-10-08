import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgCu = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="CU_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="CU_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0B389F" />
        <Stop offset="100%" stopColor="#052E8D" />
      </LinearGradient>
      <LinearGradient id="CU_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E12A43" />
        <Stop offset="100%" stopColor="#CD1931" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#CU_svg__a)" />
      <Path d="M0 0h21v3H0zM0 6h21v3H0z" fill="url(#CU_svg__b)" />
      <Path d="M0 3h21v3H0z" fill="url(#CU_svg__a)" />
      <Path d="M0 12h21v3H0z" fill="url(#CU_svg__b)" />
      <Path d="M0 9h21v3H0z" fill="url(#CU_svg__a)" />
      <Path d="M0 0l10 7.5L0 15z" fill="url(#CU_svg__c)" />
      <Path
        d="M3.5 8.267l-1.176.851.447-1.381-1.173-.855 1.451-.003L3.5 5.5l.45 1.38 1.452.002-1.173.855.447 1.381z"
        fill="url(#CU_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgCu;
