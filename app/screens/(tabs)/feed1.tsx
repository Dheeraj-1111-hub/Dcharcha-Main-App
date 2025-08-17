// app/d-charcha.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DCharchaScreen() {
  const [selected, setSelected] = useState("My Place");

  const buttons = ["My Place", "My District", "My State", "My Nation"];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>D CHARCHA</Text>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        {buttons.map((btn) => {
          const isActive = selected === btn;
          return (
            <TouchableOpacity
              key={btn}
              style={[styles.button, isActive ? styles.activeButton : styles.inactiveButton]}
              onPress={() => setSelected(btn)}
            >
              <Text style={[styles.buttonText, isActive ? styles.activeButtonText : styles.inactiveButtonText]}>
                {btn}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Message */}
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Share your{" "}
          <Text style={{ fontWeight: "bold" }}>“Dream World”</Text> to your
          {"\n"}Community by Clicking{" "}
          <Text style={{ fontWeight: "bold" }}>“+” button</Text>
        </Text>
      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center" },
  headerText: {
    fontSize: 24,
    fontWeight: "900",
    color: "#0D5C56",
    marginTop: 40,
    
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    borderWidth: 1,
    borderRadius: 10, // pill-like shape
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeButton: {
    backgroundColor: "#0D5C56",
    borderColor: "#0D5C56",
  },
  inactiveButton: {
    backgroundColor: "white",
    borderColor: "#0D5C56",
  },
  buttonText: { fontSize: 14, fontWeight: "600" },
  activeButtonText: { color: "white" },
  inactiveButtonText: { color: "#0D5C56" },
  messageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  messageText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    lineHeight: 20,
  },
});
