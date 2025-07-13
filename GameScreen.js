import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import { Myscenarios } from "./Myscenarios";

export default function GameScreen({ currentScenario, handleChoice, points }) {
  const scene = Myscenarios && Myscenarios[currentScenario];
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    setShowVideo(true);
  }, [currentScenario]);

  if (!scene) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading scenario...</Text>
      </View>
    );
  }

  const videoHeight = 220;
  const videoWidth = Dimensions.get("window").width * 0.7;

  return (
    <View style={styles.container}>
      <Text style={styles.points}>Points: {points}</Text>

      {showVideo && scene.videoUrl ? (
        <View
          style={{
            width: videoWidth,
            height: videoHeight,
            marginBottom: 15,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <WebView
            source={{ uri: scene.videoUrl }}
            style={{ flex: 1 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onLoadEnd={() => {
              // Hide video after 10 seconds
              const timer = setTimeout(() => setShowVideo(false), 45000); // ⏱ 40 seconds

            
            }}
          />
        </View>
      ) : (
        <>
          <View style={styles.dialogueBox}>
            {scene.dialogue.map((line, index) => (
              <Text key={index} style={styles.dialogue}>
                <Text style={styles.bold}>{line.speaker}:</Text> {line.text}
              </Text>
            ))}
          </View>

          <Text style={styles.question}>{scene.question}</Text>

          {scene.options.map((opt, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => handleChoice(opt.correct)}
            >
              <Text style={styles.buttonText}>{opt.text}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
  },
  points: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "600",
    textAlign: "center",
    color: "#b75d69",
  },
  dialogueBox: {
    marginBottom: 15,
  },
  dialogue: {
    marginVertical: 4,
    fontSize: 16,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    color: "#b75d69",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#b75d69",
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    color: "#b75d69",
  },
});

