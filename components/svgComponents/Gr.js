import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgGr = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GR_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GR_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1C6DC1" />
        <Stop offset="100%" stopColor="#1660AD" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GR_svg__a)" />
      <Path
        d="M0 0h4v4H0V0zm6 0h4v4H6V0zm4 0h11v2H10V0zm0 4h11v2H10V4zm0 4h11v2H10V8zM0 12h21v2H0v-2zm6-6h4v4H6V6zM0 6h4v4H0V6z"
        fill="url(#GR_svg__b)"
      />
    </G>
  </Svg>
);

export default SvgGr;
