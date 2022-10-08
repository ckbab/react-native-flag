import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgSr = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SR_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SR_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#43924C" />
        <Stop offset="100%" stopColor="#3A7E42" />
      </LinearGradient>
      <LinearGradient id="SR_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#CD153A" />
        <Stop offset="100%" stopColor="#B31031" />
      </LinearGradient>
      <LinearGradient id="SR_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F5D24B" />
        <Stop offset="100%" stopColor="#ECC736" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SR_svg__a)" />
      <Path d="M0 0h21v3H0zM0 12h21v3H0z" fill="url(#SR_svg__b)" />
      <Path d="M0 3h21v9H0z" fill="url(#SR_svg__a)" />
      <Path d="M0 5h21v5H0z" fill="url(#SR_svg__c)" />
      <Path
        d="M10.5 8.775l-1.47.998.495-1.706-1.403-1.09 1.776-.056.602-1.671.602 1.67 1.776.057-1.403 1.09.494 1.706z"
        fill="url(#SR_svg__d)"
      />
    </G>
  </Svg>
);

export default SvgSr;
