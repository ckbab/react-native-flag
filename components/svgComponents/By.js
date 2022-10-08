import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgBy = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BY_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BY_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E54252" />
        <Stop offset="100%" stopColor="#C63442" />
      </LinearGradient>
      <LinearGradient id="BY_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#5CBE6B" />
        <Stop offset="100%" stopColor="#4EA55B" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BY_svg__a)" />
      <Path d="M0 0h21v10H0z" fill="url(#BY_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#BY_svg__c)" />
      <Path
        d="M3 12.75V15H0V0h3v2.25L2.5 3l.5.75v1.5L2.5 6l.5.75v1.5L2.5 9l.5.75v1.5l-.5.75.5.75z"
        fill="url(#BY_svg__a)"
      />
      <Path
        d="M-1.5 3l1-1.5L.5 3l-1 1.5-1-1.5zm0 3l1-1.5L.5 6l-1 1.5-1-1.5zm0 3l1-1.5L.5 9l-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zM.5 1.5l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5z"
        fill="url(#BY_svg__b)"
      />
    </G>
  </Svg>
);

export default SvgBy;
