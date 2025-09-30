import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Bai3() {
  const content = useRef<TextInput>(null);

  const handleFocus = () => {
    if (content.current) {
      content.current.focus();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Ô nhập liệu:</Text>
        <TextInput
          style={styles.input}
          ref={content}
          placeholder="Nhập dữ liệu"
        />
        <TouchableOpacity style={styles.button} onPress={handleFocus}>
          <Text style={styles.buttonText}>FOCUS VÀO Ô NHẬP LIỆU</Text>
        </TouchableOpacity>
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
  content: {
    width: "80%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
