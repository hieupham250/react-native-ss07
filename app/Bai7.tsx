import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Bai7() {
  const initialData = [
    {
      id: "1",
      name: "iPhone 13",
      price: 799,
      description: "Điện thoại thông minh Apple iPhone 13.",
      details: "Màn hình 6.1 inch, camera 12MP, bộ nhớ 128GB.",
    },
    {
      id: "2",
      name: "Samsung Galaxy S21",
      price: 999,
      description: "Điện thoại cao cấp Samsung Galaxy S21.",
      details: "Màn hình 6.2 inch, camera 64MP, bộ nhớ 128GB.",
    },
    {
      id: "3",
      name: "MacBook Pro",
      price: 1299,
      description: "Máy tính xách tay Apple MacBook Pro.",
      details: "Màn hình Retina 13 inch, vi xử lý M1, 256GB SSD.",
    },
    {
      id: "4",
      name: "Dell XPS 13",
      price: 1099,
      description: "Laptop Dell XPS 13 với thiết kế mỏng nhẹ.",
      details: "Màn hình 13 inch, vi xử lý Intel Core i7, 512GB SSD.",
    },
    {
      id: "5",
      name: "Sony WH-1000XM4",
      price: 349,
      description: "Tai nghe Sony WH-1000XM4 chống ồn.",
      details: "Chống ồn chủ động, thời gian sử dụng lên đến 30 giờ.",
    },
    {
      id: "6",
      name: "Apple Watch Series 7",
      price: 399,
      description: "Đồng hồ thông minh Apple Watch Series 7.",
      details: "Màn hình 1.7 inch, GPS, theo dõi sức khoẻ.",
    },
    {
      id: "7",
      name: "iPad Pro",
      price: 799,
      description: "Máy tính bảng Apple iPad Pro.",
      details: "Màn hình 11 inch, chip M1, bộ nhớ 128GB.",
    },
  ];

  // Dữ liệu mới khi sau khi load more
  const newData = [
    {
      id: "8",
      name: "Google Pixel 6",
      price: 599,
      description: "Điện thoại Google Pixel 6.",
      details: "Màn hình 6.4 inch, camera 50MP, bộ nhớ 128GB.",
    },
    {
      id: "9",
      name: "OnePlus 9 Pro",
      price: 1069,
      description: "Điện thoại OnePlus 9 Pro.",
      details: "Màn hình 6.7 inch, camera 48MP, bộ nhớ 256GB.",
    },
    {
      id: "10",
      name: "Apple AirPods Pro",
      price: 249,
      description: "Tai nghe không dây Apple AirPods Pro.",
      details: "Chống ồn chủ động, thời gian sử dụng lên đến 24 giờ.",
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
      <Text style={styles.cardPrice}>$ {item.price}</Text>
      <Text style={styles.cardDec}>{item.description}</Text>
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
            <Text style={styles.headerTitle}>Danh sách sản phẩm</Text>
            <Text style={styles.headerText}>
              Số lượng sản phẩm: {data.length}
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
  cardPrice: {
    fontSize: 16,
    color: "#4cb04f",
  },
  cardDec: {
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
