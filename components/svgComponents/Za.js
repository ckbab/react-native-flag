import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgZa = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="ZA_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="ZA_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#06A86E" />
        <Stop offset="100%" stopColor="#007A4E" />
      </LinearGradient>
      <LinearGradient id="ZA_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFBF2E" />
        <Stop offset="100%" stopColor="#FFB612" />
      </LinearGradient>
      <LinearGradient id="ZA_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="ZA_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F44E46" />
        <Stop offset="100%" stopColor="#DF3931" />
      </LinearGradient>
      <LinearGradient id="ZA_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#072CB4" />
        <Stop offset="100%" stopColor="#042396" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#ZA_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#ZA_svg__b)" />
      <Path d="M0 2l7 5.5L0 13z" fill="url(#ZA_svg__c)" />
      <Path d="M-1 2.25L5.75 7.5-1 12.75z" fill="url(#ZA_svg__d)" />
      <Path d="M9 6L2 0h19v6z" fill="#FFF" />
      <Path d="M9.25 5l-6-5H21v5z" fill="url(#ZA_svg__e)" />
      <Path d="M2 15h19V9H9z" fill="#FFF" />
      <Path d="M3.25 15H21v-5H9.25z" fill="url(#ZA_svg__f)" />
    </G>
  </Svg>
);

export default SvgZa;
