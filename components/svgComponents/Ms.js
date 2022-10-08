import React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Mask,
  Path,
  Stop,
  Use,
} from "react-native-svg";

const SvgMs = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="MS_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="MS_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#07319C" />
        <Stop offset="100%" stopColor="#00247E" />
      </LinearGradient>
      <LinearGradient id="MS_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DB1E36" />
        <Stop offset="100%" stopColor="#D51931" />
      </LinearGradient>
      <LinearGradient id="MS_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#08B9D6" />
        <Stop offset="100%" stopColor="#00A3BE" />
      </LinearGradient>
      <Path
        d="M0 3.5V1c0-.553.444-1 1-1h3c.552 0 1 .441 1 1v2.5C5 6 2.5 7 2.5 7S0 6 0 3.5z"
        id="MS_svg__d"
      />
      <LinearGradient id="MS_svg__g" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#MS_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#MS_svg__b)" />
      <Path
        d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
        fill="url(#MS_svg__a)"
        fillRule="nonzero"
      />
      <Path
        d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
        fill="url(#MS_svg__c)"
      />
      <Path
        d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5H0z"
        fill="url(#MS_svg__a)"
      />
      <Path d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" fill="url(#MS_svg__c)" />
      <G transform="translate(13 4)">
        <Mask fill="#fff" id="MS_svg__f">
          <Use xlinkHref="#MS_svg__d" />
        </Mask>
        <Use fill="url(#MS_svg__e)" xlinkHref="#MS_svg__d" />
        <Path d="M0 5h5v2H0z" fill="#A63D09" mask="url(#MS_svg__f)" />
        <Path
          d="M3 2V1H2v1H1v1h1v2h1V3h1V2H3z"
          fill="url(#MS_svg__g)"
          mask="url(#MS_svg__f)"
        />
      </G>
    </G>
  </Svg>
);

export default SvgMs;
