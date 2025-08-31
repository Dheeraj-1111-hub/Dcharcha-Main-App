import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
  Modal,
  FlatList,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur"; // Glass effect

const SettingsScreen = () => {
  // Editable text fields
  const [me, setMe] = useState("John Doe");
  const [account, setAccount] = useState("john.doe@mail.com");

  // Toggles / Options
  const [compressPhotos, setCompressPhotos] = useState(true);
  const [notifications, setNotifications] = useState("All");
  const [privacy, setPrivacy] = useState("Only me");

  // Modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPicker, setCurrentPicker] = useState<string | null>(null);
  const [tempSelection, setTempSelection] = useState<string | null>(null); // temporary selection
  const [editingField, setEditingField] = useState<string | null>(null);

  // Save handler
  const handleSave = () => {
    setEditingField(null);
    alert("Settings saved!");
  };

  // Editable card
  const renderEditableCard = (
    icon: keyof typeof Ionicons.glyphMap,
    label: string,
    value: string,
    setValue: (v: string) => void,
    type: "default" | "email-address" = "default",
    fieldKey: string
  ) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setEditingField(fieldKey)}
      style={styles.card}
    >
      <Ionicons name={icon} size={22} color="#0b5956" />
      <Text style={styles.cardTextBold}>{label}</Text>

      {editingField === fieldKey ? (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          keyboardType={type}
          autoFocus
          onBlur={() => setEditingField(null)}
          selectionColor="#0b5956"
        />
      ) : (
        <Text style={styles.cardTextRight}>{value}</Text>
      )}
    </TouchableOpacity>
  );

  // Switch card
  const renderSwitchCard = (
    icon: keyof typeof Ionicons.glyphMap,
    label: string,
    value: boolean,
    setValue: (v: boolean) => void
  ) => (
    <View style={styles.card}>
      <Ionicons name={icon} size={22} color="#0b5956" />
      <Text style={styles.cardTextBold}>{label}</Text>
      <Switch
        value={value}
        onValueChange={setValue}
        trackColor={{ false: "#ccc", true: "#0b5956" }}
        thumbColor={value ? "#fff" : "#f4f3f4"}
      />
    </View>
  );

  // Option card
  const renderOptionCard = (
    icon: keyof typeof Ionicons.glyphMap,
    label: string,
    value: string,
    options: string[],
    pickerKey: string
  ) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        setCurrentPicker(pickerKey);
        setTempSelection(value); // preload current selection
        setModalVisible(true);
      }}
    >
      <Ionicons name={icon} size={22} color="#0b5956" />
      <Text style={styles.cardTextBold}>{label}</Text>
      <Text style={styles.cardTextRight}>{value}</Text>
    </TouchableOpacity>
  );

  // Options
  const notificationOptions = ["All", "Important", "None"];
  const privacyOptions = ["Public", "Friends", "Only me"];

  // Confirm selection
  const confirmSelection = () => {
    if (currentPicker === "notifications" && tempSelection) {
      setNotifications(tempSelection);
    } else if (currentPicker === "privacy" && tempSelection) {
      setPrivacy(tempSelection);
    }
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Link href=".." asChild>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#0b5956" />
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>SETTINGS</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {renderEditableCard("create-outline", "Me", me, setMe, "default", "me")}
        {renderOptionCard(
          "notifications-outline",
          "Notifications",
          notifications,
          notificationOptions,
          "notifications"
        )}
        {renderSwitchCard(
          "settings-outline",
          "Compress Photos",
          compressPhotos,
          setCompressPhotos
        )}
        {renderEditableCard(
          "person-outline",
          "Account",
          account,
          setAccount,
          "email-address",
          "account"
        )}
        {renderOptionCard(
          "lock-closed-outline",
          "Privacy",
          privacy,
          privacyOptions,
          "privacy"
        )}
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <Ionicons name="help-circle-outline" size={22} color="#0b5956" />
          <Text style={styles.cardTextBold}>Help</Text>
          <Text style={styles.cardTextRight}>FAQ</Text>
        </TouchableOpacity>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          activeOpacity={0.8}
          onPress={handleSave}
        >
          <Text style={styles.saveText}>SAVE</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <BlurView intensity={80} tint="dark" style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Choose an option</Text>
            <FlatList
              data={
                currentPicker === "notifications"
                  ? notificationOptions
                  : privacyOptions
              }
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.modalOption,
                    tempSelection === item ? styles.modalOptionSelected : null,
                  ]}
                  onPress={() => setTempSelection(item)}
                >
                  <Text
                    style={[
                      styles.modalOptionText,
                      tempSelection === item ? styles.modalOptionTextSelected : null,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />

            {/* Confirm + Cancel Buttons */}
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#f44336" }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#0b5956" }]}
                onPress={confirmSelection}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </Modal>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#fff",
    elevation: 2,
  },
  backButton: { padding: 6 },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0b5956",
    textAlign: "center",
    flex: 1,
    marginRight: 28,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#0b5956",
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 14,
    marginBottom: 14,
    elevation: 2,
  },
  cardTextBold: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#0b5956",
    marginLeft: 12,
    flex: 1,
  },
  cardTextRight: { fontSize: 14, color: "#555" },
  input: {
    fontSize: 15,
    color: "#333",
    paddingVertical: 0,
    minWidth: 120,
    textAlign: "right",
    borderBottomWidth: 1,
    borderBottomColor: "#0b5956",
    paddingHorizontal: 4,
  },
  saveButton: {
    backgroundColor: "#0b5956",
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 40,
    marginBottom: 20,
    alignItems: "center",
    elevation: 3,
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 1,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: "55%",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: { elevation: 10 },
    }),
  },
  modalTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
    color: "#0b5956",
    textAlign: "center",
  },
  modalOption: {
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  modalOptionSelected: {
    backgroundColor: "#e0f2f1",
    borderWidth: 1,
    borderColor: "#0b5956",
  },
  modalOptionText: { fontSize: 16, color: "#333" },
  modalOptionTextSelected: {
    color: "#0b5956",
    fontWeight: "bold",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});
