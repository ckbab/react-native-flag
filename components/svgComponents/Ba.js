import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgBa = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BA_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BA_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0B36B2" />
        <Stop offset="100%" stopColor="#042993" />
      </LinearGradient>
      <LinearGradient id="BA_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD045" />
        <Stop offset="100%" stopColor="#FECA2F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BA_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#BA_svg__b)" />
      <Path d="M17 15V0H6.5z" fill="url(#BA_svg__c)" />
      <Path
        d="M13 14l-.707.207.207-.707-.207-.707L13 13l.707-.207-.207.707.207.707zM11 11l-.707.207.207-.707-.207-.707L11 10l.707-.207-.207.707.207.707zM9 8l-.707.207L8.5 7.5l-.207-.707L9 7l.707-.207L9.5 7.5l.207.707zM7 5l-.707.207L6.5 4.5l-.207-.707L7 4l.707-.207L7.5 4.5l.207.707zM5 2l-.707.207L4.5 1.5 4.293.793 5 1l.707-.207L5.5 1.5l.207.707z"
        fill="url(#BA_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgBa;
