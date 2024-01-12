import Svg, { Path } from 'react-native-svg';

interface ClockProps {
  color?: string;
}

export default function Clock({ color = "#FF9F24" }: ClockProps) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M12 20.86C16.8933 20.86 20.86 16.8933 20.86 12C20.86 7.10677 16.8933 3.14001 12 3.14001C7.10677 3.14001 3.14001 7.10677 3.14001 12C3.14001 16.8933 7.10677 20.86 12 20.86Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M11.9999 7.16003V12L14.9799 13.42" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
