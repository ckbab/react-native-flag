import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgBh = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BH_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BH_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E7243B" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BH_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#BH_svg__b)" />
      <Path
        d="M0 15h7.5L6 14l1.5-1L6 12l1.5-1L6 10l1.5-1L6 8l1.5-1L6 6l1.5-1L6 4l1.5-1L6 2l1.5-1L6 0H0z"
        fill="url(#BH_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgBh;
