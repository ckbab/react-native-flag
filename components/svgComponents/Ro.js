import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgRo = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="RO_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="RO_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E5253D" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
      <LinearGradient id="RO_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0A3D9C" />
        <Stop offset="100%" stopColor="#042E7D" />
      </LinearGradient>
      <LinearGradient id="RO_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD955" />
        <Stop offset="100%" stopColor="#FCD036" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#RO_svg__a)" />
      <Path d="M10 0h11v15H10z" fill="url(#RO_svg__b)" />
      <Path d="M0 0h7v15H0z" fill="url(#RO_svg__c)" />
      <Path d="M7 0h7v15H7z" fill="url(#RO_svg__d)" />
    </G>
  </Svg>
);

export default SvgRo;
