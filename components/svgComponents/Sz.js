import React from "react";
import Svg, {
  Circle,
  Defs,
  Ellipse,
  G,
  LinearGradient,
  Mask,
  Path,
  Stop,
  Use,
} from "react-native-svg";

const SvgSz = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SZ_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SZ_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#486BCA" />
        <Stop offset="100%" stopColor="#3E5FBA" />
      </LinearGradient>
      <LinearGradient id="SZ_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFDF20" />
        <Stop offset="100%" stopColor="#FFDA00" />
      </LinearGradient>
      <LinearGradient id="SZ_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#CF1615" />
        <Stop offset="100%" stopColor="#B20D0C" />
      </LinearGradient>
      <Ellipse cx={4.5} cy={2.5} id="SZ_svg__e" rx={4.5} ry={2.5} />
      <LinearGradient id="SZ_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SZ_svg__a)" />
      <Path d="M0 0h21v3H0zM0 12h21v3H0z" fill="url(#SZ_svg__b)" />
      <Path d="M0 3h21v9H0z" fill="url(#SZ_svg__c)" />
      <Path d="M0 4h21v7H0z" fill="url(#SZ_svg__d)" />
      <G transform="translate(6 5)">
        <Mask fill="#fff" id="SZ_svg__g">
          <Use xlinkHref="#SZ_svg__e" />
        </Mask>
        <Use fill="url(#SZ_svg__a)" xlinkHref="#SZ_svg__e" />
        <Path
          d="M0 0h5v5H1z"
          fill="url(#SZ_svg__f)"
          mask="url(#SZ_svg__g)"
          transform="matrix(-1 0 0 1 5 0)"
        />
        <Circle cx={5.5} cy={2.5} fill="#1A1A1A" mask="url(#SZ_svg__g)" r={1} />
        <Circle cx={3.5} cy={2.5} fill="#F6F6F6" mask="url(#SZ_svg__g)" r={1} />
      </G>
    </G>
  </Svg>
);

export default SvgSz;
