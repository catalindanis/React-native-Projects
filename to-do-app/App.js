import { FlatList, Pressable, StatusBar, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { TextInput } from "react-native";
import { Dimensions } from "react-native";
import { useState } from "react";

const finishIcon = require("./assets/check.png");
const deleteIcon = require("./assets/bin.png");

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <View style={styles.background}>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>Tasks list</Text>
      </View>
      <View style={styles.addBar}>
        <TextInput
          onChangeText={(text) => setNewTask(text)}
          style={styles.input}
          placeholder="Enter your task here"
          placeholderTextColor="#ffffff"
        ></TextInput>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            if (newTask.length > 0) setTasks([...tasks, { title: newTask }]);
          }}
        >
          <Text style={styles.addSymbol}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerList}>
        {tasks.length == 0 ? (
          <Text style={styles.whiteText}>Tasks will appear here</Text>
        ) : (
          <FlatList
            data={tasks}
            renderItem={({ item, index }) => {
              return (
                <View key={index} style={styles.task}>
                  <Text style={styles.taskTitle}>{item.title}</Text>
                  <TouchableOpacity
                    style={styles.taskButton}
                    onPress={() => {
                    }}
                  >
                    <Image style={styles.photo} source={finishIcon}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.taskButton}
                    onPress={() => {
                    }}
                  >
                    <Image style={styles.photo} source={deleteIcon}></Image>
                  </TouchableOpacity>
                </View>
              );
            }}
          ></FlatList>
        )}
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
  whiteText: {
    color: "white",
  },
  task: {
    backgroundColor: "#1a1a1a",
    width: Dimensions.get("window").width - 20,
    height: 60,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  taskTitle: {
    marginLeft: 10,
    color: "white",
    width: Dimensions.get("window").width - 140,
  },
  taskButton: {
    backgroundColor: "#242323",
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
  },
  finishSymbol: {
    fontSize: 20,
  },
  photo: {
    height: 30,
    width: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
