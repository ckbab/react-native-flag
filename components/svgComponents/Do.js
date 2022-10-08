import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgDo = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="DO_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="DO_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#083D7A" />
        <Stop offset="100%" stopColor="#032F61" />
      </LinearGradient>
      <LinearGradient id="DO_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DF1E35" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#DO_svg__a)" />
      <Path d="M0 0h9v6H0zM12 9h9v6h-9z" fill="url(#DO_svg__b)" />
      <Path d="M0 9h9v6H0zM12 0h9v6h-9z" fill="url(#DO_svg__c)" />
      <Path d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" fill="url(#DO_svg__a)" />
      <Path
        d="M9.44 6.44a1.5 1.5 0 0 0 2.12 2.12 1.5 1.5 0 0 0 0-2.12"
        fill="#C93127"
        fillOpacity={0.2}
      />
      <Circle cx={10.5} cy={7.5} fill="#042F60" r={1} />
      <Path
        d="M11.56 8.56a1.5 1.5 0 0 1-2.12-2.12l.353.353a1 1 0 1 0 1.414 0l.354-.354a1.5 1.5 0 0 1 0 2.122zm0 0a1.5 1.5 0 0 1-2.12-2.12l.353.353a1 1 0 1 0 1.414 0l.354-.354a1.5 1.5 0 0 1 0 2.122z"
        fill="#0F6D1A"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgDo;
