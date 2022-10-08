import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgSs = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="SS_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="SS_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="SS_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E22A32" />
        <Stop offset="100%" stopColor="#D61C24" />
      </LinearGradient>
      <LinearGradient id="SS_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#2CA244" />
        <Stop offset="100%" stopColor="#218736" />
      </LinearGradient>
      <LinearGradient id="SS_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#185AC6" />
        <Stop offset="100%" stopColor="#104CAD" />
      </LinearGradient>
      <LinearGradient id="SS_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FDE14A" />
        <Stop offset="100%" stopColor="#FCDC34" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#SS_svg__a)" />
      <Path d="M0 0h21v4H0z" fill="url(#SS_svg__b)" />
      <Path d="M0 5h21v5H0z" fill="url(#SS_svg__c)" />
      <Path d="M0 4h21v1H0z" fill="url(#SS_svg__a)" />
      <Path d="M0 11h21v4H0z" fill="url(#SS_svg__d)" />
      <Path d="M0 10h21v1H0z" fill="url(#SS_svg__a)" />
      <Path d="M0 0l10 7.5L0 15z" fill="url(#SS_svg__e)" />
      <Path
        d="M3.836 7.987l-.683 1.28-.205-1.437-1.429-.254 1.304-.639-.2-1.437 1.01 1.042 1.306-.634-.68 1.283 1.007 1.046z"
        fill="url(#SS_svg__f)"
      />
    </G>
  </Svg>
);

export default SvgSs;
