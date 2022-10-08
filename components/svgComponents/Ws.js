import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgWs = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="WS_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="WS_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E31F37" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
      <LinearGradient id="WS_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#083B9A" />
        <Stop offset="100%" stopColor="#042E7D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#WS_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#WS_svg__b)" />
      <Path d="M0 8h11V0H0z" fill="url(#WS_svg__c)" />
      <Path
        d="M5 7l-.707.207L4.5 6.5l-.207-.707L5 6l.707-.207L5.5 6.5l.207.707L5 7zm0-5l-.707.207L4.5 1.5 4.293.793 5 1l.707-.207L5.5 1.5l.207.707L5 2zM3 4.5l-.707.207L2.5 4l-.207-.707L3 3.5l.707-.207L3.5 4l.207.707L3 4.5zM7.5 4l-.707.207L7 3.5l-.207-.707L7.5 3l.707-.207L8 3.5l.207.707L7.5 4zM6.25 5.5a.25.25 0 1 1 0-.5.25.25 0 0 1 0 .5z"
        fill="url(#WS_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgWs;
