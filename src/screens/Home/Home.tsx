import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import GoodResult from './components/GoodResult';
import RecentQuiz from './components/RecentQuiz';
import PopularQuiz from './components/PopularQuiz';

type HomeScreenProps = {
}

const Home: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Header />
      <GoodResult />
      <RecentQuiz />
      <PopularQuiz />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: '10%',
    paddingBottom: '8%',
    backgroundColor: '#FFFFFF',
  },
});

export default Home;