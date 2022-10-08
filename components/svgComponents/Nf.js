import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgNf = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="NF_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="NF_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#219646" />
        <Stop offset="100%" stopColor="#197837" />
      </LinearGradient>
      <LinearGradient id="NF_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#259D4B" />
        <Stop offset="100%" stopColor="#197837" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#NF_svg__a)" />
      <Path d="M10 0h11v15H10zM0 0h7v15H0z" fill="url(#NF_svg__b)" />
      <Path d="M6 0h9v15H6z" fill="url(#NF_svg__a)" />
      <Path
        d="M9.444 4.003l.422-1.52A.705.705 0 0 1 10.5 2c.276 0 .562.222.634.484l.422 1.52a.5.5 0 1 0 .248.893l.31 1.116a.501.501 0 0 0-.614.487.5.5 0 0 0 .85.358l.325 1.174a.499.499 0 1 0 .217.779L13.5 11H11v2h-1v-2H7.5l.608-2.19a.5.5 0 1 0 .217-.778l.326-1.174A.498.498 0 0 0 9.5 6.5a.5.5 0 0 0-.615-.487l.31-1.116a.5.5 0 1 0 .248-.893z"
        fill="url(#NF_svg__c)"
      />
    </G>
  </Svg>
);

export default SvgNf;
