import { View } from 'react-native';

interface ProgressBarProps {
  progress: number;
  width?: number;
  height?: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 6,
  color,
}) => {
  return (
    <View style={{ height, borderRadius: height / 2, overflow: 'hidden' }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View
          style={{
            flex: progress,
            height,
            backgroundColor: color,
            borderRadius: height / 2,
          }}
        />
        <View
          style={{
            flex: 100 - progress,
            backgroundColor: '#F2F2F2',
            borderRadius: height / 2,
          }}
        />
      </View>
    </View>
  );
};


export default ProgressBar;
