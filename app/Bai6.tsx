import React, { useState } from "react";
import { SectionList, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Bai6() {
  const sections = [
    {
      title: "Điện thoại",
      data: ["iPhone 15", "Samsung Galaxy S24", "Xiaomi Redmi Note 13"],
    },
    {
      title: "Laptop",
      data: ["MacBook Pro", "Dell XPS 15", "Asus ROG"],
    },
    {
      title: "Máy tính bảng",
      data: ["iPad Pro", "Samsung Tab S9", "Xiaomi Pad 6"],
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const filteredSections = sections
    .map((section) => ({
      title: section.title,
      data: section.data.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.data.length > 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm sản phẩm..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <SectionList
        sections={filteredSections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text>Không tìm thấy kết quả</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  searchContainer: {
    padding: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
  },
  searchInput: {
    backgroundColor: "#f3f4f6",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  header: {
    backgroundColor: "#e5e7eb",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
  },
  empty: {
    padding: 20,
    alignItems: "center",
  },
});
