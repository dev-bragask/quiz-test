import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface QuizButtonsProps {
  handlePreviusButton: () => void;
  handleNextQuestion: () => void;
  selectedOption: any;
  isWaiting: boolean;
}

const QuizButtons: React.FC<QuizButtonsProps> = ({
  handlePreviusButton,
  handleNextQuestion,
  selectedOption,
  isWaiting,
}) => {
  return (
    <View style={styles.bottomButtons}>
      <TouchableOpacity style={styles.previusButton} onPress={handlePreviusButton}>
        <Text style={[styles.buttonText, { color: '#21BDCA' }]}>Previous</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.nextButton,
          {
            backgroundColor:
              selectedOption === null || isWaiting ? '#CCCCCC' : '#21BDCA',
          },
        ]}
        onPress={handleNextQuestion}
        disabled={selectedOption === null || isWaiting}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '12%',
    marginBottom: '12%',

  },
  nextButton: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 15,
    backgroundColor: '#21BDCA',
  },
  previusButton: {
    flex: 1,
    marginRight: 8,
    borderRadius: 10,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderColor: '#21BDCA',
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'center',
  },
});

export default QuizButtons;
