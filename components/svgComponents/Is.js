import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgIs = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="IS_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="IS_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0E4CB5" />
        <Stop offset="100%" stopColor="#063B95" />
      </LinearGradient>
      <LinearGradient id="IS_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EB363A" />
        <Stop offset="100%" stopColor="#D52B2F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#IS_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#IS_svg__b)" />
      <Path d="M0 9h6v6h3V9h12V6H9V0H6v6H0z" fill="url(#IS_svg__a)" />
      <Path d="M0 8h7v7h1V8h13V7H8V0H7v7H0z" fill="url(#IS_svg__c)" />
    </G>
  </Svg>
);

export default SvgIs;
