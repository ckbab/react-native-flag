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

const SvgPm = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="PM_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="PM_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#138E16" />
        <Stop offset="100%" stopColor="#0F7F12" />
      </LinearGradient>
      <LinearGradient id="PM_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#26A7DC" />
        <Stop offset="100%" stopColor="#1B94C6" />
      </LinearGradient>
      <LinearGradient id="PM_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FBCD3F" />
        <Stop offset="100%" stopColor="#FFCE2F" />
      </LinearGradient>
      <LinearGradient id="PM_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F03633" />
        <Stop offset="100%" stopColor="#D82A28" />
      </LinearGradient>
      <Path d="M0 0h7v5H0z" id="PM_svg__e" />
      <LinearGradient
        id="PM_svg__g"
        x1="82.842%"
        x2="20.426%"
        y1="18.137%"
        y2="78.479%"
      >
        <Stop offset="0%" stopColor="#2AA854" />
        <Stop offset="100%" stopColor="#219447" />
      </LinearGradient>
      <LinearGradient id="PM_svg__i" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="PM_svg__j" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#D7181D" />
        <Stop offset="100%" stopColor="#C60E13" />
      </LinearGradient>
      <LinearGradient id="PM_svg__k" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FBCD3F" />
        <Stop offset="100%" stopColor="#FECB2F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#PM_svg__a)" />
      <Path d="M0 10h21v5H0z" fill="url(#PM_svg__b)" />
      <Path d="M0 15h21V0H0z" fill="url(#PM_svg__c)" />
      <Path
        d="M17.326 6.429C18.353 6.176 19 6.109 19 7c0 1.657-2.239 3-5 3S9 8.657 9 7c0-.89.647-.824 1.674-.571a4.114 4.114 0 0 1-.161-.563c-.287-1.35.137-2.584.947-2.757.81-.172 1.7.783 1.987 2.134.136.636.113 1.247-.034 1.733a7.414 7.414 0 0 0 1.174 0c-.147-.486-.17-1.097-.034-1.733.287-1.35 1.176-2.306 1.987-2.134.81.173 1.234 1.407.947 2.757a4.114 4.114 0 0 1-.161.563z"
        fill="url(#PM_svg__d)"
      />
      <Path
        d="M15.776 12.947a.5.5 0 0 0 .448 0l2-1a.5.5 0 0 0-.448-.894L16 11.94l-1.776-.888a.5.5 0 0 0-.448 0L12 11.94l-1.776-.888a.5.5 0 0 0-.448.894l2 1a.5.5 0 0 0 .448 0L14 12.06l1.776.888z"
        fill="url(#PM_svg__a)"
        fillRule="nonzero"
      />
      <Mask fill="#fff" id="PM_svg__h">
        <Use xlinkHref="#PM_svg__e" />
      </Mask>
      <Use fill="url(#PM_svg__f)" xlinkHref="#PM_svg__e" />
      <Path
        d="M4 2v-4H3v4h-4v1h4v4h1V3h4V2H4z"
        fill="url(#PM_svg__g)"
        mask="url(#PM_svg__h)"
        transform="rotate(-45 3.5 2.5)"
      />
      <Path
        d="M4 2v-3H3v3H0v1h3v3h1V3h3V2H4z"
        fill="url(#PM_svg__a)"
        mask="url(#PM_svg__h)"
      />
      <Path d="M0 5h7v5H0z" fill="url(#PM_svg__a)" />
      <Path
        d="M1.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-1 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="url(#PM_svg__i)"
      />
      <Path d="M0 10h7v5H0z" fill="url(#PM_svg__j)" />
      <Path
        d="M3.5 12c-1.38 0-2.5-.224-2.5-.5s1.12-.5 2.5-.5 2.5.224 2.5.5-1.12.5-2.5.5zm0 2c-1.38 0-2.5-.224-2.5-.5s1.12-.5 2.5-.5 2.5.224 2.5.5-1.12.5-2.5.5z"
        fill="url(#PM_svg__k)"
      />
    </G>
  </Svg>
);

export default SvgPm;
