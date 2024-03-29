import Svg, { Path } from "react-native-svg";
interface BookProps {
  color?: string;
}
export default function Book({ color = "#21BDCA" }: BookProps) {
  return (
    <Svg width="19" height="14" viewBox="0 0 19 14" fill="none">
      <Path d="M18.4734 13.0001C16.1577 12.158 14.2629 11.3159 10.0524 12.5791V2.89491H18.4734V13.0001Z" stroke={color} />
      <Path d="M1.00004 13.0001C3.31583 12.158 5.21056 11.3159 9.42107 12.5791V2.89491H1.00004V13.0001Z" stroke={color} />
      <Path d="M9.63132 2.71998C7.77869 0.530511 4.15765 0.73304 2.68398 1.66735V11.141C5.42081 10.6277 8.36817 11.4698 9.63132 11.9831V2.71998Z" fill="white" stroke={color} />
      <Path d="M9.84215 2.71998C11.6948 0.530511 15.3158 0.73304 16.7895 1.66735V11.141C14.0527 10.6277 11.1053 11.4698 9.84215 11.9831V2.71998Z" fill="white" stroke={color} />
    </Svg>
  );
}
