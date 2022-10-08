import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgBb = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="BB_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="BB_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#1132C7" />
        <Stop offset="100%" stopColor="#0522A5" />
      </LinearGradient>
      <LinearGradient id="BB_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#08379D" />
        <Stop offset="100%" stopColor="#042A7D" />
      </LinearGradient>
      <LinearGradient id="BB_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFCC50" />
        <Stop offset="100%" stopColor="#FFC63C" />
      </LinearGradient>
      <LinearGradient id="BB_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#BB_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#BB_svg__b)" />
      <Path d="M10 0h11v15H10zM0 0h7v15H0z" fill="url(#BB_svg__c)" />
      <Path d="M7 0h7v15H7z" fill="url(#BB_svg__d)" />
      <Path
        d="M10.378 4.709c.079-.116.206-.11.278 0l.708 1.082c.075.116.019.209-.118.209h-.242a.221.221 0 0 0-.23.249l.201 2.002c.014.138.141.249.275.249a.695.695 0 0 0 .43-.179l.14-.137c.1-.099.18-.286.18-.432v-.498a.696.696 0 0 0-.18-.435l-.14-.138c-.1-.1-.082-.214.054-.26l1.032-.343c.13-.043.214.03.188.17l-.368 2.003a.918.918 0 0 1-.227.423l-.678.652a.726.726 0 0 1-.431.174.247.247 0 0 0-.25.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 0 1-.252-.252v-.496a.254.254 0 0 0-.25-.252.69.69 0 0 1-.424-.174l-.652-.652a.956.956 0 0 1-.224-.423l-.4-2.002c-.028-.138.048-.216.184-.17l1.032.343c.13.043.156.156.053.259l-.138.138c-.1.1-.181.289-.181.435v.498c0 .14.078.33.18.432l.14.137c.1.1.296.179.43.179.138 0 .26-.107.275-.249l.2-2.002A.225.225 0 0 0 9.996 6h-.242c-.14 0-.187-.098-.112-.209l.736-1.082z"
        fill="url(#BB_svg__e)"
      />
    </G>
  </Svg>
);

export default SvgBb;
