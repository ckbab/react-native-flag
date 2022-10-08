import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgMa = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="MA_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="MA_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E33B44" />
        <Stop offset="100%" stopColor="#C02A32" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#MA_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#MA_svg__b)" />
      <Path
        d="M10.5 9.255l-2.645 1.886.976-3.099L6.22 6.11l3.247-.029L10.5 3l1.032 3.08 3.248.03-2.61 1.932.975 3.099L10.5 9.255zm0-1.228l.794.566-.293-.93.784-.58-.975-.01-.31-.924-.31.925-.975.008.784.58-.293.931.794-.566z"
        fill="#0A6135"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgMa;
