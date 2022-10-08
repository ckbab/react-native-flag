import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgCm = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="CM_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="CM_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFDC44" />
        <Stop offset="100%" stopColor="#FDD216" />
      </LinearGradient>
      <LinearGradient id="CM_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#059170" />
        <Stop offset="100%" stopColor="#007B5E" />
      </LinearGradient>
      <LinearGradient id="CM_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E21A30" />
        <Stop offset="100%" stopColor="#CE1126" />
      </LinearGradient>
      <LinearGradient id="CM_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFDC42" />
        <Stop offset="100%" stopColor="#FDD217" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#CM_svg__a)" />
      <Path d="M10 0h11v15H10z" fill="url(#CM_svg__b)" />
      <Path d="M0 0h7v15H0z" fill="url(#CM_svg__c)" />
      <Path d="M7 0h7v15H7z" fill="url(#CM_svg__d)" />
      <Path d="M14 0h7v15h-7z" fill="url(#CM_svg__b)" />
      <Path
        d="M10.5 8.475L9.03 9.523 9.574 7.8l-1.45-1.074 1.804-.016L10.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"
        fill="url(#CM_svg__e)"
      />
    </G>
  </Svg>
);

export default SvgCm;
