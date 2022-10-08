import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgSy = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SY_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SY_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="SY_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E32139" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
      <LinearGradient id="SY_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#128A49" />
        <Stop offset="100%" stopColor="#0F7A40" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SY_svg__a)" />
      <Path d="M0 10h21v5H0z" fill="url(#SY_svg__b)" />
      <Path d="M0 0h21v5H0z" fill="url(#SY_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#SY_svg__a)" />
      <Path
        d="M7 8.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L7 5.5l.482 1.337 1.42.045-1.122.871.396 1.365zM14 8.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L14 5.5l.482 1.337 1.42.045-1.122.871.396 1.365z"
        fill="url(#SY_svg__d)"
      />
    </G>
  </Svg>
);

export default SvgSy;
