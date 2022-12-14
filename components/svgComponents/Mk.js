import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgMk = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="MK_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="MK_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E81B26" />
        <Stop offset="100%" stopColor="#D00914" />
      </LinearGradient>
      <LinearGradient id="MK_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFE94F" />
        <Stop offset="100%" stopColor="#FFE633" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#MK_svg__a)" />
      <Path d="M-.004-.002h21v15h-21z" fill="url(#MK_svg__b)" />
      <Circle cx={10.496} cy={7.498} fill="url(#MK_svg__c)" r={2.5} />
      <Path
        d="M13.961 7.993l7.035 1.005v-3l-7.035 1.005a3.53 3.53 0 0 1 0 .99zm-6.93-.99L-.004 5.998v3l7.035-1.005a3.53 3.53 0 0 1 0-.99zm4.152-2.938l.813-4.067h-3l.814 4.067a3.517 3.517 0 0 1 1.373 0zM9.81 10.931l-.814 4.067h3l-.813-4.067a3.517 3.517 0 0 1-1.373 0zM7.652 9.539L-.54 15.417l2.007 2.229 6.703-7.533a3.52 3.52 0 0 1-.518-.574zm5.688-4.082L21.532-.42 19.525-2.65l-6.702 7.533c.192.172.366.364.517.574zm-.517 4.656l6.702 7.533 2.007-2.23L13.34 9.54a3.52 3.52 0 0 1-.517.574zM8.17 4.883L1.467-2.65-.54-.42l8.192 5.877a3.52 3.52 0 0 1 .518-.574z"
        fill="url(#MK_svg__c)"
      />
    </G>
  </Svg>
);

export default SvgMk;
