import Svg, { Circle, Path } from "react-native-svg"

export default function Bell() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path d="M18.53 17.38H4.79996V9.46999C4.79996 5.67999 7.86996 2.59999 11.67 2.59999C15.46 2.59999 18.54 5.66999 18.54 9.46999V17.38H18.53Z" stroke="#333333" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M2.60001 17.38H20.73" stroke="#333333" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M13.68 19.37C13.68 20.48 12.78 21.39 11.66 21.39C10.54 21.39 9.64 20.49 9.64 19.37" stroke="#333333" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx={17} cy={4} r={3.25} fill="#FF6967" stroke="white" strokeWidth={1.5} />
    </Svg>
  );
}

