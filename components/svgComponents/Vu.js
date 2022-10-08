import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgVu = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="VU_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="VU_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#27AB53" />
        <Stop offset="100%" stopColor="#219447" />
      </LinearGradient>
      <LinearGradient id="VU_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EC2547" />
        <Stop offset="100%" stopColor="#CE1A39" />
      </LinearGradient>
      <LinearGradient id="VU_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="VU_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD449" />
        <Stop offset="100%" stopColor="#FDCD34" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#VU_svg__a)" />
      <Path d="M.2 9h21v6H.2z" fill="url(#VU_svg__b)" />
      <Path d="M.2 0h21v6H.2z" fill="url(#VU_svg__c)" />
      <Path d="M8.2 6h13v3h-13l-8 6V0l8 6z" fill="url(#VU_svg__d)" />
      <Path
        d="M6.867 7.5L-.6 1.9l-.4-.3.6-.8.4.3L7.867 7H21.2v1H7.7l.3-.1-8 6-.4.3-.6-.8.4-.3 7.467-5.6z"
        fill="url(#VU_svg__e)"
        fillRule="nonzero"
      />
      <Path
        d="M2.7 9a1.5 1.5 0 1 1 1.5-1.5c0 .727-.813 2.363-1.5 2.5-.096.02.101-1 0-1zm0-.75c.276.25.5-.474.5-.75a.5.5 0 0 0-1 0c0 .276.224 1 .5.75z"
        fill="url(#VU_svg__e)"
      />
    </G>
  </Svg>
);

export default SvgVu;
