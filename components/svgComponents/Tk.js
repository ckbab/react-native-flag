import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgTk = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="TK_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="TK_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0637C5" />
        <Stop offset="100%" stopColor="#002CAA" />
      </LinearGradient>
      <LinearGradient id="TK_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FDD33F" />
        <Stop offset="100%" stopColor="#FED02F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#TK_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#TK_svg__b)" />
      <Path
        d="M4 12h15v1H3l1-1zm7.5-6c3-2 6.5-4 6.5-4s-1.643 3.073-1.5 4.5C16.69 8.407 19 11 19 11H5s3.5-3 6.5-5z"
        fill="url(#TK_svg__c)"
      />
      <Path
        d="M4 9l-.707.207L3.5 8.5l-.207-.707L4 8l.707-.207L4.5 8.5l.207.707zM5 2.5l-.707.207L4.5 2l-.207-.707L5 1.5l.707-.207L5.5 2l.207.707zM7 5.5l-.707.207L6.5 5l-.207-.707L7 4.5l.707-.207L7.5 5l.207.707zM2 5.5l-.707.207L1.5 5l-.207-.707L2 4.5l.707-.207L2.5 5l.207.707z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgTk;
