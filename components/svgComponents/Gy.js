import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgGy = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GY_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GY_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#08C55F" />
        <Stop offset="100%" stopColor="#009F49" />
      </LinearGradient>
      <LinearGradient id="GY_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GY_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD831" />
        <Stop offset="100%" stopColor="#FDD117" />
      </LinearGradient>
      <LinearGradient id="GY_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="GY_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E92034" />
        <Stop offset="100%" stopColor="#CE1225" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GY_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#GY_svg__b)" />
      <Path
        d="M-1 15V0h1l21 7v1L0 15z"
        fill="url(#GY_svg__c)"
        fillRule="nonzero"
      />
      <Path
        d="M0 1.054v12.892L19.338 7.5z"
        fill="url(#GY_svg__d)"
        fillRule="nonzero"
      />
      <Path
        d="M-1 15V0h1l11.5 7.5L0 15z"
        fill="url(#GY_svg__e)"
        fillRule="nonzero"
      />
      <Path
        d="M0 13.806L9.67 7.5 0 1.194z"
        fill="url(#GY_svg__f)"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgGy;
