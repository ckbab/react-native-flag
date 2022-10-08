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

const SvgGl = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GL_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <Path d="M0 0h21v8H0z" id="GL_svg__c" />
      <LinearGradient id="GL_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E82245" />
        <Stop offset="100%" stopColor="#CC1838" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GL_svg__a)" />
      <Use fill="#000" filter="url(#GL_svg__b)" xlinkHref="#GL_svg__c" />
      <Use fill="url(#GL_svg__a)" xlinkHref="#GL_svg__c" />
      <Path d="M3 8H0v7h21V8H11a4 4 0 1 0-8 0z" fill="url(#GL_svg__d)" />
      <Path d="M3 8a4 4 0 1 0 8 0H3z" fill="url(#GL_svg__a)" />
    </G>
  </Svg>
);

export default SvgGl;
