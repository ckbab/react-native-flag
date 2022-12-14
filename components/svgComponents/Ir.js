import React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";

const SvgIr = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="IR_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="IR_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#38BB56" />
        <Stop offset="100%" stopColor="#2B9F45" />
      </LinearGradient>
      <LinearGradient id="IR_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DE1B27" />
        <Stop offset="100%" stopColor="#D80915" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#IR_svg__a)" />
      <Path d="M0 0h21v5H0z" fill="url(#IR_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#IR_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#IR_svg__a)" />
      <Path
        d="M1 4.252C1 4.113 1.107 4 1.252 4h.496c.139 0 .252.107.252.252v.496C2 4.887 1.893 5 1.748 5h-.496A.249.249 0 0 1 1 4.748v-.496zm2 0C3 4.113 3.107 4 3.252 4h.496c.139 0 .252.107.252.252v.496C4 4.887 3.893 5 3.748 5h-.496A.249.249 0 0 1 3 4.748v-.496zm2 0C5 4.113 5.107 4 5.252 4h.496c.139 0 .252.107.252.252v.496C6 4.887 5.893 5 5.748 5h-.496A.249.249 0 0 1 5 4.748v-.496zm2 0C7 4.113 7.107 4 7.252 4h.496c.139 0 .252.107.252.252v.496C8 4.887 7.893 5 7.748 5h-.496A.249.249 0 0 1 7 4.748v-.496zm2 0C9 4.113 9.107 4 9.252 4h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0 1 9 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0 1 11 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0 1 13 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0 1 15 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0 1 17 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0 1 19 4.748v-.496zm-18 6c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0 1 1 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0 1 3 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0 1 5 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0 1 7 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0 1 9 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 0 1-.252-.252v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 0 1-.252-.252v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 0 1-.252-.252v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 0 1-.252-.252v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 0 1-.252-.252v-.496z"
        fill="#FFF"
        fillOpacity={0.5}
      />
      <Path
        d="M9.591 6.642a1.25 1.25 0 1 0 1.83.014l-1.83-.014z"
        stroke="#D80915"
        strokeWidth={0.5}
      />
      <Rect fill="#D80915" height={2} rx={0.5} width={1} x={10} y={7} />
    </G>
  </Svg>
);

export default SvgIr;
