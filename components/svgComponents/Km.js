import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgKm = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="KM_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="KM_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFCB49" />
        <Stop offset="100%" stopColor="#FFC638" />
      </LinearGradient>
      <LinearGradient id="KM_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DC1D34" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
      <LinearGradient id="KM_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#4985D4" />
        <Stop offset="100%" stopColor="#3D77C2" />
      </LinearGradient>
      <LinearGradient id="KM_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#4BA343" />
        <Stop offset="100%" stopColor="#408D39" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#KM_svg__a)" />
      <Path d="M0 0h21v4H0z" fill="url(#KM_svg__b)" />
      <Path d="M0 7h21v4H0z" fill="url(#KM_svg__c)" />
      <Path d="M0 11h21v4H0z" fill="url(#KM_svg__d)" />
      <Path d="M0 4h21v3H0z" fill="url(#KM_svg__a)" />
      <Path d="M0 15l10-7.5L0 0z" fill="url(#KM_svg__e)" />
      <Path
        d="M4.75 4.595a3 3 0 1 0 0 5.811 3.001 3.001 0 0 1 0-5.811zM5.5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="url(#KM_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgKm;
