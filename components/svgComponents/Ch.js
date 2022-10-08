import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgCh = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="CH_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="CH_svg__b" x1="50%" x2="50%" y1="100%" y2="0%">
        <Stop offset="0%" stopColor="red" />
        <Stop offset="100%" stopColor="#FF3131" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#CH_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#CH_svg__b)" />
      <Path
        d="M9 9H6.256A.255.255 0 0 1 6 8.744V6.256C6 6.115 6.114 6 6.256 6H9V3.256C9 3.115 9.114 3 9.256 3h2.488c.141 0 .256.114.256.256V6h2.744c.141 0 .256.114.256.256v2.488a.255.255 0 0 1-.256.256H12v2.744a.255.255 0 0 1-.256.256H9.256A.255.255 0 0 1 9 11.744V9z"
        fill="url(#CH_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgCh;
