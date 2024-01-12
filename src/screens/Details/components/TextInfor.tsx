import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface TextInforProps {
  quizId: number;
  pointsPerQuestion: number;
}

const TextInfor: React.FC<TextInforProps> = ({ pointsPerQuestion, quizId }) => {
  const navigation = useNavigation();

  const handleGetStarted = (quizId: number) => {
    navigation.navigate('Quiz', { quizId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInfor}>
        <Text style={styles.titleTextInfor}>
          Please read the text below carefully so you can understand it
        </Text>

        <View style={styles.listItemContainer}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.listItem}>{pointsPerQuestion} point awarded for a correct answer and no marks for a incorrect answer</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.listItem}>Tap on options to select the correct answer</Text>
        </View>
        <View style={styles.listItemContainer}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.listItem}>Click submit if you are sure you want to complete all the quizzes</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGetStarted(quizId)}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  listItemContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: '8%',
    paddingRight: 24,
  },
  bullet: {
    color: 'black',
    fontSize: 30,
  },
  listItem: {
    flexWrap: 'wrap',
    color: '#666666',
    fontSize: 14,
    fontFamily: 'Nunito_400Regular',
  },
  textInfor: {
    marginTop: '4%',
  },
  titleTextInfor: {
    color: '#333333',
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  buttonContainer: {
    marginTop: '15%',
    marginBottom: '10%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    backgroundColor: '#21BDCA',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
  },
});

export default TextInfor;
