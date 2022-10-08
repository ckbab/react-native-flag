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

const SvgGs = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GS_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GS_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#07319C" />
        <Stop offset="100%" stopColor="#00247E" />
      </LinearGradient>
      <LinearGradient id="GS_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#DB1E36" />
        <Stop offset="100%" stopColor="#D51931" />
      </LinearGradient>
      <LinearGradient id="GS_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1E1E1E" />
        <Stop offset="100%" />
      </LinearGradient>
      <Ellipse cx={0.5} cy={1.5} id="GS_svg__d" rx={1} ry={1.5} />
      <LinearGradient id="GS_svg__h" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#A2ADB0" />
        <Stop offset="100%" stopColor="#8B9497" />
      </LinearGradient>
      <Ellipse cx={0.5} cy={1.5} id="GS_svg__g" rx={1} ry={1.5} />
      <LinearGradient id="GS_svg__i" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#4F4F4F" />
        <Stop offset="100%" stopColor="#2B2B2B" />
      </LinearGradient>
      <LinearGradient id="GS_svg__k" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FEC241" />
        <Stop offset="100%" stopColor="#FEBB2C" />
      </LinearGradient>
      <LinearGradient id="GS_svg__l" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#A84B14" />
        <Stop offset="100%" stopColor="#913F0E" />
      </LinearGradient>
      <LinearGradient id="GS_svg__m" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#CFB063" />
        <Stop offset="100%" stopColor="#BEA157" />
      </LinearGradient>
      <LinearGradient id="GS_svg__n" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#2D42FF" />
        <Stop offset="100%" stopColor="#0B24FC" />
      </LinearGradient>
      <LinearGradient id="GS_svg__o" x1="0%" x2="100%" y1="0%" y2="50%">
        <Stop offset="0%" stopColor="#E3DC3D" />
        <Stop offset="100%" stopColor="#CFC82A" />
      </LinearGradient>
      <LinearGradient id="GS_svg__p" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#7F7D7D" />
        <Stop offset="100%" stopColor="#656263" />
      </LinearGradient>
      <Path
        d="M.007.506A.489.489 0 0 1 .495 0h2.01c.273 0 .498.23.502.506L3.03 2.25a.52.52 0 0 1-.207.388l-1.095.722a.414.414 0 0 1-.417 0L.24 2.639a.526.526 0 0 1-.21-.388L.007.506z"
        id="GS_svg__q"
      />
      <LinearGradient id="GS_svg__s" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0F8012" />
        <Stop offset="100%" stopColor="#0B6A0D" />
      </LinearGradient>
      <LinearGradient id="GS_svg__t" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFCF44" />
        <Stop offset="100%" stopColor="#FCC72E" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GS_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#GS_svg__b)" />
      <Path
        d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
        fill="url(#GS_svg__a)"
        fillRule="nonzero"
      />
      <Path
        d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
        fill="url(#GS_svg__c)"
      />
      <Path
        d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5H0z"
        fill="url(#GS_svg__a)"
      />
      <Path d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" fill="url(#GS_svg__c)" />
      <G transform="translate(18 8)">
        <Mask fill="#fff" id="GS_svg__f">
          <Use xlinkHref="#GS_svg__d" />
        </Mask>
        <Use fill="url(#GS_svg__e)" xlinkHref="#GS_svg__d" />
        <Ellipse
          cy={2}
          fill="url(#GS_svg__a)"
          mask="url(#GS_svg__f)"
          rx={1}
          ry={1.5}
        />
      </G>
      <G transform="translate(14 8)">
        <Mask fill="#fff" id="GS_svg__j">
          <Use xlinkHref="#GS_svg__g" />
        </Mask>
        <Use fill="url(#GS_svg__h)" xlinkHref="#GS_svg__g" />
        <Ellipse
          cx={1}
          cy={2}
          fill="url(#GS_svg__i)"
          mask="url(#GS_svg__j)"
          rx={1}
          ry={1.5}
        />
      </G>
      <Path
        d="M16.5 12.5c.828.5 1.5.276 1.5 0s-.672-.5-1.5-.5-1.5.224-1.5.5.672.5 1.5 0z"
        fill="url(#GS_svg__k)"
      />
      <Circle cx={18.5} cy={5.5} fill="url(#GS_svg__a)" r={1} />
      <Circle cx={16.5} cy={4.5} fill="url(#GS_svg__l)" r={1} />
      <Ellipse cx={16.5} cy={3.75} fill="url(#GS_svg__m)" rx={1} ry={1} />
      <Circle cx={16.5} cy={11.5} fill="url(#GS_svg__a)" r={1} />
      <Circle cx={14.5} cy={5.5} fill="url(#GS_svg__a)" r={1} />
      <Circle cx={15} cy={6.5} fill="url(#GS_svg__n)" r={1} />
      <Circle cx={18} cy={6.5} fill="url(#GS_svg__n)" r={1} />
      <Ellipse cx={19} cy={8} fill="url(#GS_svg__o)" rx={1} ry={1} />
      <Path
        d="M16 7.5l-.5.5h2l-.5-.5.5-1.5s-.448-1-1-1-1 1-1 1l.5 1.5z"
        fill="url(#GS_svg__p)"
      />
      <Path
        d="M16.5 6.5s.5-.112.5-.38c0-.008-.5-.12-.5-.12s-.5.112-.5.12c0 .268.5.38.5.38z"
        fill="#5D0543"
      />
      <G transform="translate(15 8)">
        <Mask fill="#fff" id="GS_svg__r">
          <Use xlinkHref="#GS_svg__q" />
        </Mask>
        <Use fill="url(#GS_svg__a)" xlinkHref="#GS_svg__q" />
        <Circle cx={2.5} cy={2.5} fill="#225DA4" mask="url(#GS_svg__r)" r={1} />
        <Circle cx={0.5} cy={1.5} fill="#225DA4" mask="url(#GS_svg__r)" r={1} />
        <Path d="M0 0h3L1.5 3z" fill="url(#GS_svg__s)" mask="url(#GS_svg__r)" />
        <Ellipse
          cx={1.5}
          cy={1.5}
          fill="url(#GS_svg__t)"
          mask="url(#GS_svg__r)"
          rx={1}
          ry={1}
        />
      </G>
    </G>
  </Svg>
);

export default SvgGs;
