import { StyleSheet, View } from 'react-native';
import Título from './Título';
export default function App() {
  return (
    <View style={styles.container}>
    <Título></Título>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

