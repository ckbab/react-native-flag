import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgEc = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="EC_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="EC_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0748AE" />
        <Stop offset="100%" stopColor="#003993" />
      </LinearGradient>
      <LinearGradient id="EC_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DE2035" />
        <Stop offset="100%" stopColor="#CE1126" />
      </LinearGradient>
      <LinearGradient id="EC_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD935" />
        <Stop offset="100%" stopColor="#FDD216" />
      </LinearGradient>
      <LinearGradient id="EC_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FBDC44" />
        <Stop offset="100%" stopColor="#FFDC32" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#EC_svg__a)" />
      <Path d="M0 7h21v4H0z" fill="url(#EC_svg__b)" />
      <Path d="M0 11h21v4H0z" fill="url(#EC_svg__c)" />
      <Path d="M0 0h21v7H0z" fill="url(#EC_svg__d)" />
      <Path
        d="M9.3 6a2 2 0 1 0 2.4 0L11 8.1h-1L9.3 6z"
        fill="url(#EC_svg__e)"
      />
      <Path d="M10.5 5.5L11 8h-1z" fill="#5FC0DC" />
      <Path
        d="M9.677 3.823a.25.25 0 0 0-.256-.06l-1.5.5a.25.25 0 1 0 .158.474l1.353-.451.891.89a.25.25 0 0 0 .354 0l.89-.89 1.354.451a.25.25 0 1 0 .158-.474l-1.5-.5a.25.25 0 0 0-.256.06l-.823.823-.823-.823z"
        fill="#3F2821"
        fillRule="nonzero"
        opacity={0.66}
      />
    </G>
  </Svg>
);

export default SvgEc;
