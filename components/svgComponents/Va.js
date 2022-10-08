import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgVa = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="VA_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="VA_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FDE048" />
        <Stop offset="100%" stopColor="#FFDF32" />
      </LinearGradient>
      <LinearGradient id="VA_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#CDCCCC" />
        <Stop offset="100%" stopColor="#E4E4E4" />
      </LinearGradient>
      <LinearGradient id="VA_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#CD9D25" />
        <Stop offset="100%" stopColor="#EBB93A" />
      </LinearGradient>
      <LinearGradient id="VA_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F5252C" />
        <Stop offset="100%" stopColor="#F6151C" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#VA_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#VA_svg__b)" />
      <Path d="M10 0h11v15H10z" fill="url(#VA_svg__a)" />
      <Path
        d="M18.682 8.025a1.5 1.5 0 1 0-2.415-.414l-2.181 2.182-.354-.354-.353-.353-.707.707.353.353.707.708.354.353.353-.353 2.536-2.536a1.5 1.5 0 0 0 1.707-.293z"
        fill="url(#VA_svg__c)"
        transform="matrix(1 0 0 -1 0 16.672)"
      />
      <Path
        d="M14.025 8.318a1.5 1.5 0 1 1 .708-.707l2.181 2.182.354-.354.353-.353.707.707-.353.353-.707.708-.354.353-.353-.353-2.536-2.536z"
        fill="url(#VA_svg__d)"
        transform="matrix(1 0 0 -1 0 16.672)"
      />
      <Path
        d="M15.5 5c-.828 0-1.5-.224-1.5-.5s.672-.5 1.5-.5 1.5.224 1.5.5-.672.5-1.5.5zm0-2.5c-.414 0-.75-.112-.75-.25s.336-.25.75-.25.75.112.75.25-.336.25-.75.25zm0 1.167c-.552 0-1-.15-1-.334 0-.184.448-.333 1-.333s1 .15 1 .333c0 .184-.448.334-1 .334z"
        fill="url(#VA_svg__d)"
      />
      <Path
        d="M13.026 10.658c.08.242.247.576.527.912.48.576 1.13.93 1.947.93.817 0 1.467-.354 1.947-.93.28-.336.447-.67.527-.912a.5.5 0 1 0-.948-.316 1.98 1.98 0 0 1-.348.588c-.301.362-.683.57-1.178.57-.495 0-.877-.208-1.178-.57a1.98 1.98 0 0 1-.348-.588.5.5 0 1 0-.948.316z"
        fill="url(#VA_svg__e)"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgVa;
