import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgCn = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="CN_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="CN_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F1361D" />
        <Stop offset="100%" stopColor="#DF2910" />
      </LinearGradient>
      <LinearGradient
        id="CN_svg__c"
        x1="37.059%"
        x2="62.941%"
        y1="1.704%"
        y2="98.296%"
      >
        <Stop offset="0%" stopColor="#FFDC42" />
        <Stop offset="100%" stopColor="#FDD217" />
      </LinearGradient>
      <LinearGradient id="CN_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFDC42" />
        <Stop offset="100%" stopColor="#FDD217" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#CN_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#CN_svg__b)" />
      <Path
        d="M10.13 4.483l-.63.383.017-.737-.383-.629.737.017.629-.383-.017.737.383.629-.737-.017zM8.28 2.449l-.726-.123.497-.545.123-.727.545.497.727.123-.497.545-.123.727-.545-.497zm.366 6.53l-.615.404-.01-.737-.404-.615.737-.01.615-.404.01.737.404.615-.737.01zm1.267-1.987l-.732.082.327-.66-.082-.733.66.327.733-.082-.327.66.082.733-.66-.327z"
        fill="url(#CN_svg__c)"
      />
      <Path
        d="M5 6.17L3.237 7.427l.65-2.065-1.74-1.29 2.165-.019L5 2l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
        fill="url(#CN_svg__d)"
      />
    </G>
  </Svg>
);

export default SvgCn;
