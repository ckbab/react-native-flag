import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgCw = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="CW_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="CW_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0543A8" />
        <Stop offset="100%" stopColor="#00307D" />
      </LinearGradient>
      <LinearGradient id="CW_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FCC747" />
        <Stop offset="100%" stopColor="#FEC539" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#CW_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#CW_svg__b)" />
      <Path d="M0 10h21v2H0z" fill="url(#CW_svg__c)" />
      <Path
        d="M6.5 6.267l-1.176.851.447-1.381-1.173-.855 1.451-.003L6.5 3.5l.45 1.38 1.452.002-1.173.855.447 1.381zM3 3.575l-.882.639.335-1.036-.88-.642 1.089-.001L3 1.5l.338 1.035 1.089.001-.88.642.335 1.036z"
        fill="url(#CW_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgCw;
