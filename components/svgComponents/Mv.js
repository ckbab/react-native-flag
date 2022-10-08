import React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";

const SvgMv = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="MV_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="MV_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F32249" />
        <Stop offset="100%" stopColor="#D01739" />
      </LinearGradient>
      <LinearGradient id="MV_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#15A04F" />
        <Stop offset="100%" stopColor="#0F7E3D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#MV_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#MV_svg__b)" />
      <Rect fill="url(#MV_svg__c)" height={9} rx={0.5} width={15} x={3} y={3} />
      <Path
        d="M12.25 4.08a3.5 3.5 0 1 0 0 6.839 3.501 3.501 0 0 1 0-6.838z"
        fill="url(#MV_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgMv;
