import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgPr = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="PR_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="PR_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FA2222" />
        <Stop offset="100%" stopColor="#ED0000" />
      </LinearGradient>
      <LinearGradient id="PR_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1D63F9" />
        <Stop offset="100%" stopColor="#0650F0" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#PR_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#PR_svg__b)" />
      <Path d="M0 3h21v3H0zM0 9h21v3H0z" fill="url(#PR_svg__a)" />
      <Path d="M0 0l10 7.5L0 15z" fill="url(#PR_svg__c)" />
      <Path
        d="M3.5 8.456L2.03 9.523l.561-1.728-1.469-1.068h1.816L3.5 5l.562 1.727h1.816l-1.47 1.068.561 1.728z"
        fill="url(#PR_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgPr;
