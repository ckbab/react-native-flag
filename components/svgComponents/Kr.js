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

const SvgKr = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="KR_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="KR_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E01B41" />
        <Stop offset="100%" stopColor="#C51335" />
      </LinearGradient>
      <Circle cx={3.5} cy={3.5} id="KR_svg__b" r={3.5} />
      <LinearGradient id="KR_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0E4B9C" />
        <Stop offset="100%" stopColor="#053677" />
      </LinearGradient>
      <LinearGradient id="KR_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#KR_svg__a)" />
      <G transform="translate(7 4)">
        <Mask fill="#fff" id="KR_svg__e">
          <Use xlinkHref="#KR_svg__b" />
        </Mask>
        <Use fill="url(#KR_svg__c)" xlinkHref="#KR_svg__b" />
        <Path
          d="M0 4c1 .937 2.5 1.5 3.5 0s3-1.5 3.5 0 0 3 0 3H0s-1-3.937 0-3z"
          fill="url(#KR_svg__d)"
          mask="url(#KR_svg__e)"
        />
      </G>
      <Path
        d="M14.208 3.922a.25.25 0 0 1 .09-.347l.43-.248a.254.254 0 0 1 .346.095l1.244 2.156a.25.25 0 0 1-.09.347l-.43.248a.254.254 0 0 1-.346-.095l-1.244-2.156zm1.3-.75a.25.25 0 0 1 .09-.347l.429-.248a.254.254 0 0 1 .346.095l1.244 2.156a.25.25 0 0 1-.09.347l-.43.248a.254.254 0 0 1-.346-.095l-1.244-2.156zm-12.125 7a.25.25 0 0 1 .09-.347l.43-.248a.254.254 0 0 1 .346.095l1.244 2.156a.25.25 0 0 1-.09.347l-.43.248a.254.254 0 0 1-.346-.095l-1.244-2.156zm1.299-.75a.25.25 0 0 1 .09-.347l.43-.248a.254.254 0 0 1 .346.095l1.244 2.156a.25.25 0 0 1-.09.347l-.43.248a.254.254 0 0 1-.346-.095L4.682 9.422zm10.77-.5a.25.25 0 0 1 .347-.095l.429.248c.12.07.161.225.09.347l-1.244 2.156a.25.25 0 0 1-.346.095l-.43-.248a.254.254 0 0 1-.09-.347l1.244-2.156zm1.3.75a.25.25 0 0 1 .346-.095l.429.248c.12.07.161.225.09.347l-1.244 2.156a.25.25 0 0 1-.346.095l-.43-.248a.254.254 0 0 1-.09-.347l1.244-2.156zm-12.125-7a.25.25 0 0 1 .346-.095l.43.248c.12.07.16.225.09.347L4.249 5.328a.25.25 0 0 1-.347.095l-.429-.248a.254.254 0 0 1-.09-.347l1.244-2.156zm1.299.75a.25.25 0 0 1 .346-.095l.43.248c.12.07.16.225.09.347L5.548 6.078a.25.25 0 0 1-.347.095l-.429-.248a.254.254 0 0 1-.09-.347l1.244-2.156z"
        fill="url(#KR_svg__f)"
        opacity={0.75}
      />
    </G>
  </Svg>
);

export default SvgKr;
