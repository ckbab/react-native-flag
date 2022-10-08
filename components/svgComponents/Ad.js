import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgAd = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="AD_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="AD_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1537D1" />
        <Stop offset="100%" stopColor="#0522A5" />
      </LinearGradient>
      <LinearGradient id="AD_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EA3058" />
        <Stop offset="100%" stopColor="#CE173E" />
      </LinearGradient>
      <LinearGradient id="AD_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFCF3C" />
        <Stop offset="100%" stopColor="#FECB2F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#AD_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#AD_svg__b)" />
      <Path d="M10 0h11v15H10z" fill="url(#AD_svg__c)" />
      <Path d="M7 0h7v15H7z" fill="url(#AD_svg__d)" />
      <Path d="M9.5 6.5h1V7h-1z" fill="#FFEDB1" />
      <Path
        d="M9.665 7.96c.025.295.292.54.587.54h.496a.607.607 0 0 0 .587-.54l.122-1.46H9.543l.122 1.46zm-.624-1.465A.446.446 0 0 1 9.495 6h2.01c.273 0 .477.216.454.495l-.126 1.506c-.046.552-.53.999-1.085.999h-.496c-.553 0-1.039-.443-1.085-.999L9.04 6.495z"
        fill="#D32E28"
        fillRule="nonzero"
      />
      <Path d="M9.5 7h2v.5h-2z" fill="#D32E28" />
    </G>
  </Svg>
);

export default SvgAd;
