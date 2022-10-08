import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgBd = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BD_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BD_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#128363" />
        <Stop offset="100%" stopColor="#0C6A4F" />
      </LinearGradient>
      <LinearGradient id="BD_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F23C53" />
        <Stop offset="100%" stopColor="#F22E46" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BD_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#BD_svg__b)" />
      <Circle cx={9.5} cy={7.5} fill="url(#BD_svg__c)" r={4.5} />
    </G>
  </Svg>
);

export default SvgBd;
