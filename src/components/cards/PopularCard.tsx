import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Star from '../../assets/icons/Star';
import Computer from '../../assets/icons/Computer';
import Soccer from '../../assets/icons/Soccer';
import Music from '../../assets/icons/Music';
import Book from '../../assets/icons/Book';
import Megaphone from '../../assets/icons/Megaphone';

interface PopularCardProps {
  title: string;
  icon?: string;
  color?: string;
  rate?: number;
  isPopular?: boolean;
  countQuestions?: number;
  onPress: () => void;
}

const PopularCard: React.FC<PopularCardProps> = ({ title, icon, color, rate, countQuestions, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.popularCard}>
        <View style={[styles.popularIcon, { backgroundColor: color }]}>
          {icon === 'computer' && <Computer />}
          {icon === 'soccer' && <Soccer />}
          {icon === 'music' && <Music />}
          {icon === 'book' && <Book color='#FFFFFF' />}
          {icon === 'megaphone' && <Megaphone color='#FFFFFF' />}
        </View>

        <View style={styles.textAlignment}>
          <Text style={styles.titlePopularCard}>{title}</Text>
          <Text style={styles.subTitlePopularCard}>{countQuestions} questões</Text>
        </View>

        <View style={styles.alingmentStar}>
          <Star />
          <Text>{rate}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback >
  );
};

const styles = StyleSheet.create({
  popularCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: '4%',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: '#FFFF',
  },
  popularIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  textAlignment: {
    flex: 1,
    marginLeft: 16,
  },
  titlePopularCard: {
    marginBottom: 8,
    color: '#333333',
    fontSize: 14,
    lineHeight: 17.07,
    fontFamily: 'Montserrat_600SemiBold',
  },
  subTitlePopularCard: {
    color: '#999999',
    fontSize: 12,
    lineHeight: 16.37,
    fontFamily: 'Nunito_400Regular',
  },
  alingmentStar: {
    flexDirection: 'row',
    gap: 4,
  },
});

export default PopularCard;
