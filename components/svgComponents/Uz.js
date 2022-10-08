import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgUz = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="UZ_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="UZ_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#04AAC8" />
        <Stop offset="100%" stopColor="#009AB6" />
      </LinearGradient>
      <LinearGradient id="UZ_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#23C840" />
        <Stop offset="100%" stopColor="#1EB639" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#UZ_svg__a)" />
      <Path d="M0 0h21v5H0z" fill="url(#UZ_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#UZ_svg__c)" />
      <Path
        d="M0 5h21v5H0zM4.334 1.253a1.5 1.5 0 1 0 0 2.495 1.25 1.25 0 1 1 0-2.495zM5.5 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="url(#UZ_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgUz;
