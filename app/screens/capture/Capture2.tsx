import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function ReimagineScreen() {
  const [eraseText, setEraseText] = useState("");
  const [addText, setAddText] = useState("");
  const { photoUri } = useLocalSearchParams<{ photoUri?: string }>();
  const router = useRouter();

  // decode URI if it’s encoded
  const decodedUri = photoUri ? decodeURIComponent(photoUri) : null;

  const handleReimagine = () => {
    // Navigate to Tomorrow.tsx
    router.push({
      pathname: "/screens/capture/Tomorrow",   // make sure Tomorrow.tsx is inside app/ directory
      params: {
        photoUri: decodedUri,
        title: "Underbridge Rail Crossing",
        description: "🚦 Saves 30 minutes. Impacts 10K homes. Transforms daily commute.",
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Today</Text>

      {/* Image */}
      {decodedUri ? (
        <Image source={{ uri: decodedUri }} style={styles.image} />
      ) : (
        <Image
          source={{ uri: "https://i.imgur.com/UwzK7tP.png" }}
          style={styles.image}
        />
      )}

      {/* Erase Input */}
      <Text style={styles.label}>Erase</Text>
      <TextInput
        style={styles.input}
        placeholder="Garbage, clutter, ...etc"
        placeholderTextColor="#555"
        value={eraseText}
        onChangeText={setEraseText}
      />

      {/* Add Input */}
      <Text style={styles.label}>Add</Text>
      <TextInput
        style={styles.input}
        placeholder="Underbridge Rail Crossing, Road Markings, Road Fencing etc.."
        placeholderTextColor="#555"
        value={addText}
        onChangeText={setAddText}
      />

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleReimagine}>
        <Text style={styles.buttonText}>REIMAGINE THIS SPACE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#00695C",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: "cover",
    marginVertical: 20,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "500",
    color: "#00695C",
    marginBottom: 8,
    marginTop: 8,
  },
  input: {
    width: "100%",
    minHeight: 60,
    borderWidth: 1,
    borderColor: "#00695C",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#00695C",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: "center",
    width: "100%",
    marginTop: 100,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});
