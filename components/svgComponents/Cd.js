import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgCd = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="CD_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="CD_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#158AFF" />
        <Stop offset="100%" stopColor="#007FFF" />
      </LinearGradient>
      <LinearGradient id="CD_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#CE1120" />
        <Stop offset="100%" stopColor="#E11B2B" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#CD_svg__a)" />
      <Path
        d="M4.294 1.443h21v15h-21z"
        fill="url(#CD_svg__b)"
        transform="translate(-4.29 -1.44)"
      />
      <Path
        d="M24.273 3.906l-25.84 13.166-2.723-5.346L21.55-1.44z"
        fill="#FDD216"
      />
      <Path
        d="M.057 7.074h29v4h-29z"
        fill="url(#CD_svg__c)"
        transform="rotate(153 12.585 7.839)"
      />
      <Path
        d="M3.504 4.478l-1.47 1.047.542-1.721-1.45-1.074 1.805-.016.573-1.711.573 1.71 1.804.017-1.45 1.074.542 1.721z"
        fill="#FDD216"
      />
    </G>
  </Svg>
);

export default SvgCd;
