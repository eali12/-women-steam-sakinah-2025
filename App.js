import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

import LoginScreen from "./LoginScreen";
import QuizScreen from "./QuizScreen";
import CharacterScreen from "./CharacterScreen";
import GameScreen from "./GameScreen";
import QuranReminders from "./QuranReminders";
import { Myscenarios } from "./Myscenarios"; // ✅ Import as named

export default function App() {
  const [step, setStep] = useState("login");
  const [username, setUsername] = useState("");
  const [points, setPoints] = useState(0);
  const [currentScenario, setCurrentScenario] = useState(0);

  // ✅ Handle login or signup
  const handleLogin = () => {
    if (username.trim()) setStep("quiz");
  };

  const handleSignup = () => {
    if (username.trim()) setStep("quiz");
  };

  // ✅ Move to character selection after quiz
  const handleQuizSubmit = () => {
    setStep("character");
  };

  // ✅ Track choices and move to next scenario
  const handleChoice = (correct) => {
    if (correct) setPoints(points + 10);
    const next = currentScenario + 1;

    if (next < Myscenarios.length) {
      setCurrentScenario(next);
    } else {
      setStep("reminder");
    }
  };

  // ✅ Reset the game from QuranReminders
  const resetGame = () => {
    setPoints(0);
    setCurrentScenario(0);
    setStep("game");
  };

  return (
    <View style={styles.container}>
      {step === "login" && (
        <View style={styles.loginBox}>
          <Text style={styles.heart}>💗</Text>
          <Text style={styles.title}>SAKINAH</Text>

          <TextInput
            placeholder="Enter your name"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === "quiz" && (
        <QuizScreen handleQuizSubmit={handleQuizSubmit} />
      )}

      {step === "character" && (
        <CharacterScreen setStep={setStep} />
      )}

      {step === "game" && (
        <GameScreen
          currentScenario={currentScenario}
          handleChoice={handleChoice}
          points={points}
        />
      )}

      {step === "reminder" && (
        <QuranReminders points={points} resetGame={resetGame} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe5ee",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  loginBox: {
    alignItems: "center",
    gap: 20,
  },
  heart: {
    fontSize: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#b75d69",
    letterSpacing: 4,
    marginBottom: 20,
  },
  input: {
    width: 200,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
