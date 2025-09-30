import React, { useReducer, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function todoReducer(state: any[], acction: any) {
  switch (acction.type) {
    case "ADD_TODO":
      if (acction.payload.trim() == "") return state;

      const newTodo = {
        id: Date.now(),
        name: acction.payload,
        completed: false,
      };
      return [...state, newTodo];

    case "TOGGLE_TODO":
      return state.map((todo: any) =>
        todo.id == acction.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "DELETE_TODO":
      return state.filter((todo: any) => todo.id != acction.payload);
    default:
      return state;
  }
}

export default function Bai5() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Thêm công việc mới..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText} onPress={handleAdd}>
            Thêm
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoRow}>
            <TouchableOpacity
              onPress={() =>
                dispatch({ type: "TOGGLE_TODO", payload: item.id })
              }
              style={styles.todoTextContainer}
            >
              <Text
                style={[
                  styles.todoText,
                  item.completed && styles.todoCompleted,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                dispatch({ type: "DELETE_TODO", payload: item.id })
              }
              style={styles.deleteButton}
            >
              <Text style={styles.deleteText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  addButton: {
    marginLeft: 8,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    borderRadius: 8,
  },
  addText: {
    color: "#fff",
    fontWeight: "bold",
    padding: 10,
  },
  todoRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  todoTextContainer: {
    flex: 1,
  },
  todoText: {
    flex: 1,
  },
  todoCompleted: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  deleteButton: {
    marginLeft: 12,
    backgroundColor: "#dc3545",
    padding: 8,
    borderRadius: 6,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
