import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TABS = ["My Place", "My District", "My State", "My Nation"];

const posts = [
  {
    id: "1",
    name: "Naga Reddy Majji",
    username: "@nagamajji",
    time: "1d ago",
    title: "Underbridge for Rail crossing",
    description:
      "🚉 Saves 30 minutes. Impacts 10K homes. Transforms daily commute.",
    images: [
      "https://i.imgur.com/5vYf6xk.jpeg",
      "https://i.imgur.com/yPiFzD5.jpeg",
    ],
    likes: 609,
    comments: 326,
    shares: 32,
    location: "530075, India",
    isFollowing: true,
  },
  {
    id: "2",
    name: "Krishna Mouli",
    username: "@krishnamouli",
    time: "2w ago",
    title: "Canal Beautification",
    description:
      "🌊 Dreaming of a Clean & Beautiful Canal in Our Neighborhood! Litter-free, tree-lined paths, safe roads, and a space our community can be proud of. Time to reimagine and reclaim it! 💧🌿",
    images: [
      "https://i.imgur.com/x4d3GR5.jpeg",
      "https://i.imgur.com/6n6RYlM.jpeg",
    ],
    likes: 0,
    comments: 0,
    shares: 0,
    location: "530001, India",
    isFollowing: false,
  },
];

export default function DCharcha() {
  const [activeTab, setActiveTab] = useState("My Place");

  const renderPost = ({ item }) => (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.avatar} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.username}>{item.username}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followText}>
              {item.isFollowing ? "Unfollow" : "Follow"}
            </Text>
          </TouchableOpacity>
          <Ionicons
            name="ellipsis-vertical"
            size={18}
            color="#333"
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>

      {/* Post Content */}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      {/* Images */}
      <View style={styles.imageRow}>
        {item.images.map((img, idx) => (
          <Image key={idx} source={{ uri: img }} style={styles.postImage} />
        ))}
      </View>

      {/* Actions */}
      <View style={styles.actionsRow}>
        <View style={styles.actionItem}>
          <Ionicons name="heart-outline" size={20} color="#333" />
          <Text style={styles.actionText}>{item.likes}</Text>
        </View>
        <View style={styles.actionItem}>
          <Ionicons name="chatbubble-outline" size={20} color="#333" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </View>
        <View style={styles.actionItem}>
          <Ionicons name="repeat-outline" size={20} color="#333" />
          <Text style={styles.actionText}>{item.shares}</Text>
        </View>
      </View>

      {/* Location + Time */}
      <View style={styles.footerRow}>
        <Ionicons name="location-outline" size={16} color="#555" />
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.header}>D CHARCHA</Text>

      {/* Tabs */}
      <View style={styles.tabRow}>
        {TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <TouchableOpacity
              key={tab}
              style={[styles.tabBtn, isActive ? styles.activeTab : styles.inactiveTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[styles.tabText, isActive ? styles.activeTabText : styles.inactiveTabText]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Feed */}
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      {/* Bottom Actions */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
    color: "#0D5C56",
  },
  tabRow: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15,
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  tabBtn: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeTab: {
    backgroundColor: "#0D5C56",
    borderColor: "#0D5C56",
  },
  inactiveTab: {
    backgroundColor: "white",
    borderColor: "#0D5C56",
  },
  tabText: { fontSize: 14, fontWeight: "600" },
  activeTabText: { color: "white" },
  inactiveTabText: { color: "#0D5C56" },

  card: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: "#ccc",
    borderRadius: 20,
  },
  name: { fontWeight: "700", fontSize: 14 },
  username: { color: "#777", fontSize: 12 },
  followBtn: {
    backgroundColor: "#e0f2f1",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  followText: { fontSize: 12, fontWeight: "600", color: "#0D5C56" },

  title: { fontWeight: "700", fontSize: 14, marginTop: 6 },
  description: { color: "#333", marginTop: 2, fontSize: 13 },

  imageRow: { flexDirection: "row", marginTop: 8 },
  postImage: {
    width: "48%",
    height: 120,
    borderRadius: 8,
    marginRight: 6,
  },

  actionsRow: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "flex-start",
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  actionText: { marginLeft: 4, fontSize: 12, color: "#333" },

  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  location: { marginLeft: 4, fontSize: 12, color: "#555" },
  time: { marginLeft: "auto", fontSize: 12, color: "#777" },

  bottomBar: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  addBtn: {
    backgroundColor: "#0D5C56",
    padding: 12,
    borderRadius: 30,
  },
});
