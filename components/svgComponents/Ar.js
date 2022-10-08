import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgAr = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="AR_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="AR_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#88BBE8" />
        <Stop offset="100%" stopColor="#76ADDD" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#AR_svg__a)" />
      <Path d="M0 0h21v5H0zM0 10h21v5H0z" fill="url(#AR_svg__b)" />
      <Path d="M0 5h21v5H0z" fill="url(#AR_svg__a)" />
      <Path
        d="M10.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        fill="#DB7A2C"
        fillRule="nonzero"
      />
      <Circle cx={10.5} cy={7.5} fill="#F4B32E" r={1.5} />
    </G>
  </Svg>
);

export default SvgAr;
