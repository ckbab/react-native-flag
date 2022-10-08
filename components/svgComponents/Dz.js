import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgDz = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="DZ_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="DZ_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#048345" />
        <Stop offset="100%" stopColor="#04753E" />
      </LinearGradient>
      <LinearGradient id="DZ_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E81B42" />
        <Stop offset="100%" stopColor="#D20F34" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#DZ_svg__a)" />
      <Path d="M0 0h11v15H0z" fill="url(#DZ_svg__b)" />
      <Path d="M11 0h10v15H11z" fill="url(#DZ_svg__a)" />
      <Path
        d="M13 8.28l-1.176.838.434-1.377-1.16-.859 1.444-.013L13 5.5l.458 1.369 1.444.013-1.16.859.434 1.377z"
        fill="url(#DZ_svg__c)"
      />
      <Path
        d="M13.26 4.214A4.204 4.204 0 0 0 10.313 3C7.931 3 6 5.015 6 7.5S7.931 12 10.313 12c1.14 0 2.176-.461 2.947-1.214a4.112 4.112 0 0 1-1.77.396c-2.166 0-3.922-1.649-3.922-3.682s1.756-3.682 3.921-3.682c.638 0 1.24.143 1.771.396z"
        fill="url(#DZ_svg__c)"
      />
    </G>
  </Svg>
);

export default SvgDz;
