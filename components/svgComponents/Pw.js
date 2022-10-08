import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgPw = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="PW_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="PW_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#65C6EE" />
        <Stop offset="100%" stopColor="#4FAED5" />
      </LinearGradient>
      <LinearGradient id="PW_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFE044" />
        <Stop offset="100%" stopColor="#FFDD32" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#PW_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#PW_svg__b)" />
      <Circle cx={9.5} cy={7.5} fill="url(#PW_svg__c)" r={4.5} />
    </G>
  </Svg>
);

export default SvgPw;
