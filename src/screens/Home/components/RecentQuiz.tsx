import { View, Text, StyleSheet, FlatList } from 'react-native';
import RecentCard from '../../../components/cards/RecentCard';
import Quizzes from '../../../../data/Quizzes.json';
import { useNavigation } from '@react-navigation/native';

interface RecentQuizProps { }

const RecentQuiz: React.FC<RecentQuizProps> = () => {
  const navigation = useNavigation();

  const handlePressRecentQuiz = (cardId: number) => {
    navigation.navigate('Details', { cardId });
  };
  const RecentQuizzes = Quizzes.filter((quiz) => quiz.isRecent === true);

  return (
    <View style={styles.recentQuiz}>
      <Text style={styles.titleRecentQuiz}>Recent Quiz</Text>
      <FlatList
        data={RecentQuizzes}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <RecentCard
            title={item.title}
            subTitle={`You completed 50%`}
            progress={50}
            icon={item.icon}
            color={item.color}
            handlePress={() => handlePressRecentQuiz(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recentQuiz: {
    paddingTop: '8%',
    width: '100%',
  },
  titleRecentQuiz: {
    color: '#999999',
    fontSize: 14,
    lineHeight: 17.07,
    fontFamily: 'Montserrat_600SemiBold',
  },
  flatListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,

  },
});

export default RecentQuiz;
