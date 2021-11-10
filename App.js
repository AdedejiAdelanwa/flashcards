import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./navigation/StackNavigator";
import { decks } from "./Data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const saveDecksAsync = async () => {
    try {
      const jsonDecks = JSON.stringify(decks);
      await AsyncStorage.setItem("decksObj", jsonDecks);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    saveDecksAsync();
  });
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
