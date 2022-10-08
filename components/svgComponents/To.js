import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgTo = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="TO_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="TO_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E20F1B" />
        <Stop offset="100%" stopColor="#C00711" />
      </LinearGradient>
      <LinearGradient id="TO_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DF101B" />
        <Stop offset="100%" stopColor="#C00711" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#TO_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#TO_svg__b)" />
      <Path d="M0 0h12v8H0z" fill="url(#TO_svg__a)" />
      <Path
        d="M7 3V1.258C7 1.104 6.89 1 6.755 1h-1.51A.25.25 0 0 0 5 1.258V3H3.258C3.104 3 3 3.11 3 3.245v1.51A.25.25 0 0 0 3.258 5H5v1.742c0 .154.11.258.245.258h1.51A.25.25 0 0 0 7 6.742V5h1.742C8.896 5 9 4.89 9 4.755v-1.51A.25.25 0 0 0 8.742 3H7z"
        fill="url(#TO_svg__c)"
      />
    </G>
  </Svg>
);

export default SvgTo;
