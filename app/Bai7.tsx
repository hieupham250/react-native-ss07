import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

export default function Bai7() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  const data = [
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
    { id: "4", name: "Item 4" },
    { id: "5", name: "Item 5" },
    { id: "6", name: "Item 6" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isPortrait ? "Chế độ hiển thị: Dọc" : "Chế độ hiển thị: Ngang"}
      </Text>

      <FlatList
        data={data}
        key={isPortrait ? "v" : "h"}
        numColumns={isPortrait ? 1 : 2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    margin: 5,
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  cardText: {
    fontSize: 16,
  },
});
