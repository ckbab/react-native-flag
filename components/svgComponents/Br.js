import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Mask,
  Path,
  Stop,
  Use,
} from "react-native-svg";

const SvgBr = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BR_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BR_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#05AB41" />
        <Stop offset="100%" stopColor="#019C39" />
      </LinearGradient>
      <LinearGradient id="BR_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#053087" />
        <Stop offset="100%" stopColor="#012877" />
      </LinearGradient>
      <Circle cx={3.5} cy={3.5} id="BR_svg__c" r={3.5} />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BR_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#BR_svg__b)" />
      <Path
        d="M2.422 7.773c-.233-.15-.228-.398 0-.546l7.656-4.954a.85.85 0 0 1 .844 0l7.656 4.954c.233.15.228.398 0 .546l-7.656 4.954a.85.85 0 0 1-.844 0L2.422 7.773z"
        fill="#FDD216"
      />
      <G transform="translate(7 4)">
        <Mask fill="#fff" id="BR_svg__e">
          <Use xlinkHref="#BR_svg__c" />
        </Mask>
        <Use fill="url(#BR_svg__d)" xlinkHref="#BR_svg__c" />
        <Path
          d="M-.1 2.974c.265-.215 1.463-.04 3.534.512 1.474.394 3.173 1.262 3.562 1.742l.314.388.778-.629-.315-.388c-.55-.68-2.421-1.636-4.081-2.079-2.586-.69-3.758-.86-4.422-.323l-.388.314.629.777.389-.314z"
          fill="#FFF"
          fillRule="nonzero"
          mask="url(#BR_svg__e)"
        />
      </G>
    </G>
  </Svg>
);

export default SvgBr;
