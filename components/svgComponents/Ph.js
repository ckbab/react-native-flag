import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgPh = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="PH_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="PH_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DD1C34" />
        <Stop offset="100%" stopColor="#CC162C" />
      </LinearGradient>
      <LinearGradient id="PH_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0D4BC3" />
        <Stop offset="100%" stopColor="#073DA6" />
      </LinearGradient>
      <LinearGradient id="PH_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FDD64D" />
        <Stop offset="100%" stopColor="#FCD036" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#PH_svg__a)" />
      <Path d="M0 7h21v8H0z" fill="url(#PH_svg__b)" />
      <Path d="M0 0h21v7H0z" fill="url(#PH_svg__c)" />
      <Path d="M0 0l10 7.5L0 15z" fill="url(#PH_svg__a)" />
      <Path
        d="M3.4 8.495L2.542 9.81l.325-1.535c-.052-.043-.1-.09-.143-.143l-1.535.325L2.505 7.6a1.012 1.012 0 0 1 0-.202L1.19 6.543l1.535.325c.043-.052.09-.1.143-.143L2.543 5.19 3.4 6.505a1.012 1.012 0 0 1 .202 0l.856-1.315-.325 1.535c.052.043.1.09.143.143l1.535-.325-1.315.856a1.012 1.012 0 0 1 0 .202l1.315.856-1.535-.325c-.043.052-.09.1-.143.143l.325 1.535L3.6 8.495a1.012 1.012 0 0 1-.202 0zM7.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-6-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="url(#PH_svg__d)"
      />
    </G>
  </Svg>
);

export default SvgPh;
