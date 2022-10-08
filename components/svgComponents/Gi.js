import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgGi = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GI_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GI_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E71924" />
        <Stop offset="100%" stopColor="#D6101B" />
      </LinearGradient>
      <LinearGradient id="GI_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EA1824" />
        <Stop offset="100%" stopColor="#D6101B" />
      </LinearGradient>
      <LinearGradient id="GI_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="GI_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#ECCE3E" />
        <Stop offset="100%" stopColor="#D9BC2D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GI_svg__a)" />
      <Path d="M0 0h21v10H0z" fill="url(#GI_svg__a)" />
      <Path d="M0 10h21v5H0z" fill="url(#GI_svg__b)" />
      <Path
        d="M9 6H8V4.49A.495.495 0 0 0 7.495 4h-.99A.49.49 0 0 0 6 4.49V8L5 9h11l-1-1V4.49a.495.495 0 0 0-.505-.49h-.99a.49.49 0 0 0-.505.49V6h-1V3.49a.49.49 0 0 0-.495-.49h-2.01A.49.49 0 0 0 9 3.49V6z"
        fill="url(#GI_svg__c)"
      />
      <Path
        d="M7 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm3.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM14 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="url(#GI_svg__d)"
      />
      <Path
        d="M10 9.943V12H9v1h2V9.943c.583-.137 1-.508 1-.943 0-.552-.672-1-1.5-1S9 8.448 9 9c0 .435.417.806 1 .943z"
        fill="url(#GI_svg__e)"
      />
    </G>
  </Svg>
);

export default SvgGi;
