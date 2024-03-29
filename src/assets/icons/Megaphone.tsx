import Svg, { Path } from 'react-native-svg';

interface MegaphoneProps {
  color?: string;
}

export default function Megaphone({ color = "#5372E7" }: MegaphoneProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path d="M12.6744 5.19531L6.87763 9.86292C6.56922 10.1112 6.43639 10.5182 6.53887 10.9006L7.26115 13.5962C7.36558 13.9859 7.69399 14.2747 8.09389 14.3285L15.4046 15.3109C16.1121 15.406 16.6885 14.7505 16.5037 14.061L14.2675 5.71538C14.0805 5.01726 13.2374 4.74203 12.6744 5.19531Z" stroke={color} strokeWidth={1.2} />
      <Path d="M3.97312 10.9132L5.4046 10.5296C5.93807 10.3867 6.4864 10.7033 6.62934 11.2367L7.17501 13.2732C7.31795 13.8066 7.00137 14.355 6.4679 14.4979L5.03643 14.8815C4.50296 15.0244 3.95462 14.7078 3.81168 14.1744L3.26602 12.1379C3.12308 11.6045 3.43966 11.0561 3.97312 10.9132Z" stroke={color} strokeWidth={1.2} />
      <Path d="M6.32186 14.537L6.66541 14.4449C7.19887 14.302 7.74721 14.6185 7.89015 15.152L8.7716 18.4416C8.91454 18.9751 8.59796 19.5234 8.06449 19.6664L7.72095 19.7584C7.18748 19.9013 6.63914 19.5848 6.4962 19.0513L5.61476 15.7617C5.47182 15.2282 5.7884 14.6799 6.32186 14.537Z" stroke={color} strokeWidth={1.2} />
      <Path d="M17.4386 8.64819L19.8127 8.01205" stroke={color} strokeWidth={1.2} strokeLinecap="round" />
      <Path d="M16.767 6.14189L18.4873 4.33783" stroke={color} strokeWidth={1.2} strokeLinecap="round" />
      <Path d="M20.5019 11.8569L18.1101 11.1546" stroke={color} strokeWidth={1.2} strokeLinecap="round" />
    </Svg>
  );
}
