import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Quizzes from '../../../../data/Quizzes.json';
import PopularCard from '../../../components/cards/PopularCard';

type PopularQuizProps = {}

const PopularQuiz: React.FC<PopularQuizProps> = () => {

  const navigation = useNavigation();

  const handlePressCard = (cardId: number) => {
    navigation.navigate('Details', { cardId });
  };

  const PopularQuizzes = Quizzes.filter((quiz) => quiz.isPopular === true);
  return (
    <View style={styles.popularQuiz}>
      <Text style={styles.titlePopularQuiz}>Popular Quiz</Text>
      <FlatList
        data={PopularQuizzes}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PopularCard
            key={item.id}
            title={item.title}
            icon={item.icon}
            color={item.color}
            rate={item.rate}
            countQuestions={item.questions.length}
            onPress={() => handlePressCard(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  popularQuiz: {
    flex: 1,
    paddingTop: '8%',
  },
  titlePopularQuiz: {
    color: '#999999',
    fontSize: 14,
    lineHeight: 17.07,
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: '5%',
  },
  flatListContainer: {
    paddingBottom: '5%',
  },
});

export default PopularQuiz;
