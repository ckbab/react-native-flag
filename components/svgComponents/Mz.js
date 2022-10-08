import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgMz = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="MZ_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="MZ_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFE547" />
        <Stop offset="100%" stopColor="#FCE032" />
      </LinearGradient>
      <LinearGradient id="MZ_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#118C81" />
        <Stop offset="100%" stopColor="#0D7168" />
      </LinearGradient>
      <LinearGradient id="MZ_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="MZ_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EF2147" />
        <Stop offset="100%" stopColor="#D01739" />
      </LinearGradient>
      <LinearGradient id="MZ_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FDE444" />
        <Stop offset="100%" stopColor="#FCE032" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#MZ_svg__a)" />
      <Path d="M0 11h21v4H0z" fill="url(#MZ_svg__b)" />
      <Path d="M0 0h21v4H0z" fill="url(#MZ_svg__c)" />
      <Path d="M0 4h21v7H0z" fill="url(#MZ_svg__a)" />
      <Path d="M0 5h21v5H0z" fill="url(#MZ_svg__d)" />
      <Path d="M0 0l10 7.5L0 15z" fill="url(#MZ_svg__e)" />
      <Path
        d="M3.5 8.456L2.03 9.523l.561-1.728-1.469-1.068h1.816L3.5 5l.562 1.727h1.816l-1.47 1.068.561 1.728z"
        fill="url(#MZ_svg__f)"
      />
    </G>
  </Svg>
);

export default SvgMz;
