import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  Use,
} from "react-native-svg";

const SvgMt = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="MT_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="MT_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DE233C" />
        <Stop offset="100%" stopColor="#CD1931" />
      </LinearGradient>
      <Path d="M4 3V2H3v1H2v1h1v1h1V4h1V3H4z" id="MT_svg__c" />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#MT_svg__a)" />
      <Path d="M11 0h10v15H11z" fill="url(#MT_svg__b)" />
      <Path d="M0 0h11v15H0z" fill="url(#MT_svg__a)" />
      <Use fill="#CCCCCD" xlinkHref="#MT_svg__c" />
      <Path
        d="M4.25 2.75h1v1.5h-1v1h-1.5v-1h-1v-1.5h1v-1h1.5v1z"
        stroke="#7B716A"
        strokeOpacity={0.66}
        strokeWidth={0.5}
      />
      <Circle cx={3.5} cy={3.5} fill="#7B716A" r={1} />
    </G>
  </Svg>
);

export default SvgMt;
