import { View } from 'react-native';
import { Svg, Circle, Text } from 'react-native-svg';

interface CircularProgressProps {
  progress: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ progress }) => {
  const radius = 41;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const progressStrokeDasharray = `${(circumference * progress) / 100} ${circumference}`;

  return (
    <View>
      <Svg height={2 * radius} width={2 * radius}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="transparent"
          stroke="#FAFAFA"
          strokeWidth={strokeWidth}
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="transparent"
          stroke="#6FD0D7"
          strokeWidth={strokeWidth}
          strokeDasharray={progressStrokeDasharray}
          strokeLinecap="round"
        />
        <Text
          x={radius}
          y={radius}
          fill="#4E5C66"
          fontSize={14}
          fontWeight="bold"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {`${progress}%`}
        </Text>
      </Svg>
    </View>
  );
};

export default CircularProgress;
