import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgLc = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="LC_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="LC_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#86D7FF" />
        <Stop offset="100%" stopColor="#6BCDFE" />
      </LinearGradient>
      <LinearGradient id="LC_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="LC_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFDA57" />
        <Stop offset="100%" stopColor="#FCD036" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#LC_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#LC_svg__b)" />
      <Path d="M10.5 2L15 13H6z" fill="url(#LC_svg__a)" />
      <Path d="M10.5 4l3.5 9H7z" fill="url(#LC_svg__c)" />
      <Path d="M10.5 7l4.5 6H6z" fill="url(#LC_svg__d)" />
    </G>
  </Svg>
);

export default SvgLc;
