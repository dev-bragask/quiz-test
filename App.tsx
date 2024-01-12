import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home/Home';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';
import { Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from './src/screens/Details/Details';
import Quiz from './src/screens/Quiz/Quiz';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Home', headerShown: false }} />
        <Stack.Screen name='Details' component={Details} options={{ title: 'Details', headerShown: false }} />
        <Stack.Screen name='Quiz' component={Quiz} options={{ title: 'Quiz', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}


