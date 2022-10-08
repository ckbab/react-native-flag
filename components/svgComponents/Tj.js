import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgTj = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="TJ_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="TJ_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#D9101C" />
        <Stop offset="100%" stopColor="#CA0814" />
      </LinearGradient>
      <LinearGradient id="TJ_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0F7811" />
        <Stop offset="100%" stopColor="#0A650C" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#TJ_svg__a)" />
      <Path d="M0 0h21v5H0z" fill="url(#TJ_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#TJ_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#TJ_svg__a)" />
      <Path
        d="M10.066 8A3.266 3.266 0 0 1 10 7.5a.5.5 0 1 1 1 0c0 .09-.024.283-.066.5h.57c.274 0 .496.232.496.5 0 .276-.216.5-.495.5h-2.01A.503.503 0 0 1 9 8.5c0-.276.216-.5.495-.5h.571zM9.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-6 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="#FAD14E"
      />
    </G>
  </Svg>
);

export default SvgTj;
