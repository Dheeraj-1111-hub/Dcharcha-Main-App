import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function EnvisionScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Row: Back button + Language & Skip */}
      <View style={styles.topRow}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <View style={styles.languageSkip}>
          <Ionicons name="language-outline" size={18} color="white" />
          <Text style={styles.language}>हिंदी</Text>
          <Text style={styles.skip}>Skip</Text>
        </View>
      </View>

      {/* Progress Bar Row */}
      <View style={styles.progressContainer}>
        {/* Step 1 - active */}
        <View style={[styles.progressBar, { opacity: 1 }]} />
        {/* Step 2-5 - inactive */}
        <View style={styles.progressBar} />
        <View style={styles.progressBar} />
        <View style={styles.progressBar} />
        <View style={styles.progressBar} />
      </View>

      {/* Title */}
      <Text style={styles.title}>ENVISION</Text>

      {/* Circle with Icons */}
      <View style={styles.circle}>
        <View style={[styles.iconWrapper, { position: "absolute", top: 25 }]}>
          <Ionicons name="megaphone-outline" size={28} color="white" />
        </View>
        <View
          style={[
            styles.iconWrapper,
            { position: "absolute", bottom: 25, left: 25 },
          ]}
        >
          <Ionicons name="telescope-outline" size={28} color="white" />
        </View>
        <View
          style={[
            styles.iconWrapper,
            { position: "absolute", bottom: 25, right: 25 },
          ]}
        >
          <Ionicons name="people-outline" size={28} color="white" />
        </View>
      </View>

      {/* Description */}
      <Text style={styles.heading}>
        Your Voice. Your Vision. Your Neighbourhood.
      </Text>
      <Text style={styles.subtext}>
        Join a community of doers, dreamers, and changemakers reimagining our
        streets, parks, and public spaces.
      </Text>

      {/* Button */}
      <Pressable
        style={styles.button}
        onPress={() => router.push("/screens/onboarding/ExpressScreen")}
      >
        <Text style={styles.buttonText}>GET STARTED</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#145C5E",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 5,
  },
  languageSkip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  language: {
    color: "white",
    fontSize: 14,
    marginHorizontal: 8,
    marginRight: 12,
  },
  skip: {
    color: "white",
    fontSize: 14,
    marginLeft: 12,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
  },
  progressBar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: "white",
    opacity: 0.4,
    marginHorizontal: 2,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginVertical: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    alignSelf: "center",
  },
  iconWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 50,
    padding: 10,
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  subtext: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    opacity: 0.9,
    marginTop: 10,
  },
  button: {
    marginTop: 70,
    marginBottom: 0, // same as LanguageSelectionScreen
    backgroundColor: "#fff", // same color
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#145b5b", // white text like DONE button
    fontWeight: "bold",
    fontSize: 16,
  },
});
