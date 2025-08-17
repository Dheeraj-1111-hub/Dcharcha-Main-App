import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [zoom, setZoom] = useState(0);
  const cameraRef = useRef<CameraView>(null);
  const router = useRouter();
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);

  const zoomLevels = [
    { label: "0.5", value: 0.0 },
    { label: "1x", value: 0.2 },
    { label: "2x", value: 0.5 },
    { label: "3x", value: 1.0 },
  ];

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={styles.permissionText}>Camera access needed</Text>
        <TouchableOpacity style={styles.permissionBtn} onPress={requestPermission}>
          <Text style={styles.permissionBtnText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setCapturedPhoto(photo.uri);
      } catch (error) {
        console.error("Error taking photo:", error);
      }
    }
  };

  const confirmPhoto = () => {
    console.log("✅ Using photo:", capturedPhoto);
    setCapturedPhoto(null);
  };

  const retakePhoto = () => {
    setCapturedPhoto(null);
  };

  // --- If photo captured, show preview instead of camera ---
  if (capturedPhoto) {
    return (
      <View style={styles.previewContainer}>
        <Image source={{ uri: capturedPhoto }} style={styles.previewImage} />

        <View style={styles.previewActions}>
          <TouchableOpacity style={styles.retakeButton} onPress={retakePhoto}>
            <Ionicons name="refresh" size={22} color="white" />
            <Text style={styles.actionText}>Retake</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.useButton} onPress={confirmPhoto}>
            <Ionicons name="checkmark" size={22} color="white" />
            <Text style={styles.actionText}>Use Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Camera Preview */}
      <CameraView
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        facing="back"
        zoom={zoom}
      />

      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back-circle" size={40} color="#00E0B8" />
        </TouchableOpacity>
        <Text style={styles.title}>EXPRESS</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Zoom Controls */}
      <View style={styles.zoomContainer}>
        {zoomLevels.map((z) => (
          <TouchableOpacity
            key={z.label}
            style={[styles.zoomButton, zoom === z.value && styles.zoomActive]}
            onPress={() => setZoom(z.value)}
          >
            <Text
              style={[
                styles.zoomText,
                zoom === z.value && styles.zoomActiveText,
              ]}
            >
              {z.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Capture Section */}
      <View style={styles.captureContainer}>
        <Text style={styles.photoLabel}>PHOTO</Text>
        <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
          <View style={styles.innerCaptureButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },

  permissionText: { color: "white", fontSize: 16, marginBottom: 15 },
  permissionBtn: {
    backgroundColor: "#00E0B8",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  permissionBtnText: { color: "black", fontWeight: "bold", fontSize: 16 },

  topBar: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { color: "white", fontSize: 20, fontWeight: "bold", letterSpacing: 2 },

  zoomContainer: {
    position: "absolute",
    bottom: 160,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 6,
    backdropFilter: "blur(8px)",
  },
  zoomButton: {
    marginHorizontal: 6,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  zoomText: { fontSize: 14, fontWeight: "600", color: "white" },
  zoomActive: { backgroundColor: "#00E0B8" },
  zoomActiveText: { color: "black" },

  captureContainer: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    alignItems: "center",
  },
  photoLabel: {
    color: "#FFD700",
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "700",
    letterSpacing: 1,
  },
  captureButton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 6,
    borderColor: "white",
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCaptureButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#00E0B8",
  },

  // --- Preview Styles ---
  // --- Preview Styles ---
previewContainer: {
  flex: 1,
  backgroundColor: "black",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 10,
},

previewImage: {
  width: width - 30,
  height: "75%",
  resizeMode: "cover",
  borderRadius: 25,
  marginBottom: 25,
  shadowColor: "#00E0B8",
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.6,
  shadowRadius: 12,
  elevation: 12,
},

previewActions: {
  position: "absolute",
  bottom: 40,
  flexDirection: "row",
  justifyContent: "space-between",
  width: "85%",
  backgroundColor: "rgba(0,0,0,0.35)",
  padding: 14,
  borderRadius: 20,
  backdropFilter: "blur(10px)", // for web only
},

retakeButton: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "rgba(255,0,0,0.85)",
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 12,
},
useButton: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "rgba(0,200,100,0.9)",
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 12,
},
});