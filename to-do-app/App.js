import { FlatList, Pressable, StatusBar, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native";
import { Dimensions } from "react-native";
import { useState } from 'react'

export default function App() {

  const [tasks, setTasks] = useState(["task1", "task2", "task3"]);

  return (
    <View style={styles.background}>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>Tasks list</Text>
      </View>
      <View style={styles.addBar}>
        <TextInput
          style={styles.input}
          placeholder="Enter your task here"
          placeholderTextColor="#ffffff"
        ></TextInput>
        <TouchableOpacity style={styles.addButton}
        onPress={() => {return <Text style={styles.test}>test</Text>}}>
          <Text style={styles.addSymbol}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerList}>
        <FlatList data={tasks} renderItem={(item) => {
          return <View style={styles.task}>

          </View>
        }}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#000000",
  },
  centerContainer: {
    alignItems: "center",
  },
  title: {
    marginTop: StatusBar.currentHeight,
    color: "white",
    fontSize: 20,
  },
  input: {
    width: Dimensions.get("window").width - 50,
    
    color: "white",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    padding: 5,
  },
  addBar: {
    flexDirection: "row",
    marginTop: 20,
  },
  addButton: {
    backgroundColor: "gray",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 35,
    borderRadius: 10,
    marginLeft: 5,
  },
  addSymbol: {
    textAlign: "center",
    fontSize: 30,
  },
  containerList: {
    marginTop: 15,
    alignItems: "center",
  },
  task: {
    backgroundColor: '#1a1a1a',
    width: Dimensions.get("window").width - 20,
    height: 60,
    borderRadius: 15,
    marginBottom: 10,
  },
});
