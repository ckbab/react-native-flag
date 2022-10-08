import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgTt = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="TT_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="TT_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#ED233C" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
      <LinearGradient id="TT_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#TT_svg__a)" />
      <Path d="M-.004.005h21v15h-21z" fill="url(#TT_svg__b)" />
      <Path
        d="M23-1l-7.144-3.06-15.1 17.995L-1.5 16l7.653 3.07L20.977 1.403z"
        fill="url(#TT_svg__a)"
        transform="matrix(-1 0 0 1 21.5 0)"
      />
      <Path
        d="M3.09 20.22L21.731-1.997l-3.83-3.214L-.74 17.005l3.83 3.214z"
        fill="url(#TT_svg__c)"
        transform="matrix(-1 0 0 1 20.991 0)"
      />
    </G>
  </Svg>
);

export default SvgTt;
