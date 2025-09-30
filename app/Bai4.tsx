import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Bai4() {
  const netInfo = useNetInfo();
  return (
    <View style={styles.container}>
      {!netInfo.isConnected && (
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Không có kết nối mạng</Text>
          <View
            style={{
              backgroundColor: "#f5f5f5",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingVertical: 12,
              }}
            >
              Trạng thái kết nối mạng
            </Text>
            <Text
              style={{
                fontSize: 16,
                paddingBottom: 12,
              }}
            >
              Có kết nối không?{" "}
              <strong>{!netInfo.isConnected ? "không" : "Có"}</strong>
            </Text>
          </View>
        </View>
      )}

      <View
        style={{
          backgroundColor: "#f5f5f5",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingVertical: 12,
          }}
        >
          Trạng thái kết nối mạng
        </Text>
        <Text
          style={{
            fontSize: 16,
            paddingBottom: 12,
          }}
        >
          Có kết nối không?{" "}
          <strong>{netInfo.isConnected ? "Có" : "Không"}</strong>
        </Text>
        <Text
          style={{
            fontSize: 16,
            paddingBottom: 12,
          }}
        >
          Loại kết nối: <strong>{netInfo.type}</strong>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  banner: {
    padding: 12,
    alignItems: "center",
  },
  bannerText: {
    color: "#fff",
    fontSize: 12,
    backgroundColor: "red",
    width: "100%",
    paddingVertical: 12,
    textAlign: "center",
    fontWeight: "600",
  },
});
