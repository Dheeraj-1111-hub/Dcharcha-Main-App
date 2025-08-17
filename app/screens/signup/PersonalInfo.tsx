// app/personal-information.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function PersonalInformationScreen() {
  const [pincode, setPincode] = useState("");
  const [focusedField, setFocusedField] = useState(null); // track which input is focused
  const router = useRouter();

  const getInputStyle = (fieldName) => [
    styles.input,
    focusedField === fieldName && { borderColor: "#075E54" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Personal Information</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={getInputStyle("name")}
          placeholder="NAME"
          placeholderTextColor="#888"
          onFocus={() => setFocusedField("name")}
          onBlur={() => setFocusedField(null)}
        />

        {/* Surname */}
        <Text style={styles.label}>Surname</Text>
        <TextInput
          style={getInputStyle("surname")}
          placeholder="SURNAME"
          placeholderTextColor="#888"
          onFocus={() => setFocusedField("surname")}
          onBlur={() => setFocusedField(null)}
        />

        {/* Username */}
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={getInputStyle("username")}
          placeholder="@name.username"
          placeholderTextColor="#888"
          onFocus={() => setFocusedField("username")}
          onBlur={() => setFocusedField(null)}
        />

        {/* Pincode */}
        <Text style={styles.label}>Pincode</Text>
        <TextInput
          style={getInputStyle("pincode")}
          value={pincode}
          onChangeText={setPincode}
          keyboardType="numeric"
          placeholder="600099"
          placeholderTextColor="#888"
          onFocus={() => setFocusedField("pincode")}
          onBlur={() => setFocusedField(null)}
        />

        {/* State */}
        <Text style={styles.label}>State</Text>
        <TextInput
          style={[styles.input, { color: "#888" }]}
          value="RANGA REDDY, TELANGANA"
          editable={false}
        />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/screens/(tabs)/feed1")}
        >
          <Text style={styles.nextButtonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0D5C56",
    height: 50,
    paddingHorizontal: 15,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    marginRight: 24,
  },
  mainContent: {
    flex: 2,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    color: "#333",
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: "#0D5C56",
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 45,
    fontSize: 14,
  },
  bottomSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: "#0D5C56",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 3,
    width: "100%",
  },
  nextButtonText: { color: "white", fontWeight: "bold", fontSize: 16 },
});
