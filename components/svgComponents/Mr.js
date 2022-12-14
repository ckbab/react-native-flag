import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgMr = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="MR_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="MR_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#108B4D" />
        <Stop offset="100%" stopColor="#0A6135" />
      </LinearGradient>
      <LinearGradient id="MR_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFC941" />
        <Stop offset="100%" stopColor="#FFC42E" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#MR_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#MR_svg__b)" />
      <Path
        d="M14.86 5.8a4.5 4.5 0 1 1-8.89 0 4.501 4.501 0 0 0 8.89 0zm-4.36.623l-1.236.881.456-1.448-1.22-.903 1.518-.014L10.5 3.5l.482 1.44 1.518.013-1.22.903.456 1.448-1.236-.88z"
        fill="url(#MR_svg__c)"
      />
    </G>
  </Svg>
);

export default SvgMr;
