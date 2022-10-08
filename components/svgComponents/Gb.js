import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgGb = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GB_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GB_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#0A17A7" />
        <Stop offset="100%" stopColor="#030E88" />
      </LinearGradient>
      <LinearGradient id="GB_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E6273E" />
        <Stop offset="100%" stopColor="#CF152B" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GB_svg__a)" />
      <Path d="M-.002 0h21v15h-21z" fill="url(#GB_svg__b)" />
      <Path
        d="M5.003 10H-.002V5h5.005L-2.082.22l1.118-1.657 8.962 6.045V-1h5v5.608l8.962-6.045L23.078.22 15.993 5h5.005v5h-5.005l7.085 4.78-1.118 1.657-8.962-6.045V16h-5v-5.608l-8.962 6.045-1.118-1.658L5.003 10z"
        fill="url(#GB_svg__a)"
      />
      <Path
        d="M14.136 4.958l9.5-6.25a.25.25 0 0 0-.275-.417l-9.5 6.25a.25.25 0 1 0 .275.417zM14.868 10.48l8.515 5.74a.25.25 0 1 0 .28-.415l-8.516-5.74a.25.25 0 0 0-.279.415zM6.142 4.526L-2.74-1.461a.25.25 0 0 0-.28.415L5.863 4.94a.25.25 0 0 0 .279-.414zM6.827 9.995l-9.845 6.53a.25.25 0 1 0 .276.416l9.846-6.529a.25.25 0 0 0-.277-.417z"
        fill="#DB1F35"
        fillRule="nonzero"
      />
      <Path d="M-.002 9h9v6h3V9h9V6h-9V0h-3v6h-9z" fill="url(#GB_svg__c)" />
    </G>
  </Svg>
);

export default SvgGb;
