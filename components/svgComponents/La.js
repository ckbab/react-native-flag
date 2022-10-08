import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgLa = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="LA_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="LA_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#073A88" />
        <Stop offset="100%" stopColor="#032A67" />
      </LinearGradient>
      <LinearGradient id="LA_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E2273E" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#LA_svg__a)" />
      <Path d="M0 4h21v7H0z" fill="url(#LA_svg__b)" />
      <Path d="M0 0h21v4H0zM0 11h21v4H0z" fill="url(#LA_svg__c)" />
      <Circle cx={10.5} cy={7.5} fill="url(#LA_svg__a)" r={2.5} />
    </G>
  </Svg>
);

export default SvgLa;
