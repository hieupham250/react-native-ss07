import React, { createContext, ReactNode, useContext, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedBox({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    box: {
      padding: 20,
      margin: 10,
      borderRadius: 10,
      backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    },
    text: {
      color: theme === "light" ? "#000" : "#fff",
      fontSize: 18,
    },
  });

  return (
    <View style={styles.box}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

function NestedComponent() {
  return <ThemedBox>Đây là component con nhận theme từ context</ThemedBox>;
}

function MainScreen() {
  const { theme, toggleTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "light" ? "#fff" : "#000",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 22,
      color: theme === "light" ? "#000" : "#fff",
      marginBottom: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chế độ hiện tại: {theme}</Text>
      <Button
        title="Chuyển đổi Light/Dark"
        onPress={toggleTheme}
        color={theme === "light" ? "#333" : "#bbb"}
      />
      <NestedComponent />
    </View>
  );
}

export default function Bai6() {
  return (
    <ThemeProvider>
      <MainScreen />
    </ThemeProvider>
  );
}
