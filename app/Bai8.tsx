import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Bai8() {
  const initialData = [
    {
      id: "1",
      name: "iPhone 13",
      author: "Nguyễn Văn A",
      date: "2025-09-01",
    },
    {
      id: "2",
      name: "Samsung Galaxy S21",
      author: "Trần Thị B",
      date: "2025-09-02",
    },
    {
      id: "3",
      name: "MacBook Pro",
      author: "Lê Văn C",
      date: "2025-09-03",
    },
    {
      id: "4",
      name: "Dell XPS 13",
      author: "Phạm Thị D",
      date: "2025-09-04",
    },
    {
      id: "5",
      name: "Sony WH-1000XM4",
      author: "Ngô Văn E",
      date: "2025-09-05",
    },
    {
      id: "6",
      name: "Apple Watch Series 7",
      author: "Hoàng Thị F",
      date: "2025-09-06",
    },
    {
      id: "7",
      name: "iPad Pro",
      author: "Đỗ Văn G",
      date: "2025-09-07",
    },
  ];

  const newData = [
    {
      id: "8",
      name: "Google Pixel 6",
      author: "Nguyễn Thị H",
      date: "2025-09-08",
    },
    {
      id: "9",
      name: "OnePlus 9 Pro",
      author: "Trần Văn I",
      date: "2025-09-09",
    },
    {
      id: "10",
      name: "Apple AirPods Pro",
      author: "Lê Thị K",
      date: "2025-09-10",
    },
  ];

  const [data, setData] = useState(initialData);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMore = () => {
    if (loadingMore) return;
    setLoadingMore(true);
    setTimeout(() => {
      setData((prev) => [...prev, ...newData]);
      setLoadingMore(false);
    }, 2000);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardAuthor}>Tác giả: {item.author}</Text>
      <Text style={styles.cardDate}>Ngày đăng: {item.date}</Text>
    </View>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Danh sách bài viết</Text>
            <Text style={styles.headerText}>
              Số lượng bài viết: {data.length}
            </Text>
          </View>
        }
        ListFooterComponent={
          loadingMore ? (
            <View style={styles.footer}>
              <ActivityIndicator size="small" color="#0000ff" />
              <Text style={{ marginLeft: 8 }}>Đang tải thêm...</Text>
            </View>
          ) : null
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: "#4cb04f",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 26,
  },
  headerText: {
    color: "#fff",
    fontSize: 16,
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#a3a3a3",
    elevation: 3,
    borderRadius: 8,
    marginVertical: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  cardAuthor: {
    fontSize: 16,
    color: "#4cb04f",
  },
  cardDate: {
    fontSize: 14,
    color: "#a3a3a3",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
