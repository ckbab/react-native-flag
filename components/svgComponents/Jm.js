import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgJm = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="JM_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="JM_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1DBE4F" />
        <Stop offset="100%" stopColor="#159B3F" />
      </LinearGradient>
      <LinearGradient id="JM_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="JM_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD646" />
        <Stop offset="100%" stopColor="#FED02F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#JM_svg__a)" />
      <Path d="M0-.003h21v15H0z" fill="url(#JM_svg__b)" />
      <Path d="M0-.003l9 7.5-9 7.5z" fill="url(#JM_svg__c)" />
      <Path
        d="M12-.003l9 7.5-9 7.5z"
        fill="url(#JM_svg__c)"
        transform="matrix(-1 0 0 1 33 0)"
      />
      <Path
        d="M10.5 6.291L-.962-1.44-2.08.218l10.792 7.28-10.792 7.279 1.118 1.658L10.5 8.704l11.462 7.73 1.118-1.657-10.791-7.28L23.08.218 21.962-1.44 10.5 6.291z"
        fill="url(#JM_svg__d)"
      />
    </G>
  </Svg>
);

export default SvgJm;
