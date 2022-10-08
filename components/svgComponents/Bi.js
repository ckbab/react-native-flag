import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgBi = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BI_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BI_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E4233B" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
      <LinearGradient id="BI_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#34CD4E" />
        <Stop offset="100%" stopColor="#2AB441" />
      </LinearGradient>
      <LinearGradient id="BI_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DF2239" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BI_svg__a)" />
      <Path
        d="M2.08 1.437h21v15h-21z"
        fill="url(#BI_svg__b)"
        transform="translate(-2.08 -1.44)"
      />
      <Path
        d="M2 1.437l9 7.5-9 7.5z"
        fill="url(#BI_svg__c)"
        transform="translate(-2.08 -1.44)"
      />
      <Path
        d="M14.08 1.437l9 7.5-9 7.5z"
        fill="url(#BI_svg__c)"
        transform="matrix(-1 0 0 1 35.08 -1.44)"
      />
      <Path
        d="M10.359 6.233L1.119 0 0 1.658 9.24 7.89a3.499 3.499 0 0 0 0 2.094L0 16.217l1.118 1.658 9.24-6.233a3.486 3.486 0 0 0 2.222.795c.844 0 1.617-.298 2.222-.795l9.24 6.233 1.118-1.658-9.24-6.233a3.499 3.499 0 0 0 0-2.094l9.24-6.232L24.042 0l-9.24 6.233a3.486 3.486 0 0 0-2.222-.796c-.843 0-1.617.299-2.221.796z"
        fill="url(#BI_svg__a)"
        transform="translate(-2.08 -1.44)"
      />
      <Path
        d="M12.58 7.937l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207zm-1.5 2.5l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207zm3 0l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207z"
        fill="url(#BI_svg__d)"
        transform="translate(-2.08 -1.44)"
      />
    </G>
  </Svg>
);

export default SvgBi;
