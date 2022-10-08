import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgNr = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="NR_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="NR_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0744A7" />
        <Stop offset="100%" stopColor="#00307D" />
      </LinearGradient>
      <LinearGradient id="NR_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FCC747" />
        <Stop offset="100%" stopColor="#FEC539" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#NR_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#NR_svg__b)" />
      <Path d="M0 6h21v2H0z" fill="url(#NR_svg__c)" />
      <Path
        d="M5.5 12.25l-.773 1.128.038-1.367-1.288.458.834-1.083L3 11l1.311-.386-.834-1.083 1.288.458-.038-1.367L5.5 9.75l.773-1.128-.038 1.367 1.288-.458-.834 1.083L8 11l-1.311.386.834 1.083-1.288-.458.038 1.367z"
        fill="url(#NR_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgNr;
