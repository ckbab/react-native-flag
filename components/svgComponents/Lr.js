import React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  Use,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgLr = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="LR_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="LR_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E1244A" />
        <Stop offset="100%" stopColor="#BE1134" />
      </LinearGradient>
      <LinearGradient id="LR_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0C3F8E" />
        <Stop offset="100%" stopColor="#032A67" />
      </LinearGradient>
      <Path
        d="M5 6.17L3.237 7.427l.65-2.065-1.74-1.29 2.165-.019L5 2l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
        id="LR_svg__e"
      />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#LR_svg__a)" />
      <Path
        d="M10 0h11v2H10V0zm0 4h11v2H10V4zm0 4h11v2H10V8zM0 12h21v2H0v-2z"
        fill="url(#LR_svg__b)"
      />
      <Path d="M0 0h10v10H0z" fill="url(#LR_svg__c)" />
      <Use fill="#000" filter="url(#LR_svg__d)" xlinkHref="#LR_svg__e" />
      <Use fill="url(#LR_svg__a)" xlinkHref="#LR_svg__e" />
    </G>
  </Svg>
);

export default SvgLr;
