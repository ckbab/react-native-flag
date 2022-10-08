import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgAo = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="AO_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="AO_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FF323E" />
        <Stop offset="100%" stopColor="#FD0D1B" />
      </LinearGradient>
      <LinearGradient id="AO_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="AO_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DD2137" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
      <LinearGradient id="AO_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F8D84B" />
        <Stop offset="100%" stopColor="#F9D536" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#AO_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#AO_svg__b)" />
      <Path d="M0 8h21v7H0z" fill="url(#AO_svg__c)" />
      <Path d="M0 0h21v8H0z" fill="url(#AO_svg__d)" />
      <Path
        d="M10.63 8.855l-1.407-.939a.5.5 0 0 1 .554-.832l1.536 1.024a2 2 0 0 0-1.253-2.863.5.5 0 1 1 .259-.966 3 3 0 0 1 1.83 4.386l.628.419a.5.5 0 0 1-.554.832l-.713-.475c-.727.631-1.744.901-2.744.633a.5.5 0 0 1 .259-.966c.57.153 1.147.044 1.606-.253zM9.5 6.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="url(#AO_svg__e)"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgAo;
