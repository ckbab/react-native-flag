import React from "react";
import Svg, {
  Defs,
  G,
  LinearGradient,
  Mask,
  Path,
  Rect,
  Stop,
  Use,
} from "react-native-svg";

const SvgGu = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GU_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GU_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DE3149" />
        <Stop offset="100%" stopColor="#C2273D" />
      </LinearGradient>
      <LinearGradient id="GU_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#053B94" />
        <Stop offset="100%" stopColor="#002E7A" />
      </LinearGradient>
      <LinearGradient id="GU_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DE3149" />
        <Stop offset="100%" stopColor="#C2273D" />
      </LinearGradient>
      <Path
        d="M2.5 8.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4z"
        id="GU_svg__e"
      />
      <LinearGradient id="GU_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#81C1F3" />
        <Stop offset="100%" stopColor="#6AB1E9" />
      </LinearGradient>
      <LinearGradient id="GU_svg__h" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#27A07E" />
        <Stop offset="100%" stopColor="#1F9171" />
      </LinearGradient>
      <LinearGradient id="GU_svg__i" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1E8CE8" />
        <Stop offset="100%" stopColor="#107FDC" />
      </LinearGradient>
      <LinearGradient id="GU_svg__j" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF048" />
        <Stop offset="100%" stopColor="#FFEF36" />
      </LinearGradient>
      <LinearGradient id="GU_svg__k" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#8F5715" />
        <Stop offset="100%" stopColor="#7A480D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GU_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#GU_svg__b)" />
      <Rect
        fill="url(#GU_svg__c)"
        height={13}
        rx={0.75}
        width={19}
        x={1}
        y={1}
      />
      <Path
        d="M10.5 12s3-2.015 3-4.5-3-4.5-3-4.5-3 2.015-3 4.5 3 4.5 3 4.5z"
        fill="url(#GU_svg__d)"
      />
      <G transform="translate(8 3)">
        <Mask fill="#fff" id="GU_svg__g">
          <Use xlinkHref="#GU_svg__e" />
        </Mask>
        <Use fill="url(#GU_svg__a)" xlinkHref="#GU_svg__e" />
        <Path d="M0 0h5v5H0z" fill="url(#GU_svg__f)" mask="url(#GU_svg__g)" />
        <Path
          d="M2.5 4.1l-.882.614.311-1.029-.856-.649 1.074-.021L2.5 2l.353 1.015 1.074.021-.856.65.31 1.028z"
          fill="url(#GU_svg__h)"
          mask="url(#GU_svg__g)"
        />
        <Path d="M0 5h5v4H0z" fill="url(#GU_svg__i)" mask="url(#GU_svg__g)" />
        <Path
          d="M0 6s1.59 1.5 2 1.5c.488 0 .496-.723 1-1 .794-.436 2-.5 2-.5v3H0V6z"
          fill="url(#GU_svg__j)"
          mask="url(#GU_svg__g)"
        />
      </G>
      <Path
        d="M10.251 6.475a14.974 14.974 0 0 0-.067 1.084c-.01.467.01.812.079 1.02.087.261.284.506.557.742.208.18.415.316.557.397a.25.25 0 0 0 .246-.436 3.148 3.148 0 0 1-.477-.34c-.21-.182-.356-.363-.409-.521-.044-.134-.063-.442-.053-.85a13.917 13.917 0 0 1 .065-1.046.25.25 0 1 0-.498-.05z"
        fill="url(#GU_svg__k)"
        fillRule="nonzero"
      />
      <Path d="M9 7.5L10 9H9z" fill="#FFF" />
    </G>
  </Svg>
);

export default SvgGu;
