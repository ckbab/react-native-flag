import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgSg = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SG_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SG_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E12237" />
        <Stop offset="100%" stopColor="#CE1126" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SG_svg__a)" />
      <Path d="M0 0h21v8H0z" fill="url(#SG_svg__b)" />
      <Path
        d="M0 8h21v7H0zM6.874 1.657a2.5 2.5 0 1 0 0 4.686 3 3 0 1 1 0-4.686zM5.5 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm1 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm1-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="url(#SG_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgSg;
