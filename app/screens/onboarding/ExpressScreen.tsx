import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ExpressScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Row: Language + Skip */}
      <View style={styles.topRow}>
        <View style={{ width: 24 }} /> 
        <View style={styles.languageSkip}>
          <Ionicons name="language-outline" size={18} color="white" />
          <Text style={styles.language}>हिंदी</Text>
          <Text style={styles.skip}>Skip</Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar} />
        <View style={[styles.progressBar, { opacity: 1 }]} />
        <View style={styles.progressBar} />
        <View style={styles.progressBar} />
        <View style={styles.progressBar} />
      </View>

      {/* Title */}
      <Text style={styles.title}>EXPRESS</Text>

      {/* Card Row */}
      <View style={styles.cardsRow}>
        {/* Left Card */}
        <View style={styles.card}>
          <View style={styles.cardCircle}>
            <Ionicons name="camera-outline" size={40} color="white" />
          </View>
        </View>

        {/* Center Loader */}
        <Ionicons
          name="ellipse-outline"
          size={26}
          color="white"
          style={{ opacity: 0.6, marginHorizontal: 25 }}
        />

        {/* Right Card */}
        <View style={styles.card}>
          <View style={styles.cardCircle}>
            <Ionicons name="color-palette-outline" size={40} color="white" />
          </View>
        </View>
      </View>

      {/* Decorative Icons */}
      <Ionicons
        name="star-outline"
        size={14}
        color="white"
        style={[styles.bgIcon, { top: "28%", left: "22%" }]}
      />
      <Ionicons
        name="star-outline"
        size={10}
        color="white"
        style={[styles.bgIcon, { top: "35%", left: "15%" }]}
      />
      <Ionicons
        name="sparkles-outline"
        size={16}
        color="white"
        style={[styles.bgIcon, { top: "28%", right: "20%" }]}
      />
      <Ionicons
        name="happy-outline"
        size={16}
        color="white"
        style={[styles.bgIcon, { top: "38%", right: "22%" }]}
      />

      {/* Description */}
      <Text style={styles.heading}>See It. Snap It. Reimagine It.</Text>
      <Text style={styles.subtext}>
        Upload photos of your surroundings and visualize how you want them to
        look — clean, green, and people-friendly.
      </Text>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/onboarding/EngageScreen")}
      >
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
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
  cardsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
  },
  card: {
    width: 120,
    height: 150,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  cardCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
  bgIcon: {
    position: "absolute",
    opacity: 0.4,
  },
  heading: {
    color: "white",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  subtext: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    marginBottom: 30,
    opacity: 0.9,
  },
  button: {
    marginTop: 110,
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#145b5b",
    fontWeight: "bold",
    fontSize: 16,
  },
});
