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

const SvgPf = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="PF_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="PF_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E02639" />
        <Stop offset="100%" stopColor="#CA1A2C" />
      </LinearGradient>
      <LinearGradient id="PF_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DC2235" />
        <Stop offset="100%" stopColor="#CA1A2C" />
      </LinearGradient>
      <Circle cx={2.5} cy={2.5} id="PF_svg__d" r={2.5} />
      <LinearGradient id="PF_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFA135" />
        <Stop offset="100%" stopColor="#FD9C2D" />
      </LinearGradient>
      <LinearGradient id="PF_svg__g" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DF2034" />
        <Stop offset="100%" stopColor="#CA1A2C" />
      </LinearGradient>
      <LinearGradient id="PF_svg__h" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0B4BAD" />
        <Stop offset="100%" stopColor="#08429A" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#PF_svg__a)" />
      <Path d="M0 0h21v4H0z" fill="url(#PF_svg__b)" />
      <Path d="M0 11h21v4H0z" fill="url(#PF_svg__c)" />
      <Path d="M0 4h21v7H0z" fill="url(#PF_svg__a)" />
      <G transform="translate(8 5)">
        <Mask fill="#fff" id="PF_svg__f">
          <Use xlinkHref="#PF_svg__d" />
        </Mask>
        <Path d="M0 0h5v2.5H0z" fill="url(#PF_svg__e)" mask="url(#PF_svg__f)" />
        <Path d="M1 1.5h3l-.5 1h-2z" fill="#FFF" mask="url(#PF_svg__f)" />
        <Path
          d="M2 0h1v1.495A.508.508 0 0 1 2.5 2a.495.495 0 0 1-.5-.505V0zM1 1s.75 1.5 1.5 1.5S4 1 4 1v1c0 .552-.443 1-.999 1H1.999A.997.997 0 0 1 1 2V1z"
          fill="url(#PF_svg__g)"
          mask="url(#PF_svg__f)"
        />
        <Path d="M0 3h5v2H0z" fill="url(#PF_svg__h)" mask="url(#PF_svg__f)" />
        <Path d="M0 3.5h5V4H0z" fill="#FFF" mask="url(#PF_svg__f)" />
      </G>
    </G>
  </Svg>
);

export default SvgPf;
