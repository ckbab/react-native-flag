import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgLgbt = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="LGBT_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="LGBT_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F71E24" />
        <Stop offset="100%" stopColor="#FB141B" />
      </LinearGradient>
      <LinearGradient id="LGBT_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FB6C2C" />
        <Stop offset="100%" stopColor="#FC6420" />
      </LinearGradient>
      <LinearGradient id="LGBT_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FDFC42" />
        <Stop offset="100%" stopColor="#FFFD38" />
      </LinearGradient>
      <LinearGradient id="LGBT_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#238F35" />
        <Stop offset="100%" stopColor="#1C7E2C" />
      </LinearGradient>
      <LinearGradient id="LGBT_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0F62FA" />
        <Stop offset="100%" stopColor="#0059FC" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#LGBT_svg__a)" />
      <Path d="M0 0h21v3H0z" fill="url(#LGBT_svg__b)" />
      <Path d="M0 3h21v3H0z" fill="url(#LGBT_svg__c)" />
      <Path d="M0 6h21v3H0z" fill="url(#LGBT_svg__d)" />
      <Path d="M0 9h21v3H0z" fill="url(#LGBT_svg__e)" />
      <Path d="M0 12h21v3H0z" fill="url(#LGBT_svg__f)" />
    </G>
  </Svg>
);

export default SvgLgbt;
