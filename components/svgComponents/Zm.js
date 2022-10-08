import React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const SvgZm = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="ZM_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="ZM_svg__b" x1="50%" x2="50%" y1="100%" y2="0%">
        <Stop offset="0%" stopColor="#2A8815" />
        <Stop offset="100%" stopColor="#35A51D" />
      </LinearGradient>
      <LinearGradient id="ZM_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EF8A34" />
        <Stop offset="100%" stopColor="#EC7E21" />
      </LinearGradient>
      <LinearGradient id="ZM_svg__d" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#F48D36" />
        <Stop offset="100%" stopColor="#EC7E21" />
      </LinearGradient>
      <LinearGradient id="ZM_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#262626" />
        <Stop offset="100%" stopColor="#0D0D0D" />
      </LinearGradient>
      <LinearGradient id="ZM_svg__f" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#EC322B" />
        <Stop offset="100%" stopColor="#DB261F" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#ZM_svg__a)" />
      <Path d="M0 0h21v15H0z" fill="url(#ZM_svg__b)" />
      <Path
        d="M16.196 3.624s-.403.153-.834 0c-.342-.122-.687-.534-.97-.677-.164-.083.14-.478-.184-.371-.325.106-.855-.39-.855-.39s-.548-.667.259-.667 2.51.58 2.51.58.063-.3.202-.438.242-.265.47-.23c.227.034.353.355.353.355l-.354.135v.266s2.362-.724 2.92-.668c.558.056.109.669-.228 1.057-.13.15-.556.456-.815.21-.259-.245-.163.266-.43.43-.438.27-.602.516-.753.587-.15.072-.479 0-.479 0l.096.247s.027.296-.096.414-.208.202-.508.166c-.3-.035-.441.04-.541-.29-.1-.33.237-.716.237-.716zm.247-.342v.772l.339-.284-.34-.488z"
        fill="url(#ZM_svg__c)"
      />
      <Path d="M18 6h3v9h-3z" fill="url(#ZM_svg__d)" />
      <Path d="M15 6h3v9h-3z" fill="url(#ZM_svg__e)" />
      <Path d="M12 6h3v9h-3z" fill="url(#ZM_svg__f)" />
    </G>
  </Svg>
);

export default SvgZm;
