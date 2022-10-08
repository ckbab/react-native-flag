import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgCg = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="CG_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="CG_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F33630" />
        <Stop offset="100%" stopColor="#DC241E" />
      </LinearGradient>
      <LinearGradient id="CG_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#009643" />
        <Stop offset="100%" stopColor="#09C15B" />
      </LinearGradient>
      <LinearGradient id="CG_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FCDF4A" />
        <Stop offset="100%" stopColor="#FCE154" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#CG_svg__a)" />
      <Path
        d="M6.062 19.017l15-14h1v15h-16z"
        fill="url(#CG_svg__b)"
        transform="translate(-1.06 -5.02)"
      />
      <Path
        d="M1.062 19.017l15-14h1v15h-16z"
        fill="url(#CG_svg__c)"
        transform="rotate(180 8.532 10.007)"
      />
      <Path
        d="M-2.63 9.667h29v5h-29z"
        fill="url(#CG_svg__d)"
        transform="rotate(134 12.406 9.432)"
      />
    </G>
  </Svg>
);

export default SvgCg;
