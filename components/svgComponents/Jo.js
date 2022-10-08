import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgJo = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="JO_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="JO_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#199E56" />
        <Stop offset="100%" stopColor="#0F7A40" />
      </LinearGradient>
      <LinearGradient id="JO_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="JO_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E6223A" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#JO_svg__a)" />
      <Path d="M0 10h21v5H0z" fill="url(#JO_svg__b)" />
      <Path d="M0 0h21v5H0z" fill="url(#JO_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#JO_svg__a)" />
      <Path d="M0 0l10 7.5L0 15z" fill="url(#JO_svg__d)" />
      <Path
        d="M3.5 8.25l-.65.601.064-.883-.876-.134.73-.5-.44-.77.847.26L3.5 6l.325.824.848-.26-.442.77.731.5-.876.134.065.883z"
        fill="url(#JO_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgJo;
