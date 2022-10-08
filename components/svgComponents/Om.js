import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgOm = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="OM_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="OM_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#138E16" />
        <Stop offset="100%" stopColor="#0F7F12" />
      </LinearGradient>
      <LinearGradient id="OM_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#ED2B35" />
        <Stop offset="100%" stopColor="#D91B25" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#OM_svg__a)" />
      <Path d="M0 10h21v5H0z" fill="url(#OM_svg__b)" />
      <Path d="M0 15h7v-5h14V5H7V0H0z" fill="url(#OM_svg__c)" />
      <Path
        d="M3.5 3.534l-.868 1.268.45-1.47-1.532.113 1.43-.564-1.044-1.128 1.332.766L3.5 1l.232 1.519 1.332-.766L4.02 2.881l1.43.564-1.533-.112.45 1.469zM7 0h14v5H7z"
        fill="url(#OM_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgOm;
