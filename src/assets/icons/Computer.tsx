import Svg, { Rect, Path } from 'react-native-svg';

export default function Computer() {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path
        d="M25 7.09393H7.00003C6.44775 7.09393 6.00003 7.54165 6.00003 8.09393V19.8082C6.00003 20.3605 6.44775 20.8082 7.00003 20.8082H25C25.5523 20.8082 26 20.3605 26 19.8082V8.09393C26 7.54165 25.5523 7.09393 25 7.09393Z"
        stroke="#FF9F24"
        strokeWidth="1.5"
      />
      <Rect x="4.00003" y="23.4059" width="24" height="1.5" rx="0.75" fill="#FF9F24" />
    </Svg>
  );
}
