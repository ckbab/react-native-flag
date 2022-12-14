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

const SvgGd = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GD_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GD_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E42235" />
        <Stop offset="100%" stopColor="#CE1225" />
      </LinearGradient>
      <LinearGradient id="GD_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#079B77" />
        <Stop offset="100%" stopColor="#007B5D" />
      </LinearGradient>
      <Path d="M0 0h17v11H0z" id="GD_svg__c" />
      <LinearGradient id="GD_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD938" />
        <Stop offset="100%" stopColor="#FDD117" />
      </LinearGradient>
      <LinearGradient id="GD_svg__g" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD93B" />
        <Stop offset="100%" stopColor="#FDD117" />
      </LinearGradient>
      <LinearGradient id="GD_svg__h" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E21C30" />
        <Stop offset="100%" stopColor="#CE1225" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GD_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#GD_svg__b)" />
      <G transform="translate(2 2)">
        <Mask fill="#fff" id="GD_svg__f">
          <Use xlinkHref="#GD_svg__c" />
        </Mask>
        <Use fill="url(#GD_svg__d)" xlinkHref="#GD_svg__c" />
        <Path
          d="M1.295 5.599c.283.453.69.752 1.068.829.209.042-.173-.914-.007-1.018.142-.088.825.706.885.54.137-.38.056-.921-.25-1.411-.439-.703-.456-.239-1.643-.742.124.72-.492 1.1-.053 1.802z"
          fill="url(#GD_svg__e)"
          mask="url(#GD_svg__f)"
        />
        <Path
          d="M0 0h17L8.5 5.5 0 0zm0 11l8.5-5.5L17 11H0z"
          fill="url(#GD_svg__g)"
          mask="url(#GD_svg__f)"
        />
        <Circle
          cx={8.5}
          cy={5.5}
          fill="url(#GD_svg__h)"
          mask="url(#GD_svg__f)"
          r={2.5}
        />
        <Path
          d="M8.5 6.271l-1.176.847.442-1.38-1.168-.856 1.449-.006L8.5 3.5l.453 1.376 1.45.006-1.17.856.443 1.38z"
          fill="url(#GD_svg__e)"
          mask="url(#GD_svg__f)"
        />
      </G>
    </G>
  </Svg>
);

export default SvgGd;
