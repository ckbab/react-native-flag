import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgTz = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="TZ_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="TZ_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#33CC4D" />
        <Stop offset="100%" stopColor="#2AB441" />
      </LinearGradient>
      <LinearGradient id="TZ_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#2DAFE4" />
        <Stop offset="100%" stopColor="#1BA4DC" />
      </LinearGradient>
      <LinearGradient id="TZ_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD84F" />
        <Stop offset="100%" stopColor="#FCD036" />
      </LinearGradient>
      <LinearGradient id="TZ_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#TZ_svg__a)" />
      <Path d="M.001 10.004l21-10h-21z" fill="url(#TZ_svg__b)" />
      <Path d="M.001 15.004h21v-10z" fill="url(#TZ_svg__c)" />
      <Path
        d="M2.313 17.004L22.63 4.309l-3.94-6.305-20.317 12.695z"
        fill="url(#TZ_svg__d)"
      />
      <Path
        d="M-.47 17.308L24.123 1.94l-2.65-4.24L-3.12 13.068z"
        fill="url(#TZ_svg__e)"
      />
    </G>
  </Svg>
);

export default SvgTz;
