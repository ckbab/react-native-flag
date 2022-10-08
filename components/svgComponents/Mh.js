import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgMh = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="MH_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="MH_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#064DAE" />
        <Stop offset="100%" stopColor="#003D91" />
      </LinearGradient>
      <LinearGradient id="MH_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F18D36" />
        <Stop offset="100%" stopColor="#DB761E" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#MH_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#MH_svg__b)" />
      <Path d="M21 0v4L0 15z" fill="url(#MH_svg__c)" />
      <Path
        d="M21 8V4L0 15zM4.839 4.372L4.5 2l-.339 2.372-.911-1.037.468 1.383-1.383-.468 1.037.911L1 5.5l2.372.339-1.037.911 1.383-.468-.468 1.383.911-1.037L4.5 9l.339-2.372.911 1.037-.468-1.383 1.383.468-1.037-.911L8 5.5l-2.372-.339 1.037-.911-1.383.468.468-1.383-.911 1.037z"
        fill="url(#MH_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgMh;
