import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgUm = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="UM_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="UM_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#D02F44" />
        <Stop offset="100%" stopColor="#B12537" />
      </LinearGradient>
      <LinearGradient id="UM_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#46467F" />
        <Stop offset="100%" stopColor="#3C3C6D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#UM_svg__a)" />
      <Path
        d="M0 0h21v1H0V0zm0 2h21v1H0V2zm0 2h21v1H0V4zm0 2h21v1H0V6zm0 2h21v1H0V8zm0 2h21v1H0v-1zm0 2h21v1H0v-1zm0 2h21v1H0v-1z"
        fill="url(#UM_svg__b)"
      />
      <Path d="M0 0h9v7H0z" fill="url(#UM_svg__c)" />
      <Path
        d="M1.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-5 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm1 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm1 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm1 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="url(#UM_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgUm;
