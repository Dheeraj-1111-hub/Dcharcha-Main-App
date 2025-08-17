import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; // ⬅️ use Expo Router's navigation

export default function SignUpScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const handleNext = () => {
    if (phoneNumber.length === 10) {
      router.push({
        pathname: "/screens/signup/OTPverification",
        params: { phoneNumber },
      });
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.headerText}>SIGN UP</Text>
      </View>

      {/* Main content */}
      <View style={styles.mainContent}>
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.inputContainer}>
          <Image
            source={{
              uri: "https://flagcdn.com/w20/in.png",
            }}
            style={styles.flag}
          />
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            style={styles.input}
            placeholder="9876543210"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={10}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom section */}
      <View style={styles.bottomSection}>
        <Text style={styles.infoText}>
          Voice will send an <Text style={{ fontWeight: "bold" }}>SMS</Text>{" "}
          message {"\n"}(carrier charges may apply) to verify your phone number.
        </Text>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#075E54",
    height: 50,
    paddingHorizontal: 15,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  mainContent: {
    flex: 2,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  label: { fontSize: 14, color: "#777", marginBottom: 2 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginTop: 8,
    paddingHorizontal: 12,
    height: 50,
  },
  flag: { width: 25, height: 18, marginRight: 8 },
  countryCode: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
    paddingLeft: 5,
  },
  input: { flex: 1, fontSize: 20, fontWeight: "bold" },
  loginLink: {
    color: "#075E54",
    fontSize: 16,
    marginTop: 10,
    textAlign: "right",
  },
  bottomSection: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 18,
  },
  nextButton: {
    backgroundColor: "#075E54",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 3,
    width: "100%",
  },
  nextButtonText: { color: "white", fontWeight: "bold", fontSize: 16 },
});
