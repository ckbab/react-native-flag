import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgGg = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GG_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GG_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F33349" />
        <Stop offset="100%" stopColor="#E51D34" />
      </LinearGradient>
      <LinearGradient id="GG_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FCE24C" />
        <Stop offset="100%" stopColor="#F9DC38" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GG_svg__a)" />
      <Path d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" fill="url(#GG_svg__b)" />
      <Path
        d="M10 8v4l-.5 1h2l-.5-1V8h4l1 .5v-2L15 7h-4V3l.5-1h-2l.5 1v4H6l-1-.5v2L6 8h4z"
        fill="url(#GG_svg__c)"
      />
    </G>
  </Svg>
);

export default SvgGg;
