import React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";

const SvgLk = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="LK_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="LK_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFBF19" />
        <Stop offset="100%" stopColor="#FFB800" />
      </LinearGradient>
      <LinearGradient id="LK_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#A52531" />
        <Stop offset="100%" stopColor="#8E1F29" />
      </LinearGradient>
      <LinearGradient id="LK_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#03664F" />
        <Stop offset="100%" stopColor="#005642" />
      </LinearGradient>
      <LinearGradient id="LK_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FF6816" />
        <Stop offset="100%" stopColor="#FF5B01" />
      </LinearGradient>
      <LinearGradient id="LK_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFBF18" />
        <Stop offset="100%" stopColor="#FFB800" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#LK_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#LK_svg__b)" />
      <Path
        d="M8 1h11.25a.75.75 0 0 1 .75.755v11.49a.751.751 0 0 1-.75.755H8V1z"
        fill="url(#LK_svg__c)"
      />
      <Path
        d="M1 1.755A.76.76 0 0 1 1.757 1H4v13H1.757A.754.754 0 0 1 1 13.245V1.755z"
        fill="url(#LK_svg__d)"
      />
      <Rect fill="url(#LK_svg__e)" height={13} rx={0.5} width={3} x={4} y={1} />
      <Path
        d="M9.5 3a.5.5 0 0 1-.5-.5V2h.5a.5.5 0 0 1 0 1zm9 0a.5.5 0 1 1 0-1h.5v.5a.5.5 0 0 1-.5.5zm0 9a.5.5 0 0 1 .5.5v.5h-.5a.5.5 0 1 1 0-1zm-9 0a.5.5 0 1 1 0 1H9v-.5a.5.5 0 0 1 .5-.5zM12 9.5c0-.276-.227-.5-.5-.5h.5a3.04 3.04 0 0 1-.975-.185S10 8.5 10 8c0-.5.203-.614.203-.614.164-.213.215-.588.112-.86 0 0-.415-.926-.315-1.526.1-.6.57-.749.57-.749.238-.139.43-.035.43.244v2.01c0 .273.193.591.453.722l.094.046c.25.126.611.069.806-.126l-.206.206c.195-.195.16-.45-.1-.58L11.5 6.5V6h.5c.276 0 .307-.096.047-.227L11.5 5.5V5h.5c.276 0 .658-.158.853-.353l-.206.206c.195-.195.585-.353.853-.353.276 0 .596.193.727.453l.046.094c.126.25.157.662.069.928l-.184.55c-.087.263.073.475.348.475h1.488c.28 0 .664-.158.859-.353l-.206.206c.195-.195.16-.45-.1-.58l-.094-.046A2.566 2.566 0 0 0 15.5 6a.505.505 0 0 1-.5-.5c0-.276.158-.658.353-.853L15.5 4.5V5c0 .276.227.5.5.5h-.5 1c.276 0 .596.193.727.453l.046.094c.126.25.247.673.264.947 0 0 .069.476-.037 1.006-.106.53-.226.589-.226.589a1.898 1.898 0 0 0-.274.916v.99a.508.508 0 0 1-.5.505c-.276 0-.404-.193-.273-.453l.046-.094a1.12 1.12 0 0 0 0-.906l-.046-.094C16.1 9.203 16 9.232 16 9.5c0 .276-.096.693-.227.953l-.046.094c-.126.25-.459.453-.727.453-.276 0-.404-.193-.273-.453l.046-.094c.126-.25.227-.685.227-.953 0-.276-.214-.5-.505-.5h-.99a.508.508 0 0 0-.505.5c0 .276-.096.693-.227.953l-.046.094c-.126.25-.459.453-.727.453-.276 0-.404-.193-.273-.453l.046-.094c.126-.25.227-.685.227-.953z"
        fill="url(#LK_svg__f)"
      />
    </G>
  </Svg>
);

export default SvgLk;
