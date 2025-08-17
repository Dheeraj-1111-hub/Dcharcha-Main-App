import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const theme = {
    background: "#FFFFFF",
    border: "#E5E7EB",
    primary: "#0D5C56",
    text: "#374151",
  };

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.border,
          borderTopWidth: 1,
          height: (Platform.OS === "ios" ? 80 : 60) + insets.bottom,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 6,
          paddingTop: 12,
        },
        tabBarLabel: ({ focused }) => (
          <Text
            style={[
              styles.label,
              { color: focused ? theme.primary : theme.text },
            ]}
          >
            {route.name}
          </Text>
        ),
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.text,
      })}
    >
      <Tabs.Screen
        name="feed1"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home"
              size={focused ? 30 : 28}
              color={focused ? theme.primary : theme.text}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          title: "Community",
          tabBarIcon: () => (
            <View style={styles.addButton}>
              <MaterialIcons name="add" size={36} color="white" />
            </View>
          ),
          tabBarLabel: () => null, // hide text
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="person"
              size={focused ? 30 : 28}
              color={focused ? theme.primary : theme.text}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    textAlign: "center",
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "#0D5C56",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
});
