import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgAs = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="AS_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="AS_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#071585" />
        <Stop offset="100%" stopColor="#000B64" />
      </LinearGradient>
      <LinearGradient id="AS_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#D32636" />
        <Stop offset="100%" stopColor="#BA1827" />
      </LinearGradient>
      <LinearGradient id="AS_svg__d" x1="50%" x2="35.4%" y1="0%" y2="89.131%">
        <Stop offset="0%" stopColor="#AB5423" />
        <Stop offset="100%" stopColor="#5A3719" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#AS_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#AS_svg__b)" />
      <Path
        d="M22 15.5l-22-8 22-8z"
        fill="url(#AS_svg__c)"
        fillRule="nonzero"
      />
      <Path
        d="M21 .928L2.926 7.5 21 14.072z"
        fill="url(#AS_svg__a)"
        fillRule="nonzero"
      />
      <Path
        d="M16 7.038c-.118-.118-.806.156-.806.156L14 6s-.062-.663.5-1c.425-.255 1.22-.16 1.999-.5C17.746 3.956 19 3 19 3l-.802 2.206s.919.473.802.794c-.034.093-.93.385-1 .5-.132.22.524.286.32.538C17.733 7.765 17 8.5 17 8.5L16 8s.15-.811 0-.962z"
        fill="url(#AS_svg__d)"
      />
      <Circle cx={13.5} cy={7.5} fill="#FFC322" r={1} />
      <Path
        d="M12.5 9h5a.5.5 0 1 0 0-1h-5a.5.5 0 1 0 0 1z"
        fill="#FFC322"
        fillRule="nonzero"
      />
      <Path
        d="M14.197 10.46l3.5-1.5a.5.5 0 0 0-.394-.92l-3.5 1.5a.5.5 0 0 0 .394.92z"
        fill="#FFC322"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgAs;
