import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgAw = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="AW_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="AW_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#5098EA" />
        <Stop offset="100%" stopColor="#458BDB" />
      </LinearGradient>
      <LinearGradient id="AW_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E82045" />
        <Stop offset="100%" stopColor="#D01739" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#AW_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#AW_svg__b)" />
      <Path
        d="M1.803 4.96a.5.5 0 0 1 0-.92l1.566-.67.671-1.567a.5.5 0 0 1 .92 0l.67 1.566 1.567.671a.5.5 0 0 1 0 .92l-1.566.67-.671 1.567a.5.5 0 0 1-.92 0l-.67-1.566-1.567-.671z"
        fill="url(#AW_svg__a)"
        fillRule="nonzero"
      />
      <Path
        d="M3.75 5.25L2 4.5l1.75-.75L4.5 2l.75 1.75L7 4.5l-1.75.75L4.5 7z"
        fill="url(#AW_svg__c)"
      />
      <Path d="M0 11h21v1H0zM0 9h21v1H0z" fill="#F9D536" />
    </G>
  </Svg>
);

export default SvgAw;
