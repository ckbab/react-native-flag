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
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgYt = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="YT_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <Path
        d="M0 .491A.49.49 0 0 1 .498 0h4.004A.5.5 0 0 1 5 .491v5.018a.535.535 0 0 1-.5.522S3 6 2.5 6.94C2 6 .5 6.03.5 6.03a.54.54 0 0 1-.5-.522V.491z"
        id="YT_svg__b"
      />
      <LinearGradient id="YT_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1B2CA9" />
        <Stop offset="100%" stopColor="#132294" />
      </LinearGradient>
      <Path d="M0 0h5v3H0z" id="YT_svg__e" />
      <LinearGradient id="YT_svg__i" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E6402C" />
        <Stop offset="100%" stopColor="#D1321F" />
      </LinearGradient>
      <Path d="M0 3h5v4H0z" id="YT_svg__h" />
      <LinearGradient id="YT_svg__j" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#D0D0D0" />
        <Stop offset="100%" stopColor="#C4C4C4" />
      </LinearGradient>
      <LinearGradient id="YT_svg__k" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="YT_svg__l" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F7E04B" />
        <Stop offset="100%" stopColor="#EAD135" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#YT_svg__a)" />
      <G transform="translate(8 4)">
        <Mask fill="#fff" id="YT_svg__c">
          <Use href="#YT_svg__b" xlinkHref="#YT_svg__b" />
        </Mask>
        <Use fill="#D8D8D8" href="#YT_svg__b" xlinkHref="#YT_svg__b" />
        <Path
          d="M4.5.5V.491.5zm0 0h.002H4.5zm-4 0v5.009s.02.022-.01.022H.5c.342-.004.793.048 1.25.213.285.102.538.24.75.418.212-.178.465-.316.75-.418.444-.16.882-.214 1.22-.213.02-.005.03-.017.03-.022V.5s0 0 0 0h-4z"
          stroke="#979797"
        />
        <G mask="url(#YT_svg__c)">
          <Use
            fill="#000"
            filter="url(#YT_svg__d)"
            href="#YT_svg__e"
            xlinkHref="#YT_svg__e"
          />
          <Use
            fill="url(#YT_svg__f)"
            href="#YT_svg__e"
            xlinkHref="#YT_svg__e"
          />
        </G>
        <G mask="url(#YT_svg__c)">
          <Use
            fill="#000"
            filter="url(#YT_svg__g)"
            href="#YT_svg__h"
            xlinkHref="#YT_svg__h"
          />
          <Use
            fill="url(#YT_svg__i)"
            href="#YT_svg__h"
            xlinkHref="#YT_svg__h"
          />
        </G>
      </G>
      <G transform="translate(14 3)">
        <Path
          d="M1.039 1.726v-.464L1.5 1S1.045.444 1.27.444C1.545.444 2.7.81 3 1c.3.19.453.418.496.85.042.431-.316.981-.316.981L3 3.25l.788-.179s.128.826-.452 1.429c-.58.603-1.395.49-1.395.49l-.164-.49s-.53.206-.843.674C.62 5.642.533 6.45 1.039 6.95c.506.5 1.341.457 1.74-.245 0 0 .159-.62-.21-.912-.367-.291-.616.311-.628.278-.071-.21-.164-.57.428-.57s.896.637.81 1.126c-.084.489-.255.953-1.402 1.083C.631 7.84.336 6.386.336 6.386s-.292-1.356 0-2.335c.292-.98.725-1.004 1.605-1.541.88-.538-.531-.183-.531-.183s-.67.504-.88.32c-.21-.183.509-.921.509-.921z"
          fill="url(#YT_svg__j)"
        />
        <Circle
          cx={1.75}
          cy={1.75}
          fill="url(#YT_svg__k)"
          fillOpacity={0.3}
          r={1}
        />
      </G>
      <G transform="matrix(-1 0 0 1 7 3)">
        <Path
          d="M1.039 1.726v-.464L1.5 1S1.045.444 1.27.444C1.545.444 2.7.81 3 1c.3.19.453.418.496.85.042.431-.316.981-.316.981L3 3.25l.788-.179s.128.826-.452 1.429c-.58.603-1.395.49-1.395.49l-.164-.49s-.53.206-.843.674C.62 5.642.533 6.45 1.039 6.95c.506.5 1.341.457 1.74-.245 0 0 .159-.62-.21-.912-.367-.291-.616.311-.628.278-.071-.21-.164-.57.428-.57s.896.637.81 1.126c-.084.489-.255.953-1.402 1.083C.631 7.84.336 6.386.336 6.386s-.292-1.356 0-2.335c.292-.98.725-1.004 1.605-1.541.88-.538-.531-.183-.531-.183s-.67.504-.88.32c-.21-.183.509-.921.509-.921z"
          fill="url(#YT_svg__j)"
        />
        <Circle
          cx={1.75}
          cy={1.75}
          fill="url(#YT_svg__k)"
          fillOpacity={0.3}
          r={1}
        />
      </G>
      <Path
        d="M9.634 5a1 1 0 1 0 1.732 0 1 1 0 0 1-1.732 0z"
        fill="url(#YT_svg__a)"
      />
      <Path
        d="M9.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="url(#YT_svg__l)"
      />
    </G>
  </Svg>
);

export default SvgYt;
