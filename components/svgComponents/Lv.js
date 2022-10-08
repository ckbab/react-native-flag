import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgLv = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="LV_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="LV_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#B9414B" />
        <Stop offset="100%" stopColor="#9D323B" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#LV_svg__a)" />
      <Path d="M0 0h21v6H0zM0 9h21v6H0z" fill="url(#LV_svg__b)" />
      <Path d="M0 6h21v3H0z" fill="url(#LV_svg__a)" />
    </G>
  </Svg>
);

export default SvgLv;
