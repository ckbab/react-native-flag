import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgGq = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GQ_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GQ_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EC3938" />
        <Stop offset="100%" stopColor="#E12524" />
      </LinearGradient>
      <LinearGradient id="GQ_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#51B422" />
        <Stop offset="100%" stopColor="#429919" />
      </LinearGradient>
      <LinearGradient id="GQ_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#258DE7" />
        <Stop offset="100%" stopColor="#1276CC" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GQ_svg__a)" />
      <Path d="M0 10h21v5H0z" fill="url(#GQ_svg__b)" />
      <Path d="M0 0h21v5H0z" fill="url(#GQ_svg__c)" />
      <Path d="M0 5h21v5H0z" fill="url(#GQ_svg__a)" />
      <Path
        d="M10.066 8.932a.73.73 0 0 0 .175-.425l.008-1.264A.25.25 0 0 0 9.996 7h-.242c-.14 0-.176-.078-.08-.174l.652-.652a.247.247 0 0 1 .348 0l.652.652c.096.096.057.174-.08.174h-.242a.253.253 0 0 0-.254.243v1.264c0 .134.08.322.17.414l-.09-.092c.093.094.063.171-.082.171h-.496c-.139 0-.176-.08-.078-.182l-.108.114z"
        fill="#159940"
      />
      <Path d="M0 0l7 7.5L0 15z" fill="url(#GQ_svg__d)" />
    </G>
  </Svg>
);

export default SvgGq;
