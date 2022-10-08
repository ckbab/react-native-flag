import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgEr = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="ER_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="ER_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#29C53F" />
        <Stop offset="100%" stopColor="#21AC35" />
      </LinearGradient>
      <LinearGradient id="ER_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#579DED" />
        <Stop offset="100%" stopColor="#458BDB" />
      </LinearGradient>
      <LinearGradient id="ER_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F42D56" />
        <Stop offset="100%" stopColor="#E9103D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#ER_svg__a)" />
      <Path d="M0 0h21v7.5H0z" fill="url(#ER_svg__b)" />
      <Path d="M0 7.5h21v8H0z" fill="url(#ER_svg__c)" />
      <Path d="M0 15l21-7.5L0 0z" fill="url(#ER_svg__d)" />
      <Path
        d="M6.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"
        fill="#FFC63C"
        fillRule="nonzero"
      />
      <Circle cx={6} cy={6.5} fill="#FFC63C" r={1} />
      <Circle cx={7} cy={7} fill="#FFC63C" r={1} />
      <Circle cx={6.5} cy={6} fill="#FFC63C" r={1} />
      <Circle cx={6} cy={7.5} fill="#FFC63C" r={1} />
      <Circle cx={7} cy={8} fill="#FFC63C" r={1} />
      <Circle cx={6} cy={8.5} fill="#FFC63C" r={1} />
      <Circle cx={7} cy={9} fill="#FFC63C" r={1} />
    </G>
  </Svg>
);

export default SvgEr;
