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

const SvgRs = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="RS_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="RS_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#17508F" />
        <Stop offset="100%" stopColor="#114175" />
      </LinearGradient>
      <LinearGradient id="RS_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E1444D" />
        <Stop offset="100%" stopColor="#C53840" />
      </LinearGradient>
      <Path
        d="M.5 2.5C.5 1.826.874.485.874.485A.672.672 0 0 1 1.495 0h2.01c.273 0 .552.214.621.481 0 0 .374 1.33.374 2.019 0 .645-.376 2.02-.376 2.02-.069.265-.269.654-.457.852 0 0-.417.628-1.167.628s-1.167-.628-1.167-.628a2.428 2.428 0 0 1-.46-.86S.5 3.162.5 2.5z"
        id="RS_svg__d"
      />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#RS_svg__a)" />
      <Path d="M0 5h21v5H0z" fill="url(#RS_svg__b)" />
      <Path d="M0 0h21v5H0z" fill="url(#RS_svg__c)" />
      <Path d="M0 10h21v5H0z" fill="url(#RS_svg__a)" />
      <G transform="translate(4 5)">
        <Mask fill="#fff" id="RS_svg__e">
          {/* <Use xlinkHref="#RS_svg__d" /> */}
        </Mask>
        <Use fill="url(#RS_svg__a)" xlinkHref="#RS_svg__d" />
        <Path
          d="M4.422-.203L-.203 5.578l.781.625L5.203.422z"
          fill="#C43840"
          fillRule="nonzero"
          mask="url(#RS_svg__e)"
        />
        <Path
          d="M-.203.422l4.625 5.78.78-.624L.579-.202z"
          fill="#C43840"
          fillRule="nonzero"
          mask="url(#RS_svg__e)"
        />
      </G>
      <Ellipse cx={6.5} cy={7.5} fill="#FFF" rx={1} ry={1.5} />
      <Path
        d="M5 4l-.5-1 1 .5 1-.5 1 .5 1-.5L8 4v.5c0 .276-.216.5-.495.5h-2.01A.503.503 0 0 1 5 4.5V4z"
        fill="#D1A43A"
      />
    </G>
  </Svg>
);

export default SvgRs;
