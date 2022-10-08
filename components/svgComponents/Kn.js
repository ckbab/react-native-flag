import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgKn = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="KN_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="KN_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1EC160" />
        <Stop offset="100%" stopColor="#169E4D" />
      </LinearGradient>
      <LinearGradient id="KN_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DF2A40" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
      <LinearGradient
        id="KN_svg__d"
        x1="50%"
        x2="50%"
        y1="16.742%"
        y2="82.422%"
      >
        <Stop offset="0%" stopColor="#FFD956" />
        <Stop offset="100%" stopColor="#FCD036" />
      </LinearGradient>
      <LinearGradient id="KN_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#KN_svg__a)" />
      <Path d="M.001 10l21-10h-21z" fill="url(#KN_svg__b)" />
      <Path d="M.001 15h21V5z" fill="url(#KN_svg__c)" />
      <Path
        d="M.59 19L25.182 3.632 20.413-4-4.18 11.368z"
        fill="url(#KN_svg__d)"
      />
      <Path
        d="M-.47 17.304L24.122 1.936l-2.65-4.24L-3.12 13.064z"
        fill="url(#KN_svg__e)"
      />
      <Path
        d="M15.233 5.848l-.709 1.123-.46-1.246-1.287-.327 1.043-.823-.087-1.325 1.105.738 1.234-.492-.36 1.278.848 1.022zM7.233 10.698l-.709 1.123-.46-1.246-1.287-.327 1.043-.823L5.733 8.1l1.105.738 1.234-.492-.36 1.278.848 1.022z"
        fill="url(#KN_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgKn;
