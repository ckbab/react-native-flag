import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgNe = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="NE_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="NE_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F0642F" />
        <Stop offset="100%" stopColor="#DF531D" />
      </LinearGradient>
      <LinearGradient id="NE_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#2DCC45" />
        <Stop offset="100%" stopColor="#1FAF35" />
      </LinearGradient>
      <LinearGradient id="NE_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E85C27" />
        <Stop offset="100%" stopColor="#DF531D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#NE_svg__a)" />
      <Path d="M0 0h21v5H0z" fill="url(#NE_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#NE_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#NE_svg__a)" />
      <Circle cx={10.5} cy={7.5} fill="url(#NE_svg__d)" r={2} />
    </G>
  </Svg>
);

export default SvgNe;
