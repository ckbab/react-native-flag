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

const SvgGbNir = (props) => (
  <Svg height={15} viewBox="0 0 21 15" width={21} {...props}>
    <Defs>
      <LinearGradient id="GB-NIR_svg__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFF" />
        <Stop offset="100%" stopColor="#F0F0F0" />
      </LinearGradient>
      <LinearGradient id="GB-NIR_svg__b" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E82739" />
        <Stop offset="100%" stopColor="#CA1A2B" />
      </LinearGradient>
      <LinearGradient id="GB-NIR_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#E6101E" />
        <Stop offset="100%" stopColor="#CA0814" />
      </LinearGradient>
      <LinearGradient id="GB-NIR_svg__e" x1="50%" x2="50%" y1="0%" y2="100%">
        <Stop offset="0%" stopColor="#FFD148" />
        <Stop offset="100%" stopColor="#FFCB2F" />
      </LinearGradient>
      <Path
        d="M9 3.75L10 4l.5-.5.5.5 1-.25-.404 1.009a.4.4 0 0 1-.341.241h-1.51a.39.39 0 0 1-.341-.241L9 3.75zM10.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        id="GB-NIR_svg__d"
      />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h21v15H0z" fill="url(#GB-NIR_svg__a)" />
      <Path d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" fill="url(#GB-NIR_svg__b)" />
      <Path
        d="M11.516 9.26L10.5 11 9.484 9.26l-2.015-.01.998-1.75-.998-1.75 2.015-.01L10.5 4l1.016 1.74 2.015.01-.998 1.75.998 1.75z"
        fill="url(#GB-NIR_svg__a)"
      />
      <Path
        d="M9.55 7.006a.656.656 0 0 1 .425-.664l.55-.184c.263-.087.475.063.475.35V7.5s.321-1.037.5-.5c.179.537-.128 1.526-.128 1.526a.671.671 0 0 1-.63.474h-.484c-.28 0-.531-.23-.559-.506l-.148-1.488z"
        fill="url(#GB-NIR_svg__c)"
      />
      <Path
        d="M10.5 2.908c-.511 0-.967.304-1.168.763l-.1.229.457.201.1-.229a.775.775 0 0 1 1.418-.005l.102.228.456-.205-.102-.228a1.275 1.275 0 0 0-1.164-.754z"
        fill="url(#GB-NIR_svg__a)"
        fillRule="nonzero"
      />
      <Mask fill="#fff" id="GB-NIR_svg__f">
        <Use xlinkHref="#GB-NIR_svg__d" />
      </Mask>
      <Use fill="url(#GB-NIR_svg__e)" xlinkHref="#GB-NIR_svg__d" />
      <Circle
        cx={10.5}
        cy={4.5}
        fill="#5169E2"
        mask="url(#GB-NIR_svg__f)"
        r={1}
      />
      <Circle
        cx={11.5}
        cy={4.5}
        fill="#D34D43"
        mask="url(#GB-NIR_svg__f)"
        r={1}
      />
      <Circle
        cx={9.5}
        cy={4.5}
        fill="#D34D43"
        mask="url(#GB-NIR_svg__f)"
        r={1}
      />
    </G>
  </Svg>
);

export default SvgGbNir;
