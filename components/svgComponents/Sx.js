import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgSx = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SX_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SX_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0740AA" />
        <Stop offset="100%" stopColor="#012F85" />
      </LinearGradient>
      <LinearGradient id="SX_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F02C33" />
        <Stop offset="100%" stopColor="#D82027" />
      </LinearGradient>
      <LinearGradient id="SX_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E72C33" />
        <Stop offset="100%" stopColor="#D82027" />
      </LinearGradient>
      <LinearGradient id="SX_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#78C1F0" />
        <Stop offset="100%" stopColor="#67B1E0" />
      </LinearGradient>
      <LinearGradient id="SX_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F7E14B" />
        <Stop offset="100%" stopColor="#F7DF3E" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SX_svg__a)" />
      <Path d="M0 7h21v8H0z" fill="url(#SX_svg__b)" />
      <Path d="M0 0h21v7H0z" fill="url(#SX_svg__c)" />
      <Path d="M0 0l10 7.5L0 15z" fill="url(#SX_svg__a)" />
      <Path
        d="M1.5 7V5.506A.997.997 0 0 1 2.495 4.5h2.01c.55 0 .995.457.995 1.006V7c0 .845-.384 1.447-1.003 1.798a2.304 2.304 0 0 1-1.03.3 2.312 2.312 0 0 1-.964-.3C1.884 8.447 1.5 7.845 1.5 7z"
        fill="url(#SX_svg__d)"
        fillRule="nonzero"
      />
      <Path
        d="M2 7V5.506c0-.28.216-.506.495-.506h2.01c.273 0 .495.232.495.506V7c0 1.5-1.5 1.6-1.5 1.6S2 8.5 2 7z"
        fill="url(#SX_svg__e)"
      />
      <Path d="M3 6.5l.5-.5.5.5v1H3z" fill="#FFF" />
      <Path
        d="M1.001 9.368A3.389 3.389 0 0 0 3.5 10.5c.948 0 1.915-.448 2.521-1.162a.5.5 0 0 0-.762-.647A2.395 2.395 0 0 1 3.5 9.5a2.39 2.39 0 0 1-1.743-.787.5.5 0 1 0-.756.655z"
        fill="#F9D835"
        fillRule="nonzero"
      />
      <Circle cx={3.5} cy={4.5} fill="url(#SX_svg__f)" r={1} />
    </G>
  </Svg>
);

export default SvgSx;
