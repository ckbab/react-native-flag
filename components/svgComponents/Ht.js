import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Mask,
  Path,
  Rect,
  Stop,
  Use,
} from "react-native-svg";

const SvgHt = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="HT_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="HT_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#112EBC" />
        <Stop offset="100%" stopColor="#0620A0" />
      </LinearGradient>
      <LinearGradient id="HT_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E3264A" />
        <Stop offset="100%" stopColor="#D20F34" />
      </LinearGradient>
      <Rect height={6} id="HT_svg__d" rx={0.5} width={7} x={0} y={0} />
      <Path
        d="M0 5l1.105-.553C1.6 4.2 2.443 4 3 4h1.002c.552 0 1.404.202 1.894.447L7 5v1H0V5z"
        id="HT_svg__f"
      />
      <Path
        d="M1 3.006c0-.28.18-.362.39-.193l1.72 1.374a.66.66 0 0 0 .78 0l1.72-1.375c.215-.172.39-.081.39.194v1.488c0 .28-.215.506-.498.506H1.498A.505.505 0 0 1 1 4.494V3.006z"
        id="HT_svg__g"
      />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#HT_svg__a)" />
      <Path d="M0 0h21v7H0z" fill="url(#HT_svg__b)" />
      <Path d="M0 7h21v8H0z" fill="url(#HT_svg__c)" />
      <G transform="translate(7 5)">
        <Mask fill="#fff" id="HT_svg__e">
          <Use xlinkHref="#HT_svg__d" />
        </Mask>
        <Use fill="url(#HT_svg__a)" xlinkHref="#HT_svg__d" />
        <G mask="url(#HT_svg__e)">
          <Use fill="#AABCAE" xlinkHref="#HT_svg__f" />
          <Path
            d="M.25 5.155v.595h6.5v-.595l-.967-.484C5.326 4.443 4.513 4.25 4 4.25H2.999c-.516 0-1.321.19-1.782.421l-.967.484z"
            stroke="#366C14"
            strokeWidth={0.5}
          />
        </G>
        <Circle
          cx={3.5}
          cy={2.5}
          fill="#D4B872"
          mask="url(#HT_svg__e)"
          r={1.5}
        />
        <G mask="url(#HT_svg__e)">
          <Use fill="#C28321" xlinkHref="#HT_svg__g" />
          <Path
            d="M1.25 3.02v1.474c0 .14.114.256.248.256h4.004c.14 0 .248-.11.248-.256V3.02L4.047 4.383a.91.91 0 0 1-1.094 0L1.25 3.02z"
            stroke="#0D3488"
            strokeWidth={0.5}
          />
        </G>
        <Path
          d="M2.172 1.172C2.077 1.077 2.114 1 2.256 1h2.488c.141 0 .175.08.084.172L3.672 2.328a.247.247 0 0 1-.344 0L2.172 1.172z"
          fill="#216C30"
          mask="url(#HT_svg__e)"
        />
      </G>
    </G>
  </Svg>
);

export default SvgHt;
