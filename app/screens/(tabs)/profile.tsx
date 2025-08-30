import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PostCard from "../../components/PostCard";
import FollowingList from "../../components/Following";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState<
    "posts" | "following" | "followers"
  >("posts");

  // Dummy Following + Followers data
  const followingData = [
    { name: "Name Surname", location: "Adilabad, Telangana" },
    { name: "Name Surname", location: "Adilabad, Telangana" },
    { name: "Name Surname", location: "Adilabad, Telangana" },
    { name: "Name Surname", location: "Adilabad, Telangana" },
    { name: "Name Surname", location: "Adilabad, Telangana" },
    { name: "Name Surname", location: "Adilabad, Telangana" },
    { name: "Name Surname", location: "Adilabad, Telangana" },
    { name: "Name Surname", location: "Adilabad, Telangana" },
    { name: "Name Surname", location: "Adilabad, Telangana" },
  ];

  const followersData = [
    { name: "Follower One", location: "Hyderabad, Telangana" },
    { name: "Follower Two", location: "Karimnagar, Telangana" },
    { name: "Follower Three", location: "Warangal, Telangana" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient
        colors={["#004D40", "#00796B"]}
        style={styles.headerGradient}
      >
        <Text style={styles.headerTitle}>PROFILE</Text>
        <Feather name="settings" size={22} color="#fff" />
      </LinearGradient>

      {/* Profile Image */}
      <View style={styles.profileImageWrapper}>
        <Image
          source={{
            uri: "", // Dummy avatar
          }}
          style={styles.profileImage}
        />
      </View>

      {/* Name & Location */}
      <Text style={styles.name}>NAME SURNAME</Text>
      <Text style={styles.location}>530037, RANGA REDDY, TELANGANA</Text>

      {/* Stats Tabs */}
      <View style={styles.statsContainer}>
        <TouchableOpacity
          style={styles.statBox}
          onPress={() => setActiveTab("posts")}
        >
          <Text
            style={activeTab === "posts" ? styles.statValue : styles.statValueGrey}
          >
            140
          </Text>
          <Text
            style={activeTab === "posts" ? styles.statLabel : styles.statLabelGrey}
          >
            POSTS
          </Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.statBox}
          onPress={() => setActiveTab("following")}
        >
          <Text
            style={
              activeTab === "following" ? styles.statValue : styles.statValueGrey
            }
          >
            63
          </Text>
          <Text
            style={
              activeTab === "following" ? styles.statLabel : styles.statLabelGrey
            }
          >
            FOLLOWING
          </Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.statBox}
          onPress={() => setActiveTab("followers")}
        >
          <Text
            style={
              activeTab === "followers" ? styles.statValue : styles.statValueGrey
            }
          >
            24k
          </Text>
          <Text
            style={
              activeTab === "followers" ? styles.statLabel : styles.statLabelGrey
            }
          >
            FOLLOWERS
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <View style={styles.contentWrapper}>
        {activeTab === "following" ? (
          <FollowingList data={followingData} onBack={() => setActiveTab("posts")} />
        ) : activeTab === "followers" ? (
          <FollowingList data={followersData} onBack={() => setActiveTab("posts")} />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
          >
            <PostCard likes={609} dislikes={120} comments={120} time="27 mins" />
            <PostCard likes={350} dislikes={42} comments={87} time="1 hr ago" />
            <PostCard likes={900} dislikes={60} comments={210} time="Yesterday" />
            <PostCard likes={450} dislikes={12} comments={98} time="2 days ago" />
            <PostCard likes={700} dislikes={33} comments={150} time="Last week" />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
       
  },
  headerGradient: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 2,
  },
  profileImageWrapper: {
    marginTop: -40,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    backgroundColor: "#ddd",
    shadowColor: "#004D40",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  name: {
    textAlign: "center",
    marginTop: 12,
    fontWeight: "bold",
    fontSize: 18,
    color: "#004D40",
  },
  location: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
    color: "#00796B",
    marginBottom: 20,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  statBox: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  statValue: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#004D40",
  },
  statValueGrey: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#999",
  },
  statLabel: {
    fontSize: 11,
    color: "#004D40",
    marginTop: 3,
    letterSpacing: 0.5,
  },
  statLabelGrey: {
    fontSize: 11,
    color: "#999",
    marginTop: 3,
    letterSpacing: 0.5,
  },
  divider: {
    width: 1,
    height: 25,
    backgroundColor: "#e0e0e0",
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 15,
    
  },
});
