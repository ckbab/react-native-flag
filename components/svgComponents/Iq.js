import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgIq = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="IQ_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="IQ_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DF1E35" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
      <LinearGradient id="IQ_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#IQ_svg__a)" />
      <Path d="M0 0h21v5H0z" fill="url(#IQ_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#IQ_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#IQ_svg__a)" />
      <Path
        d="M14 6.256c0-.141.092-.21.232-.14l.536.268a.444.444 0 0 1 .232.365V8.75a.247.247 0 0 1-.252.249h-.496A.254.254 0 0 1 14 8.744V6.256zM8 6.256c0-.141.092-.21.232-.14l.536.268A.444.444 0 0 1 9 6.749V8.75A.247.247 0 0 1 8.748 9h-.496A.254.254 0 0 1 8 8.744V6.256zM12 6.749c0-.138.092-.295.232-.365l.536-.268c.128-.064.232-.002.232.14v2.488a.25.25 0 0 1-.252.256h-.496A.248.248 0 0 1 12 8.751V6.75z"
        fill="#0F7A40"
      />
      <Path
        d="M10 7.748c0-.137.092-.294.232-.364l.536-.268c.128-.064.232-.004.232.126v.803h1.5V9h-2.248A.255.255 0 0 1 10 8.752V7.748zM6 7.748c0-.137.092-.294.232-.364l.536-.268c.128-.064.232-.004.232.126v.803h1.5V9H6.252A.255.255 0 0 1 6 8.752V7.748z"
        fill="#0F7A40"
      />
    </G>
  </Svg>
);

export default SvgIq;
