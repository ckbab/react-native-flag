import React from "react";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const SvgNc = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="NC_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="NC_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#094CC7" />
        <Stop offset="100%" stopColor="#003CAB" />
      </LinearGradient>
      <LinearGradient id="NC_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#2AAD55" />
        <Stop offset="100%" stopColor="#219447" />
      </LinearGradient>
      <LinearGradient id="NC_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F65D55" />
        <Stop offset="100%" stopColor="#E9443C" />
      </LinearGradient>
      <LinearGradient id="NC_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FAE749" />
        <Stop offset="100%" stopColor="#FBE533" />
      </LinearGradient>
      <LinearGradient id="NC_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#NC_svg__a)" />
      <Path d="M0 0h21v5H0z" fill="url(#NC_svg__b)" />
      <Path d="M0 10h21v5H0z" fill="url(#NC_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#NC_svg__d)" />
      <Circle cx={10.5} cy={7.5} fill="url(#NC_svg__e)" r={3.5} />
      <Path
        d="M10.092 6.211a.5.5 0 1 0 .514-.2c.048-.024.096-.05.144-.078.598-.345.97-.819.833-1.058-.139-.24-.735-.153-1.333.192s-.97.819-.833 1.058c.086.148.347.171.675.086zM10.5 10.5c-.828 0-1-.724-1-1s.172-.5 1-.5c.828 0 1 .224 1 .5s-.172 1-1 1zm0-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        fill="url(#NC_svg__f)"
      />
    </G>
  </Svg>
);

export default SvgNc;
