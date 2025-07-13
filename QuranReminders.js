// ReminderScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function QuranReminders({ points, resetGame }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Well done!</Text>
      <Text style={styles.points}>You earned {points} points</Text>
      <Text style={styles.message}>Remember to keep your intentions pure and keep learning about Islam 🌙</Text>

      <TouchableOpacity style={styles.button} onPress={resetGame}>
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    width: "90%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#b75d69",
  },
  points: {
    fontSize: 18,
    marginBottom: 10,
    color: "#444",
  },
  message: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#b75d69",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
