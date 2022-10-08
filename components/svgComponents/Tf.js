import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgTf = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="TF_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="TF_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#073AB6" />
        <Stop offset="100%" stopColor="#002B93" />
      </LinearGradient>
      <LinearGradient id="TF_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F44653" />
        <Stop offset="100%" stopColor="#EE2A39" />
      </LinearGradient>
      <LinearGradient id="TF_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1035BB" />
        <Stop offset="100%" stopColor="#042396" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#TF_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#TF_svg__b)" />
      <Path
        d="M0 0h9.5v7.25c0 .138-.107.25-.254.25H0V0z"
        fill="url(#TF_svg__a)"
      />
      <Path d="M6 0h3v7H6z" fill="url(#TF_svg__c)" />
      <Path d="M0 0h3v7H0z" fill="url(#TF_svg__d)" />
      <Path d="M3 0h3v7H3z" fill="url(#TF_svg__a)" />
      <Path
        d="M13 6h5l-.5 1H16v.5h1l-.5 1H16V10h-1V7h-1.5L13 6zm4 2.5l1 1.5h-2l1-1.5zm-3 0l1 1.5h-2l1-1.5zm1.5 3l-1-1.5h2l-1 1.5zm3-3.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-6 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm1 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgTf;
