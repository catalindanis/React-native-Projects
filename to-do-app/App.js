
import {StatusBar} from 'react-native';
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks list</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  title: {
    marginTop: StatusBar.currentHeight,
    color: "white",
    fontSize: 20,
  },
});
