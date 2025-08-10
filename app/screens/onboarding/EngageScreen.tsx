import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function EngageScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Row: Language & Skip */}
      <View style={styles.topRow}>
        {/* placeholder for alignment */}
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
        <View style={styles.progressBar} />
        <View style={[styles.progressBar, { opacity: 1 }]} />
        <View style={styles.progressBar} />
        <View style={styles.progressBar} />
      </View>

      {/* Title */}
      <Text style={styles.title}>ENGAGE</Text>

      {/* Circle with Icons */}
      <View style={styles.circle}>
        {/* Top */}
        <View style={[styles.iconWrapper, { top: -20 }]}>
          <FontAwesome5 name="user-friends" size={20} color="#fff" />
        </View>

        {/* Right */}
        <View style={[styles.iconWrapper, { right: -20 }]}>
          <MaterialCommunityIcons name="heart-outline" size={22} color="#fff" />
        </View>

        {/* Bottom */}
        <View style={[styles.iconWrapper, { bottom: -20 }]}>
          <MaterialCommunityIcons
            name="account-group-outline"
            size={22}
            color="#fff"
          />
        </View>

        {/* Left */}
        <View style={[styles.iconWrapper, { left: -20 }]}>
          <MaterialCommunityIcons
            name="account-outline"
            size={22}
            color="#fff"
          />
        </View>

        {/* Center */}
        <View style={styles.centerIcon}>
          <MaterialCommunityIcons
            name="message-text-outline"
            size={28}
            color="#fff"
          />
        </View>
      </View>

      {/* Subtitle */}
      <Text style={styles.heading}>Start</Text>
      <Text style={styles.headingBold}>The Charcha</Text>

      {/* Description */}
      <Text style={styles.subtext}>
        Connect with neighbours, leaders, and volunteers to turn ideas into
        action. Every voice matters.
      </Text>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/onboarding/EmpowerScreen")}
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
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginVertical: 40,
    alignSelf: "center",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 50,
    padding: 12,
    margin: 30,
  },
  centerIcon: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 50,
    padding: 18,
  },
  heading: {
    color: "white",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 0,
  },
  headingBold: {
    color: "white",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  subtext: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    marginBottom: 30,
    opacity: 0.9,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 60,
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
