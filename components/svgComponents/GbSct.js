import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgGbSct = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GB-SCT_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GB-SCT_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1479D0" />
        <Stop offset="100%" stopColor="#0A68BA" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GB-SCT_svg__a)" />
      <Path d="M0-.003h21v15H0z" fill="url(#GB-SCT_svg__b)" />
      <Path
        d="M10.5 6.291L-.962-1.44-2.08.218l10.792 7.28-10.792 7.279 1.118 1.658L10.5 8.704l11.462 7.73 1.118-1.657-10.791-7.28L23.08.218 21.962-1.44 10.5 6.291z"
        fill="url(#GB-SCT_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgGbSct;
