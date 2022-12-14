import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Mask,
  Path,
  Stop,
  Use,
} from "react-native-svg";

const SvgBm = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BM_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BM_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DC1F37" />
        <Stop offset="100%" stopColor="#CF142C" />
      </LinearGradient>
      <LinearGradient id="BM_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#042C90" />
        <Stop offset="100%" stopColor="#00247E" />
      </LinearGradient>
      <LinearGradient id="BM_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DB1E36" />
        <Stop offset="100%" stopColor="#D51931" />
      </LinearGradient>
      <Path d="M0 2.5V0h4v2.5C4 4 2 5 2 5S0 4 0 2.5z" id="BM_svg__e" />
      <LinearGradient id="BM_svg__g" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E20B0C" />
        <Stop offset="100%" stopColor="#D40001" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BM_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#BM_svg__b)" />
      <Path d="M0 0h9v7H0z" fill="url(#BM_svg__c)" />
      <Path
        d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
        fill="url(#BM_svg__a)"
        fillRule="nonzero"
      />
      <Path
        d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
        fill="url(#BM_svg__d)"
      />
      <Path
        d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5H0z"
        fill="url(#BM_svg__a)"
      />
      <Path d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" fill="url(#BM_svg__d)" />
      <G transform="translate(13 5)">
        <Mask fill="#fff" id="BM_svg__f">
          <Use xlinkHref="#BM_svg__e" />
        </Mask>
        <Use fill="url(#BM_svg__a)" xlinkHref="#BM_svg__e" />
        <Circle cx={2} cy={3} fill="#65B5D2" mask="url(#BM_svg__f)" r={1} />
        <Path
          d="M2 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM1 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
          fill="url(#BM_svg__g)"
          mask="url(#BM_svg__f)"
        />
        <Path d="M0 4h4v1H0z" fill="#2F8F22" mask="url(#BM_svg__f)" />
      </G>
    </G>
  </Svg>
);

export default SvgBm;
