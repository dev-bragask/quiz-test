import { View, Text, StyleSheet } from 'react-native';
import Sheet from '../../../assets/icons/Sheet';
import Clock from '../../../assets/icons/Clock';

interface BriefQuizProps {
  pointsPerQuestion: number;
  durationInMinutes: number;
  countQuestions: number;
}

const BriefQuiz: React.FC<BriefQuizProps> = ({ pointsPerQuestion, durationInMinutes, countQuestions }) => {

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `${remainingMinutes} min`;
    } else if (remainingMinutes === 0) {
      return `${hours} hour${hours > 1 ? 's' : ''}`;
    } else {
      return `${hours} hour${hours > 1 ? 's' : ''} ${remainingMinutes} min`;
    }
  };

  return (
    <View style={styles.briefQuiz}>
      <Text style={styles.titleBriefQuiz}>Brief explanation about this quiz</Text>
      <View style={styles.briefCard}>
        <View style={styles.iconBrief}>
          <Sheet />
        </View>

        <View style={styles.text}>
          <Text style={styles.titleBrief}>{countQuestions} Question</Text>
          <Text style={styles.subTitleBrief}>{pointsPerQuestion} point for a correct answer</Text>
        </View>
      </View>

      <View style={styles.briefCard}>
        <View style={styles.iconBrief}>
          <Clock />
        </View>

        <View style={styles.text}>
          <Text style={styles.titleBrief}>{formatDuration(durationInMinutes)}</Text>
          <Text style={styles.subTitleBrief}>Total duration of the quiz</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  briefQuiz: {
    marginTop: '8%',
  },
  titleBriefQuiz: {
    color: '#333333',
    fontSize: 16,
    lineHeight: 17.07,
    fontFamily: 'Montserrat_600SemiBold',
  },
  briefCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: '4%',
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
  iconBrief: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#fff6ea',
  },
  text: {
    flex: 1,
    marginLeft: 16,
  },
  titleBrief: {
    marginBottom: 8,
    color: '#333333',
    fontSize: 14,
    lineHeight: 17.07,
    fontFamily: 'Montserrat_600SemiBold',
  },
  subTitleBrief: {
    color: '#999999',
    lineHeight: 16.37,
    fontSize: 12,
    fontFamily: 'Nunito_400Regular',
  }
});

export default BriefQuiz;
