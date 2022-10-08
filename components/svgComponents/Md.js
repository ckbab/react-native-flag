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

const SvgMd = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="MD_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="MD_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EB1C43" />
        <Stop offset="100%" stopColor="#CA1134" />
      </LinearGradient>
      <LinearGradient id="MD_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#115BCB" />
        <Stop offset="100%" stopColor="#094AAC" />
      </LinearGradient>
      <LinearGradient id="MD_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD953" />
        <Stop offset="100%" stopColor="#FFD130" />
      </LinearGradient>
      <Path d="M7 0h7v15H7z" id="MD_svg__e" />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#MD_svg__a)" />
      <Path d="M10 0h11v15H10z" fill="url(#MD_svg__b)" />
      <Path d="M0 0h7v15H0z" fill="url(#MD_svg__c)" />
      <Use fill="#000" filter="url(#MD_svg__d)" xlinkHref="#MD_svg__e" />
      <Use fill="url(#MD_svg__f)" xlinkHref="#MD_svg__e" />
      <Path
        d="M9 6h1l.5-1.5L11 6h1v3l-1.5 1L9 9V6zm1 1v1.5h1V7h-1z"
        fill="#AF7F59"
      />
    </G>
  </Svg>
);

export default SvgMd;
