import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgPy = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="PY_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="PY_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E33F39" />
        <Stop offset="100%" stopColor="#D32E28" />
      </LinearGradient>
      <LinearGradient id="PY_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#124BBA" />
        <Stop offset="100%" stopColor="#073DA6" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#PY_svg__a)" />
      <Path d="M0 0h21v5H0z" fill="url(#PY_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#PY_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#PY_svg__a)" />
      <Path
        d="M10.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 .5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        fill="#398153"
        fillRule="nonzero"
      />
      <Circle cx={10.5} cy={7.5} fill="#E5CF58" r={1} />
    </G>
  </Svg>
);

export default SvgPy;
