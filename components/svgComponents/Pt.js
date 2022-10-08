import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgPt = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="PT_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="PT_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FF2936" />
        <Stop offset="100%" stopColor="#FD0D1B" />
      </LinearGradient>
      <LinearGradient id="PT_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#128415" />
        <Stop offset="100%" stopColor="#0A650C" />
      </LinearGradient>
      <LinearGradient id="PT_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FAF94F" />
        <Stop offset="100%" stopColor="#F8F736" />
      </LinearGradient>
      <LinearGradient id="PT_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1D50B5" />
        <Stop offset="100%" stopColor="#15439D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#PT_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#PT_svg__b)" />
      <Path d="M0 0h8v15H0z" fill="url(#PT_svg__c)" />
      <Path
        d="M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
        fill="url(#PT_svg__d)"
        fillRule="nonzero"
      />
      <Path
        d="M7 6.256A.25.25 0 0 1 7.245 6h1.51A.25.25 0 0 1 9 6.256V8A.997.997 0 0 1 8 9c-.552 0-1-.443-1-.999V6.256z"
        fill="url(#PT_svg__a)"
      />
      <Path
        d="M8 8c.276 0 .5-.724.5-1a.5.5 0 0 0-1 0c0 .276.224 1 .5 1z"
        fill="url(#PT_svg__e)"
      />
    </G>
  </Svg>
);

export default SvgPt;
