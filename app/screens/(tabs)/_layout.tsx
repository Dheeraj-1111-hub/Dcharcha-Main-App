// app/_layout.tsx
import React from "react";
import { Text, Platform, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Import your screens
import Home from "./feed1";
import Search from "./add";
import Profile from "./profile";
import CameraScreen from "./../capture/Camera";

const Tab = createBottomTabNavigator();

export default function Layout() {
  const insets = useSafeAreaInsets();
  const theme = {
    background: "#FFFFFF",
    border: "#E5E7EB",
    primary: "#0D5C56",
    text: "#374151",
  };

  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home"
              size={focused ? 30 : 28} // Bigger size
              color={focused ? theme.primary : theme.text}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Community"
        component={CameraScreen} // 👈 open camera screen directly
        options={{
          tabBarIcon: () => (
            <View style={styles.addButton}>
              <MaterialIcons name="add" size={36} color="white" />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="person"
              size={focused ? 30 : 28} // Bigger size
              color={focused ? theme.primary : theme.text}
            />
          ),
        }}
      />
    </Tab.Navigator>
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
    elevation: 4, // Android shadow
    marginBottom: 0, // Lift above tab bar
  },
});
