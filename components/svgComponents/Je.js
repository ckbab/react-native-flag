import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgJe = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="JE_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="JE_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EF273F" />
        <Stop offset="100%" stopColor="#DB1C33" />
      </LinearGradient>
      <LinearGradient id="JE_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F22A41" />
        <Stop offset="100%" stopColor="#E51D34" />
      </LinearGradient>
      <LinearGradient id="JE_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FADF46" />
        <Stop offset="100%" stopColor="#F9DC38" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#JE_svg__a)" />
      <Path
        d="M10.5 6.291L-.962-1.44-2.08.218l10.792 7.28-10.792 7.279 1.118 1.658L10.5 8.704l11.462 7.73 1.118-1.657-10.791-7.28L23.08.218 21.962-1.44 10.5 6.291z"
        fill="url(#JE_svg__b)"
      />
      <Path
        d="M9 2.502c0-.279.216-.505.496-.505h2.009c.273 0 .495.214.495.505v.99c0 .28-.16.666-.348.853l-.804.804a.496.496 0 0 1-.696 0l-.804-.804A1.354 1.354 0 0 1 9 3.493v-.991z"
        fill="url(#JE_svg__c)"
      />
      <Path
        d="M10.5 3.997a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-2c-.828 0-1.5-.224-1.5-.5s.672-.5 1.5-.5c.829 0 1.5.224 1.5.5s-.671.5-1.5.5z"
        fill="url(#JE_svg__d)"
      />
    </G>
  </Svg>
);

export default SvgJe;
