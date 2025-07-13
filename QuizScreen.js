// QuizScreen.js
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function QuizScreen({ handleQuizSubmit }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personalization Quiz</Text>
      <TextInput style={styles.input} placeholder="How do you usually feel during Salah? " />
      <TextInput style={styles.input} placeholder="What’s your ideal way to connect with Allah (SWT)?" />
      <TouchableOpacity style={styles.button} onPress={handleQuizSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#b75d69",
  },
  input: {
    width: "100%",
    padding: 10,
    backgroundColor: "#ffe5ee",
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#b75d69",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
