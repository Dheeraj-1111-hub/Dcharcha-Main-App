// OTPVerificationScreen.js
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function OTPVerificationScreen() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputs = useRef([]);
  const router = useRouter();
  const { phoneNumber } = useLocalSearchParams();

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (text, index) => {
    if (/^\d*$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < otp.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleNext = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      // ✅ Navigate or verify OTP
      router.push("/screens/signup/PersonalInfo"); // change to your next route
    } else {
      alert("Please enter the 6-digit OTP");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>OTP VERIFICATION</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.label}>Enter OTP</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  handleBackspace(digit, index);
                }
              }}
            />
          ))}
        </View>

        {/* Timer & Resend */}
        <View style={styles.timerRow}>
          <View style={styles.timerBox}>
            <Ionicons name="time-outline" size={16} color="#555" />
            <Text style={styles.timerText}>
              {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setTimer(60)}>
            <Text style={styles.resendText}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.infoText}>
          Tap on agree and continue to accept{" "}
          <Text style={{ fontWeight: "bold" }}>VOICE</Text> “terms of services”
          and its “privacy policy”.
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
    marginRight: 24, // keep centered when back icon present
  },
  mainContent: {
    flex: 2,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  label: { fontSize: 14, color: "#777", marginBottom: 12 },
  otpContainer: { flexDirection: "row", justifyContent: "center", marginBottom: 20 },
  otpInput: {
    borderWidth: 1,
    borderColor: "#00A884",
    width: 40,
    height: 50,
    marginHorizontal: 5,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 4,
  },
  timerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
  },
  timerBox: { flexDirection: "row", alignItems: "center" },
  timerText: { marginLeft: 4, color: "#555", fontSize: 14 },
  resendText: { color: "#075E54", fontSize: 14 },
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
