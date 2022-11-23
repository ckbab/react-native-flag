import React from "react";
import Svg, { Circle, G, Path, Use } from "react-native-svg";

const SvgKr = (props) => (
  <Svg height={15} viewBox="-36 -24 72 48" width={21} {...props}>
    <Path d="M-36-24h72v48h-72z" fill="#fff" />
    <G transform="rotate(-56.3099325)">
      <G id="b2">
        <Path d="M-6-26H6v2H-6zm0 3H6v2H-6zm0 3H6v2H-6z" fill="#000" id="b" />
        <Use xlinkHref="#b" y="44" />
      </G>
      <Path d="M0,17v10" stroke="#fff" />
      <Path d="M0-12A12 12 0 0 1 0 12z" fill="#cd2e3a" />
      <Path d="M0-12A12 12 0 0 0 0 12 6 6 0 0 0 0 0z" fill="#0047a0" />
      <Circle cy="-6" fill="#cd2e3a" r="6" />
    </G>
    <G transform="rotate(-123.6900675)">
      <Use xlinkHref="#b2" />
      <Path d="M0-23.5v3M0,17v3.5M0,23.5v3" stroke="#fff" />
    </G>
  </Svg>
);

export default SvgKr;
