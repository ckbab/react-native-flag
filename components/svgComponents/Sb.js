import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgSb = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SB_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SB_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1DBE4F" />
        <Stop offset="100%" stopColor="#159B3F" />
      </LinearGradient>
      <LinearGradient id="SB_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0660D4" />
        <Stop offset="100%" stopColor="#0051BB" />
      </LinearGradient>
      <LinearGradient id="SB_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#2C7442" />
        <Stop offset="100%" stopColor="#225B34" />
      </LinearGradient>
      <LinearGradient id="SB_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD646" />
        <Stop offset="100%" stopColor="#FED02F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SB_svg__a)" />
      <Path
        d="M5.92 5.812c0-.139.078-.33.18-.433l.14-.138c.1-.1.102-.26 0-.362l-.14-.138a.69.69 0 0 1-.18-.433v-.496c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139.046.16.116.02l.268-.536a.459.459 0 0 1 .364-.232h1.004c.137 0 .248.116.248.25 0 .138-.107.25-.252.25h-.496a.254.254 0 0 0-.252.25c0 .138.107.25.252.25h.496c.139 0 .252.108.252.245v1.51a.245.245 0 0 1-.252.245h-.496a.249.249 0 0 1-.252-.252v-.496c0-.139.116-.252.25-.252.138 0 .25-.116.25-.25a.247.247 0 0 0-.252-.25h-.496a.255.255 0 0 0-.252.248v1.004a.251.251 0 0 1-.25.248.247.247 0 0 1-.25-.252v-.496a.254.254 0 0 0-.25-.252.247.247 0 0 0-.25.252v.496c0 .139-.116.252-.25.252a.247.247 0 0 1-.25-.252v-.496z"
        fill="url(#SB_svg__a)"
      />
      <Path d="M0-.003h21v15H0z" fill="url(#SB_svg__b)" />
      <Path d="M0-.003h21l-21 15z" fill="url(#SB_svg__c)" />
      <Path
        d="M0-.003l21 15H0z"
        fill="url(#SB_svg__d)"
        transform="matrix(-1 0 0 1 21 0)"
      />
      <Path d="M-4 6.497h29v2H-4z" fill="url(#SB_svg__e)" />
      <Path
        d="M2.25 2.872l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387zm5 0l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387zm0 3l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387zm-5 0l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387zm2.5-1.5l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgSb;
