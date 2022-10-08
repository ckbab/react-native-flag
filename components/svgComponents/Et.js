import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgEt = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="ET_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="ET_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#20AA46" />
        <Stop offset="100%" stopColor="#168835" />
      </LinearGradient>
      <LinearGradient id="ET_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E92F3B" />
        <Stop offset="100%" stopColor="#D81824" />
      </LinearGradient>
      <LinearGradient id="ET_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FADF50" />
        <Stop offset="100%" stopColor="#FCDC34" />
      </LinearGradient>
      <LinearGradient id="ET_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#205CCA" />
        <Stop offset="100%" stopColor="#154BAD" />
      </LinearGradient>
      <LinearGradient id="ET_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFDB3D" />
        <Stop offset="100%" stopColor="#FDD420" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#ET_svg__a)" />
      <Path d="M0 0h21v5H0z" fill="url(#ET_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#ET_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#ET_svg__d)" />
      <Circle cx={10.5} cy={7.5} fill="url(#ET_svg__e)" r={3.5} />
      <Path
        d="M10.5 8.475L9.03 9.523 9.574 7.8l-1.45-1.074 1.804-.016L10.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722L10.5 8.475zm0-.614l.544.388-.2-.637.536-.398-.668-.006-.212-.634-.212.634-.668.006.537.398-.201.637.544-.388z"
        fill="url(#ET_svg__f)"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgEt;
