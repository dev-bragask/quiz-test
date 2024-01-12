import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './components/Header';
import ProgressBar from '../../components/progress/ProgressBar';
import QuizModal from '../../components/QuizModal';
import QuizQuestion from './components/QuizQuestion';
import QuizButtons from './components/QuizButtons';
import Quizzes from '../../../data/Quizzes.json'

const Quiz = ({ route }: { route: any }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const [activeQuestionResult, setActiveQuestionResult] = useState<boolean | null>(null);

  const navigation = useNavigation();
  const { quizId } = route.params;
  const getQuestionsByQuizId = (quizId: number) => {
    return Quizzes.filter(quiz => quiz.id === quizId)[0].questions;
  }

  const questions = getQuestionsByQuizId(quizId);
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    setSelectedOption(null);
  }, [currentQuestion]);

  const handleOptionPress = (optionId: number) => {
    setSelectedOption(optionId);
    const selectedOptionData = currentQuestion.options.find(option => option.id === optionId);

    if (selectedOptionData && selectedOptionData.isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setIsWaiting(true);
      setActiveQuestionResult(true);

      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsWaiting(false);
        setActiveQuestionResult(null);

      }, 2000);

    } else {
      setIsQuizComplete(true);
      setModalVisible(true);
    }
  };

  const handlePreviusButton = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleModalClose = () => {
    setIsQuizComplete(false);
    setCurrentQuestionIndex(0);
    setModalVisible(false);

    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' } as { name: never }],
    });
  };

  return (
    <View style={styles.container}>
      <Header title={Quizzes.find((quiz) => quiz.id === quizId)?.title || ''}
        durationInMinutes={Quizzes.find((quiz) => quiz.id === quizId)?.durationInMinutes || 0} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.progress}>
          <ProgressBar progress={isQuizComplete && isModalVisible ? 100 : (currentQuestionIndex / questions.length) * 100}
            color="#21BDCA" />
          <Text style={styles.textProgress}>
            {`Completed ${Math.round((currentQuestionIndex / questions.length) * 100)}%`}
          </Text>
        </View>

        <QuizQuestion
          question={currentQuestion.question}
          imageUrl={currentQuestion.imageUrl}
          options={currentQuestion.options.map(option => ({ id: option.id, option: option.option, isCorrect: option.isCorrect }))}
          selectedOption={selectedOption}
          activeQuestionResult={activeQuestionResult}
          handleOptionPress={(optionId: number) => handleOptionPress(Number(optionId))}
        />

        <QuizButtons
          handlePreviusButton={handlePreviusButton}
          handleNextQuestion={handleNextQuestion}
          selectedOption={selectedOption}
          isWaiting={isWaiting}
        />
      </ScrollView>

      <QuizModal isVisible={isModalVisible} onClose={handleModalClose} score={score} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: '10%',
    backgroundColor: '#FFFFFF',
  },
  progress: {
    marginTop: '5%',
    gap: 16,
  },
  textProgress: {
    color: '#999999',
    fontSize: 14,
    fontFamily: 'Nunito_400Regular',
  },
});

export default Quiz;
