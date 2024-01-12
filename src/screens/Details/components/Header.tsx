import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowBack from '../../../assets/icons/ArrowBack';
import More from '../../../assets/icons/More';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <View style={styles.alignment}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <ArrowBack />
        </TouchableOpacity>
        <Text style={styles.title}>Detail Quiz</Text>
      </View>
      <TouchableOpacity >
        <More />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '10%',
  },
  alignment: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    color: '#333333',
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
});

export default Header;
