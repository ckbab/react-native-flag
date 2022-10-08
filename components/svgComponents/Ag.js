import React from "react";
import Svg, {
  Defs,
  Ellipse,
  G,
  LinearGradient,
  Mask,
  Path,
  Stop,
  Use,
} from "react-native-svg";

const SvgAg = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="AG_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="AG_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E2243B" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
      <LinearGradient id="AG_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <Path d="M0 0h21L10.5 15z" id="AG_svg__c" />
      <LinearGradient id="AG_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFCF3C" />
        <Stop offset="100%" stopColor="#FECB2F" />
      </LinearGradient>
      <LinearGradient id="AG_svg__g" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1984D8" />
        <Stop offset="100%" stopColor="#1175C4" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#AG_svg__a)" />
      <Path
        d="M8.5 7a2 2 0 0 0 .998 1.731m2.078-.045c.556-.355.924-.978.924-1.686"
        opacity={0.75}
      />
      <Ellipse
        cx={10.5}
        cy={6.5}
        fill="#FFF"
        fillOpacity={0.5}
        rx={1}
        ry={1.5}
      />
      <Path d="M0 0h21v15H0z" fill="url(#AG_svg__b)" />
      <Mask fill="#fff" id="AG_svg__f">
        <Use xlinkHref="#AG_svg__c" />
      </Mask>
      <Use fill="url(#AG_svg__d)" xlinkHref="#AG_svg__c" />
      <Path
        d="M10.5 8.25l-1.722 1.907.131-2.566-2.566.131L8.25 6 6 4l2.909.5-.409-3 2 2.5 2-2.5-.409 3L15 4l-2.25 2 1.907 1.722-2.566-.131.131 2.566z"
        fill="url(#AG_svg__e)"
        mask="url(#AG_svg__f)"
      />
      <Path d="M0 6h21v4H0z" fill="url(#AG_svg__g)" mask="url(#AG_svg__f)" />
      <Path d="M0 10h21v5H0z" fill="url(#AG_svg__a)" mask="url(#AG_svg__f)" />
    </G>
  </Svg>
);

export default SvgAg;
