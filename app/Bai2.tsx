import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Bai2() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  time: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
