import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgBn = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BN_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BN_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F7E250" />
        <Stop offset="100%" stopColor="#F7DF38" />
      </LinearGradient>
      <LinearGradient id="BN_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BN_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#BN_svg__b)" />
      <Path
        d="M-3.487 4.59h29v3h-29z"
        fill="url(#BN_svg__a)"
        transform="rotate(20 11.013 6.09)"
      />
      <Path
        d="M-4.513 7.41h29v3h-29z"
        fill="url(#BN_svg__c)"
        transform="rotate(20 9.987 8.91)"
      />
    </G>
  </Svg>
);

export default SvgBn;
