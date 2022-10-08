import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgLs = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="LS_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="LS_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0C33B8" />
        <Stop offset="100%" stopColor="#05279D" />
      </LinearGradient>
      <LinearGradient id="LS_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1DB158" />
        <Stop offset="100%" stopColor="#149447" />
      </LinearGradient>
      <LinearGradient id="LS_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#LS_svg__a)" />
      <Path d="M0 0h21v5H0z" fill="url(#LS_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#LS_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#LS_svg__a)" />
      <Path
        d="M10 7.5l.342-1.025c.087-.263.228-.266.316 0L11 7.5l.861 1.291c.077.116.057.279-.055.356 0 0-.306.353-1.306.353s-1.306-.353-1.306-.353a.27.27 0 0 1-.055-.356L10 7.5z"
        fill="url(#LS_svg__d)"
      />
      <Path
        d="M10.5 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 0c.276 0 .5-.724.5-1a.5.5 0 1 0-1 0c0 .276.224 1 .5 1z"
        fill="#242424"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgLs;
