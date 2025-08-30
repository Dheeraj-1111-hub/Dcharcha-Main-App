// components/PostCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
const PostCard = ({ likes, dislikes, comments, time }) => {
  return (
    <View style={styles.postCard}>
      {/* Post Content Area (big light-blue box like screenshot) */}
      <View style={styles.postContent} />

      {/* Reactions Row */}
      <View style={styles.reactionsRow}>
        <View style={styles.reactionsLeft}>
          <View style={styles.reactionItem}>
            <Ionicons name="thumbs-up-outline" size={16} color="#134E4A" />
            <Text style={styles.reactionText}>{likes}</Text>
          </View>
          <View style={styles.reactionItem}>
            <Ionicons name="thumbs-down-outline" size={16} color="#134E4A" />
            <Text style={styles.reactionText}>{dislikes}</Text>
          </View>
          <View style={styles.reactionItem}>
            <Ionicons name="chatbubble-outline" size={16} color="#134E4A" />
            <Text style={styles.reactionText}>{comments}</Text>
          </View>
        </View>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  postCard: {
    backgroundColor: "#F0F8FF", // light blue
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  postContent: {
    height: 150, // 👈 large blank area like screenshot
    backgroundColor: "#F0F8FF", 
    borderRadius: 6,
    marginBottom: 12,
  },
  reactionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  reactionsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  reactionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  reactionText: {
    marginLeft: 5,
    color: "#134E4A", // dark teal
    fontSize: 13,
    fontWeight: "700", // bold numbers
  },
  timeText: {
    color: "#4B5563", // gray
    fontSize: 12,
  },
});
