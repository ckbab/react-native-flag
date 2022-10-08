import React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  Use,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgNa = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="NA_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="NA_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0C4799" />
        <Stop offset="100%" stopColor="#05387E" />
      </LinearGradient>
      <Path d="M3.121 12.304l21-10h-21z" id="NA_svg__c" />
      <LinearGradient id="NA_svg__g" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD243" />
        <Stop offset="100%" stopColor="#FFCD2F" />
      </LinearGradient>
      <Path
        d="M6.621 6.804l-.765.848.058-1.14-1.14.057.847-.765-.847-.765 1.14.058-.058-1.14.765.847.766-.848-.058 1.14 1.14-.057-.848.765.848.765-1.14-.058.058 1.14z"
        id="NA_svg__f"
      />
      <LinearGradient id="NA_svg__j" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1BAC55" />
        <Stop offset="100%" stopColor="#149447" />
      </LinearGradient>
      <Path d="M3.121 17.304h21v-10z" id="NA_svg__i" />
      <Path
        d="M5.433 19.304L25.75 6.609 21.81.304 1.493 12.999z"
        id="NA_svg__l"
      />
      <LinearGradient id="NA_svg__m" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E52347" />
        <Stop offset="100%" stopColor="#D01739" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#NA_svg__a)" />
      <G transform="translate(-3.12 -2.3)">
        <Use fill="#000" filter="url(#NA_svg__b)" xlinkHref="#NA_svg__c" />
        <Use fill="url(#NA_svg__d)" xlinkHref="#NA_svg__c" />
      </G>
      <G transform="translate(-3.12 -2.3)">
        <Use fill="#000" filter="url(#NA_svg__e)" xlinkHref="#NA_svg__f" />
        <Use fill="url(#NA_svg__g)" xlinkHref="#NA_svg__f" />
      </G>
      <G transform="translate(-3.12 -2.3)">
        <Use fill="#000" filter="url(#NA_svg__h)" xlinkHref="#NA_svg__i" />
        <Use fill="url(#NA_svg__j)" xlinkHref="#NA_svg__i" />
      </G>
      <G transform="translate(-3.12 -2.3)">
        <Use fill="#000" filter="url(#NA_svg__k)" xlinkHref="#NA_svg__l" />
        <Use fill="url(#NA_svg__a)" xlinkHref="#NA_svg__l" />
      </G>
      <Path
        d="M2.65 19.608L27.243 4.24 24.593 0 0 15.368z"
        fill="url(#NA_svg__m)"
        transform="translate(-3.12 -2.3)"
      />
    </G>
  </Svg>
);

export default SvgNa;
