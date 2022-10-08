import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgTw = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="TW_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="TW_svg__b" x1="50%" x2="50%" y1="0%" y2="93.767%">
        <Stop offset="0%" stopColor="#FE3030" />
        <Stop offset="100%" stopColor="red" />
      </LinearGradient>
      <LinearGradient id="TW_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0909B6" />
        <Stop offset="100%" stopColor="#000096" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#TW_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#TW_svg__b)" />
      <Path d="M0 8h11V0H0z" fill="url(#TW_svg__c)" />
      <Path
        d="M5.5 5.25l-.957 1.06.073-1.426-1.426.073L4.25 4l-1.06-.957 1.426.073-.073-1.426.957 1.06.957-1.06-.073 1.426 1.426-.073L6.75 4l1.06.957-1.426-.073.073 1.426z"
        fill="url(#TW_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgTw;
