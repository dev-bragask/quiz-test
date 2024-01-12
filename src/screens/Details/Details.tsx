import { View, StyleSheet, ScrollView } from 'react-native';
import PopularCard from '../../components/cards/PopularCard';
import Quizzes from '../../../data/Quizzes.json';
import Header from './components/Header';
import BriefQuiz from './components/BriefQuiz';
import TextInfor from './components/TextInfor';

type DetailsScreenProps = {
  quizId: number;
  route: any
}

const Details: React.FC<DetailsScreenProps> = ({ route }) => {
  const { cardId } = route.params;
  const selectedCard = Quizzes.find((card) => card.id === cardId);
  if (!selectedCard) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PopularCard
          title={selectedCard.title}
          icon={selectedCard.icon}
          color={selectedCard.color}
          rate={selectedCard.rate}
          onPress={() => { }}
        />
        <BriefQuiz pointsPerQuestion={selectedCard.pointsPerQuestion} durationInMinutes={selectedCard.durationInMinutes} countQuestions={selectedCard.questions.length} />
        <TextInfor pointsPerQuestion={selectedCard.pointsPerQuestion} quizId={selectedCard.id} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: '10%',
    backgroundColor: '#FFFFFF',
  }
});

export default Details;
