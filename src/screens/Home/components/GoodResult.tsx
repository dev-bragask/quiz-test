import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import CircularProgress from '../../../components/progress/CircularProgress';

const image = require('../../../assets/images/goodResult.png');

interface GoodResultProps { }

const GoodResult: React.FC<GoodResultProps> = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.goodResult}>
        <CircularProgress progress={75} />

        <View style={styles.titleGoodResultContainer}>
          <Text style={styles.titleGoodResult}>Good Result!</Text>
          <Text style={styles.subTitleGoodResult}>
            Share your achievement with your friend
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  goodResult: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    padding: 16,
  },
  titleGoodResultContainer: {
    width: '50%',
  },
  titleGoodResult: {
    color: '#4E5C66',
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
  },
  subTitleGoodResult: {
    marginTop: 8,
    color: '#4E5C66',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Nunito_400Regular',
  },
});

export default GoodResult;