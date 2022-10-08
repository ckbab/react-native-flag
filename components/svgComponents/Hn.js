import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgHn = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="HN_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="HN_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0884E6" />
        <Stop offset="100%" stopColor="#0074D0" />
      </LinearGradient>
      <LinearGradient id="HN_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0E88E9" />
        <Stop offset="100%" stopColor="#0074D0" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#HN_svg__a)" />
      <Path d="M0 0h21v5H0zM0 10h21v5H0z" fill="url(#HN_svg__b)" />
      <Path d="M0 5h21v5H0z" fill="url(#HN_svg__a)" />
      <Path
        d="M10.5 8l-.707.207L10 7.5l-.207-.707L10.5 7l.707-.207L11 7.5l.207.707zM14.5 7l-.707.207L14 6.5l-.207-.707L14.5 6l.707-.207L15 6.5l.207.707zM14.5 9l-.707.207L14 8.5l-.207-.707L14.5 8l.707-.207L15 8.5l.207.707zM6.5 9l-.707.207L6 8.5l-.207-.707L6.5 8l.707-.207L7 8.5l.207.707zM6.5 7l-.707.207L6 6.5l-.207-.707L6.5 6l.707-.207L7 6.5l.207.707z"
        fill="url(#HN_svg__c)"
      />
    </G>
  </Svg>
);

export default SvgHn;
