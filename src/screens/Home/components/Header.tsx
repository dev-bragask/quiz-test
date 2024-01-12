import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Bell from '../../../assets/icons/Bell';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  return (
    <View style={styles.header}>
      <View style={styles.alignment}>
        <TouchableOpacity>
          <View style={styles.avatarIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>
          <Text style={styles.titleVariable}>Hello,</Text> Jessica
        </Text>
      </View>
      <TouchableOpacity>
        <Bell />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '5%',
  },
  alignment: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatarIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C4C4C4',
  },
  title: {
    color: '#333333',
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
  titleVariable: {
    color: '#999999',
    fontFamily: 'Montserrat_500Medium',
  },
});

export default Header;
