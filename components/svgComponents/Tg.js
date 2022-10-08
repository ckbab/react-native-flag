import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgTg = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="TG_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="TG_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD44D" />
        <Stop offset="100%" stopColor="#FFCD2F" />
      </LinearGradient>
      <LinearGradient id="TG_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#159A74" />
        <Stop offset="100%" stopColor="#0C6A4F" />
      </LinearGradient>
      <LinearGradient id="TG_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#ED1F45" />
        <Stop offset="100%" stopColor="#D01739" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#TG_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#TG_svg__b)" />
      <Path
        d="M9 0h12v3H9V0zm0 6h12v3H9V6zm-9 6h21v3H0v-3z"
        fill="url(#TG_svg__c)"
      />
      <Path d="M0 0h9v9H0z" fill="url(#TG_svg__d)" />
      <Path
        d="M4.5 5.67L2.737 6.927l.65-2.065-1.74-1.29 2.165-.019L4.5 1.5l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
        fill="url(#TG_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgTg;
