import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Book from '../../assets/icons/Book';
import Megaphone from '../../assets/icons/Megaphone';
import ProgressBar from '../progress/ProgressBar';

interface RecentCardProps {
  title: string;
  subTitle: string;
  progress: number;
  icon?: string;
  color?: string;
  handlePress: () => void;
}

const RecentCard: React.FC<RecentCardProps> = ({ title, subTitle, icon, color, progress, handlePress }) => {
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.recentCard}>
        <View style={styles.recentIcon}>
          {icon === 'book' && <Book />}
          {icon === 'megaphone' && <Megaphone />}
        </View>
        <Text style={styles.titleRecentCard}>{title}</Text>
        <Text style={styles.subTitleRecentCard}>{subTitle}</Text>
        <ProgressBar progress={progress} color={color} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  recentCard: {
    width: 155,
    padding: 16,
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: '#FAFAFD',
  },
  recentIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    elevation: 4,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  titleRecentCard: {
    marginTop: 16,
    marginBottom: 8,
    color: '#333333',
    fontSize: 14,
    lineHeight: 17.07,
    fontFamily: 'Montserrat_600SemiBold',
  },
  subTitleRecentCard: {
    marginBottom: 16,
    color: '#999999',
    fontSize: 12,
    lineHeight: 16.37,
    fontFamily: 'Nunito_400Regular',
  },
});

export default RecentCard;
