import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

type QuizQuestionProps = {
  question: string;
  imageUrl: string;
  options: { id: number; option: string; isCorrect: boolean }[];
  selectedOption: number | null;
  activeQuestionResult: boolean | null;
  handleOptionPress: (optionId: number) => void;
};

const QuizQuestion = ({ question, imageUrl, options, selectedOption, activeQuestionResult, handleOptionPress }: QuizQuestionProps) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.title}>{question}</Text>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.questionItems}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionButton,
              selectedOption === option.id ? styles.selectedOption : null,
              activeQuestionResult !== null
                ? option.isCorrect
                  ? styles.correctOption
                  : selectedOption === option.id
                    ? styles.incorrectOption
                    : null
                : null,
            ]}
            onPress={() => handleOptionPress(option.id)}
            disabled={activeQuestionResult !== null}
          >
            <View
              style={[
                styles.optionIndicator,
                selectedOption === option.id ? styles.selectedOptionIndicator : null,
                activeQuestionResult !== null
                  ? option.isCorrect
                    ? styles.selectedOptionCorrect
                    : selectedOption === option.id
                      ? styles.selectedOptionIncorrect
                      : null
                  : null,
              ]}
            />
            <Text style={styles.optionText}>{option.option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    marginTop: 24,
  },
  title: {
    color: '#333333',
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  containerImage: {
    marginTop: 24,
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  questionItems: {
    marginTop: 24,
    gap: 16,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    paddingHorizontal: 16,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: '#FFFFFF',
  },
  optionIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#b8b8b8',
  },
  selectedOption: {
    borderColor: '#b8b8b8',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  selectedOptionIndicator: {
    borderColor: '#b8b8b8',
    borderWidth: 1,
    backgroundColor: '#b8b8b8',
  },
  optionText: {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
  },
  correctOption: {
    borderColor: '#b7f3d2',
    borderWidth: 1,
    backgroundColor: '#b7f3d2',
  },
  selectedOptionCorrect: {
    borderColor: '#219653',
    borderWidth: 1,
    backgroundColor: '#219653',
  },
  incorrectOption: {
    borderColor: '#F6E5E5',
    borderWidth: 1,
    backgroundColor: '#F6E5E5',
  },
  selectedOptionIncorrect: {
    borderColor: '#FF6967',
    borderWidth: 1,
    backgroundColor: '#FF6967',
  }
});

export default QuizQuestion;
