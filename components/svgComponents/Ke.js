import React from "react";
import Svg, {
  Defs,
  Ellipse,
  G,
  LinearGradient,
  Mask,
  Path,
  Stop,
  Use,
} from "react-native-svg";

const SvgKe = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="KE_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="KE_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="KE_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#018301" />
        <Stop offset="100%" stopColor="#006700" />
      </LinearGradient>
      <LinearGradient id="KE_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DC0808" />
        <Stop offset="100%" stopColor="#BC0000" />
      </LinearGradient>
      <Path
        d="M2.5 10.5c1 0 2.5-1.962 2.5-5 0-3.038-1.5-5-2.5-5S0 2.462 0 5.5c0 3.038 1.5 5 2.5 5z"
        id="KE_svg__e"
      />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#KE_svg__a)" />
      <Path d="M0 0h21v4H0z" fill="url(#KE_svg__b)" />
      <Path d="M0 11h21v4H0z" fill="url(#KE_svg__c)" />
      <Path d="M0 4h21v7H0z" fill="url(#KE_svg__a)" />
      <Path d="M0 5h21v5H0z" fill="url(#KE_svg__d)" />
      <G transform="translate(8 2)">
        <Mask fill="#fff" id="KE_svg__f">
          <Use xlinkHref="#KE_svg__e" />
        </Mask>
        <Use fill="#BC0000" xlinkHref="#KE_svg__e" />
        <Ellipse
          cx={-1.5}
          cy={5.5}
          fill="url(#KE_svg__b)"
          mask="url(#KE_svg__f)"
          rx={2.5}
          ry={5.5}
        />
        <Ellipse
          cx={6.5}
          cy={5.5}
          fill="url(#KE_svg__b)"
          mask="url(#KE_svg__f)"
          rx={2.5}
          ry={5.5}
        />
        <Path
          d="M2.5 7C2.224 7 2 6.328 2 5.5S2.224 4 2.5 4s.5.672.5 1.5S2.776 7 2.5 7zm0-3C2.224 4 2 3.105 2 2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2zm0 7c-.276 0-.5-.895-.5-2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2z"
          fill="url(#KE_svg__a)"
          mask="url(#KE_svg__f)"
        />
      </G>
    </G>
  </Svg>
);

export default SvgKe;
