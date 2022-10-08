import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgMn = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="MN_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="MN_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#146BBC" />
        <Stop offset="100%" stopColor="#0B5396" />
      </LinearGradient>
      <LinearGradient id="MN_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E43642" />
        <Stop offset="100%" stopColor="#C32A34" />
      </LinearGradient>
      <LinearGradient id="MN_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F8D246" />
        <Stop offset="100%" stopColor="#F9CE2F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#MN_svg__a)" />
      <Path d="M7 0h7v15H7z" fill="url(#MN_svg__b)" />
      <Path d="M0 0h7v15H0zM14 0h7v15h-7z" fill="url(#MN_svg__c)" />
      <Path
        d="M4 9h1v3H4V9zM2 9h1v3H2V9zm1 2h1l-.5 1-.5-1zm0-2h1l-.5 1L3 9zm0-1l.5-.5.5.5H3zm.5 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="url(#MN_svg__d)"
      />
    </G>
  </Svg>
);

export default SvgMn;
