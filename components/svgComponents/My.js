import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgMy = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="MY_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="MY_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E1244A" />
        <Stop offset="100%" stopColor="#BE1134" />
      </LinearGradient>
      <LinearGradient id="MY_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0C3F8E" />
        <Stop offset="100%" stopColor="#032A67" />
      </LinearGradient>
      <LinearGradient id="MY_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD34F" />
        <Stop offset="100%" stopColor="#FFCB2F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#MY_svg__a)" />
      <Path
        d="M10 0h11v1H10V0zm0 2h11v1H10V2zm0 2h11v1H10V4zm0 2h11v1H10V6zM0 8h21v1H0V8zm0 2h21v1H0v-1zm0 2h21v1H0v-1zm0 2h21v1H0v-1z"
        fill="url(#MY_svg__b)"
      />
      <Path d="M0 0h12v8H0z" fill="url(#MY_svg__c)" />
      <Path
        d="M6.874 1.657a2.5 2.5 0 1 0 0 4.686 3 3 0 1 1 0-4.686zM8 4.82l-.868.982.227-1.29-1.309-.067 1.15-.627-.764-1.065 1.208.508L8 2l.356 1.261 1.208-.508-.765 1.065 1.15.627-1.308.066.227 1.29L8 4.82z"
        fill="url(#MY_svg__d)"
      />
    </G>
  </Svg>
);

export default SvgMy;
