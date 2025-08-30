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
import { useRouter } from "expo-router";  // 👈 import router

export default function TomorrowScreen() {
  const [title, setTitle] = useState("Underbridge Rail Crossing");
  const [description, setDescription] = useState(
    "🚦 Saves 30 minutes. Impacts 10K homes. Transforms daily commute."
  );

  const router = useRouter(); // 👈 create router instance

  const handlePost = () => {
    // Instead of alert, navigate to Feed
    router.push("/screens/(tabs)/feed1");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Tomorrow</Text>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1504457046783-bbad939e9335",
        }}
        style={styles.image}
      />

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handlePost}>
        <Text style={styles.buttonText}>POST</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "600",
    color: "#064e3b",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "500",
    color: "#064e3b",
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#064e3b",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    width: "100%",
    backgroundColor: "#064e3b",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
