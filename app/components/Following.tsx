import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

type FollowingItem = {
  name: string;
  location: string;
};

type FollowingListProps = {
  data: FollowingItem[];
};

const FollowingList: React.FC<FollowingListProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FollowingList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#004D40",
  },
  location: {
    fontSize: 13,
    color: "#777",
  },
});
