import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgIn = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="IN_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="IN_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFA44A" />
        <Stop offset="100%" stopColor="#FF9934" />
      </LinearGradient>
      <LinearGradient id="IN_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1A9F0B" />
        <Stop offset="100%" stopColor="#138806" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#IN_svg__a)" />
      <Path d="M0 0h21v5H0z" fill="url(#IN_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#IN_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#IN_svg__a)" />
      <Circle cx={10.5} cy={7.5} fill="#181A93" fillOpacity={0.15} r={1.5} />
      <Path
        d="M10.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
        fill="#181A93"
        fillRule="nonzero"
      />
      <Circle cx={10.5} cy={7.5} fill="#181A93" r={1} />
    </G>
  </Svg>
);

export default SvgIn;
