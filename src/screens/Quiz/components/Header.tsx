import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowBack from '../../../assets/icons/ArrowBack';
import Clock from '../../../assets/icons/Clock';

interface HeaderProps {
  title: string;
  durationInMinutes: number;
}

const Header: React.FC<HeaderProps> = ({ title, durationInMinutes }) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const initialCountdown = durationInMinutes * 60;
  const [countdown, setCountdown] = useState<number>(initialCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(interval);
          return prevCountdown;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [durationInMinutes]);

  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  return (
    <View style={styles.header}>
      <View style={styles.alignment}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <ArrowBack />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.clock}>
        <Clock color="#21BDCA" />
        <Text style={styles.time}>
          {`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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
  clock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: '#E1F1F2',
  },
  time: {
    color: '#21BDCA',
    fontSize: 12,
    fontFamily: 'Nunito_400Regular',
  },
});

export default Header;
