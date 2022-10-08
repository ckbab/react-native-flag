import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgSn = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SN_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SN_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F13642" />
        <Stop offset="100%" stopColor="#E1202C" />
      </LinearGradient>
      <LinearGradient id="SN_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#17A052" />
        <Stop offset="100%" stopColor="#108442" />
      </LinearGradient>
      <LinearGradient id="SN_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF166" />
        <Stop offset="100%" stopColor="#FDEE54" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SN_svg__a)" />
      <Path d="M10 0h11v15H10z" fill="url(#SN_svg__b)" />
      <Path d="M0 0h7v15H0z" fill="url(#SN_svg__c)" />
      <Path d="M7 0h7v15H7z" fill="url(#SN_svg__d)" />
      <Path
        d="M10.5 8.525l-1.47.998.495-1.706-1.403-1.09 1.776-.056L10.5 5l.602 1.67 1.776.057-1.403 1.09.494 1.706z"
        fill="url(#SN_svg__c)"
      />
    </G>
  </Svg>
);

export default SvgSn;
