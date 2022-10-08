import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgRw = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="RW_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="RW_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#2D754D" />
        <Stop offset="100%" stopColor="#235F3E" />
      </LinearGradient>
      <LinearGradient id="RW_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#25B1EB" />
        <Stop offset="100%" stopColor="#1AA3DC" />
      </LinearGradient>
      <LinearGradient id="RW_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FAD546" />
        <Stop offset="100%" stopColor="#FAD12F" />
      </LinearGradient>
      <LinearGradient id="RW_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EDC738" />
        <Stop offset="100%" stopColor="#E5BE2A" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#RW_svg__a)" />
      <Path d="M0 11h21v4H0z" fill="url(#RW_svg__b)" />
      <Path d="M0 0h21v7H0z" fill="url(#RW_svg__c)" />
      <Path d="M0 7h21v4H0z" fill="url(#RW_svg__d)" />
      <Path
        d="M16 4.5l-.765.848.058-1.14-1.14.057L15 3.5l-.848-.765 1.14.058-.057-1.14L16 2.5l.765-.848-.058 1.14 1.14-.057L17 3.5l.848.765-1.14-.058.057 1.14z"
        fill="url(#RW_svg__e)"
      />
    </G>
  </Svg>
);

export default SvgRw;
