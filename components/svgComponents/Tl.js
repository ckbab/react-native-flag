import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgTl = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="TL_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="TL_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FF323E" />
        <Stop offset="100%" stopColor="#FD0D1B" />
      </LinearGradient>
      <LinearGradient id="TL_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFCC51" />
        <Stop offset="100%" stopColor="#FFC63C" />
      </LinearGradient>
      <LinearGradient id="TL_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#TL_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#TL_svg__b)" />
      <Path d="M0 0l13 7.5L0 15z" fill="url(#TL_svg__c)" />
      <Path d="M0 0l9 7.5L0 15z" fill="url(#TL_svg__d)" />
      <Path
        d="M3.92 8.262L2.62 9.19l.48-1.524-1.284-.951L3.413 6.7l.507-1.515.508 1.515 1.598.015-1.284.95.48 1.525z"
        fill="url(#TL_svg__a)"
        transform="rotate(-30 3.92 7.187)"
      />
    </G>
  </Svg>
);

export default SvgTl;
