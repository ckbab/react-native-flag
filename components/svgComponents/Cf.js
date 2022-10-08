import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgCf = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="CF_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="CF_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#083D96" />
        <Stop offset="100%" stopColor="#053380" />
      </LinearGradient>
      <LinearGradient id="CF_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#37AE39" />
        <Stop offset="100%" stopColor="#2E9630" />
      </LinearGradient>
      <LinearGradient id="CF_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD13F" />
        <Stop offset="100%" stopColor="#FFCD2F" />
      </LinearGradient>
      <LinearGradient id="CF_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E42346" />
        <Stop offset="100%" stopColor="#D01739" />
      </LinearGradient>
      <LinearGradient id="CF_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD03B" />
        <Stop offset="100%" stopColor="#FFCD2F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#CF_svg__a)" />
      <Path d="M0 0h21v4H0z" fill="url(#CF_svg__b)" />
      <Path d="M0 7h21v4H0z" fill="url(#CF_svg__c)" />
      <Path d="M0 11h21v4H0z" fill="url(#CF_svg__d)" />
      <Path d="M0 4h21v3H0z" fill="url(#CF_svg__a)" />
      <Path d="M8 0h5v15H8z" fill="url(#CF_svg__e)" />
      <Path
        d="M3.5 2.585l-.882.629.326-1.033-.87-.645 1.082-.01L3.5.5l.344 1.027 1.083.01-.87.644.325 1.033z"
        fill="url(#CF_svg__f)"
      />
    </G>
  </Svg>
);

export default SvgCf;
