import React from "react";
import Svg, {
  Circle,
  Defs,
  Ellipse,
  G,
  LinearGradient,
  Mask,
  Path,
  Stop,
  Use,
} from "react-native-svg";

const SvgTm = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="TM_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="TM_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#30C375" />
        <Stop offset="100%" stopColor="#28AE67" />
      </LinearGradient>
      <LinearGradient id="TM_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DE414F" />
        <Stop offset="100%" stopColor="#CA3745" />
      </LinearGradient>
      <Ellipse cx={1.5} cy={1} id="TM_svg__d" rx={1.5} ry={1} />
      <Ellipse cx={1.5} cy={1} id="TM_svg__f" rx={1.5} ry={1} />
      <Ellipse cx={1.5} cy={1} id="TM_svg__h" rx={1.5} ry={1} />
      <Ellipse cx={1.5} cy={0.5} id="TM_svg__j" rx={1.5} ry={1} />
      <Ellipse cx={1.5} cy={1} id="TM_svg__k" rx={1.5} ry={1} />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#TM_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#TM_svg__b)" />
      <Path d="M3 0h3v15H3z" fill="url(#TM_svg__c)" />
      <G transform="translate(3 1)">
        <Mask fill="#fff" id="TM_svg__e">
          <Use xlinkHref="#TM_svg__d" />
        </Mask>
        <Use fill="#FFF" xlinkHref="#TM_svg__d" />
        <Circle cx={1.5} cy={1} fill="#DD404F" mask="url(#TM_svg__e)" r={1} />
        <Path
          d="M0 0h1.5v1H0zM1.5 1H3v1H1.5z"
          fill="#FBAF29"
          mask="url(#TM_svg__e)"
        />
      </G>
      <G transform="translate(3 12)">
        <Mask fill="#fff" id="TM_svg__g">
          <Use xlinkHref="#TM_svg__f" />
        </Mask>
        <Use fill="#FFF" xlinkHref="#TM_svg__f" />
        <Circle cx={1.5} cy={1} fill="#DD404F" mask="url(#TM_svg__g)" r={1} />
        <Path
          d="M0 0h1.5v1H0zM1.5 1H3v1H1.5z"
          fill="#FBAF29"
          mask="url(#TM_svg__g)"
        />
      </G>
      <G transform="translate(3 7)">
        <Mask fill="#fff" id="TM_svg__i">
          <Use xlinkHref="#TM_svg__h" />
        </Mask>
        <Use fill="#28AE67" xlinkHref="#TM_svg__h" />
        <Ellipse
          cx={1.5}
          cy={1}
          fill="#DD404F"
          mask="url(#TM_svg__i)"
          rx={1}
          ry={1}
        />
      </G>
      <Use fill="#28AE67" transform="translate(3 10)" xlinkHref="#TM_svg__j" />
      <G transform="translate(3 4)">
        <Mask fill="#fff" id="TM_svg__l">
          <Use xlinkHref="#TM_svg__k" />
        </Mask>
        <Use fill="#FBAF29" xlinkHref="#TM_svg__k" />
        <Circle cx={1.5} cy={1} fill="#DD404F" mask="url(#TM_svg__l)" r={1} />
        <Path
          d="M0 0h1v2H0zM2 0h1v2H2z"
          fill="#28AE67"
          mask="url(#TM_svg__l)"
        />
      </G>
      <Path
        d="M11.117 3.179a.5.5 0 1 0 .766.642.5.5 0 0 0-.766-.642zM9.821 5.117a.5.5 0 1 0-.642.766.5.5 0 0 0 .642-.766zm-1-1a.5.5 0 1 0-.642.766.5.5 0 0 0 .642-.766zm2-2a.5.5 0 1 0-.642.766.5.5 0 0 0 .642-.766zm-.5 1.5a.5.5 0 1 0-.642.766.5.5 0 0 0 .642-.766z"
        fill="url(#TM_svg__a)"
      />
      <Path
        d="M13.107 7.088a3.05 3.05 0 0 1-4.626-.366 3.05 3.05 0 0 0 4.26-4.26 3.05 3.05 0 0 1 .366 4.626z"
        fill="url(#TM_svg__a)"
      />
    </G>
  </Svg>
);

export default SvgTm;
