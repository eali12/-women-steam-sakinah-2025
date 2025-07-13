// CharacterSelect.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CharacterScreen({ setStep }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Character</Text>
      <View style={styles.options}>
        <TouchableOpacity style={styles.button} onPress={() => setStep("game")}>
          <Text style={styles.buttonText}>👦 Boy A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setStep("game")}>
          <Text style={styles.buttonText}>🧑‍🦱 Boy B</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setStep("game")}>
          <Text style={styles.buttonText}>👧 Girl A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setStep("game")}>
          <Text style={styles.buttonText}>👩 Girl B</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    width: "90%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#b75d69",
  },
  options: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    backgroundColor: "#b75d69",
    padding: 12,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});