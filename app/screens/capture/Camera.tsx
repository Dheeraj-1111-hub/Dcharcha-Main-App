import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [zoom, setZoom] = useState(0);
  const cameraRef = useRef<Camera>(null);
  const router = useRouter();

  const zoomLevels = [
    { label: "0.5", value: 0.0 },
    { label: "1", value: 0.2 },
    { label: "2", value: 0.5 },
    { label: "3", value: 1.0 },
  ];

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log("Photo captured:", photo);
    }
  };

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No camera permission</Text>;

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        type={CameraType.back}
        zoom={zoom}
        ref={cameraRef}
      />

      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.replace("/screens/add")}>
          <Ionicons name="close-circle" size={32} color="#00E0B8" />
        </TouchableOpacity>

        <Text style={styles.title}>EXPRESS</Text>
        <View style={{ width: 32 }} />
      </View>

      {/* Zoom Controls */}
      <View style={styles.zoomContainer}>
        {zoomLevels.map((z) => (
          <TouchableOpacity
            key={z.label}
            style={[
              styles.zoomButton,
              zoom === z.value && { backgroundColor: "black" },
            ]}
            onPress={() => setZoom(z.value)}
          >
            <Text
              style={[styles.zoomText, zoom === z.value && { color: "white" }]}
            >
              {z.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Capture Button */}
      <View style={styles.captureContainer}>
        <Text style={styles.photoLabel}>PHOTO</Text>
        <TouchableOpacity style={styles.captureButton} onPress={takePhoto} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  topBar: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { color: "white", fontSize: 16, fontWeight: "bold" },
  zoomContainer: {
    position: "absolute",
    bottom: 160,
    flexDirection: "row",
    alignSelf: "center",
  },
  zoomButton: {
    marginHorizontal: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "white",
  },
  zoomText: { fontSize: 14, fontWeight: "bold", color: "black" },
  captureContainer: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    alignItems: "center",
  },
  photoLabel: {
    color: "yellow",
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "600",
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: "white",
    backgroundColor: "black",
  },
});
