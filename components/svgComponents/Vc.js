import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgVc = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="VC_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="VC_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#08C47A" />
        <Stop offset="100%" stopColor="#009F60" />
      </LinearGradient>
      <LinearGradient id="VC_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0C87E1" />
        <Stop offset="100%" stopColor="#0073C7" />
      </LinearGradient>
      <LinearGradient id="VC_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD147" />
        <Stop offset="100%" stopColor="#FECA2F" />
      </LinearGradient>
      <LinearGradient id="VC_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#00C778" />
        <Stop offset="100%" stopColor="#009F60" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#VC_svg__a)" />
      <Path d="M10 0h11v15H10z" fill="url(#VC_svg__b)" />
      <Path d="M0 0h7v15H0z" fill="url(#VC_svg__c)" />
      <Path d="M6 0h9v15H6z" fill="url(#VC_svg__d)" />
      <Path
        d="M11 6l1.5-3L14 6l-1.5 3L11 6zM7 6l1.5-3L10 6 8.5 9 7 6zm2 4l1.5-3 1.5 3-1.5 3L9 10z"
        fill="url(#VC_svg__e)"
      />
    </G>
  </Svg>
);

export default SvgVc;
