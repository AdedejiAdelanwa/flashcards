import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Deck from "../components/Deck";

const Decks = ({ navigation }) => {
  const [decks, setDecks] = useState({});
  // const [loading, setLoading] = useState(true);

  const renderItem = ({ item }) => (
    <Deck deck={decks[item]} navigation={navigation} />
  );

  async function getDecks() {
    try {
      const response = await AsyncStorage.getItem("decksObj");
      const data = JSON.parse(response);
      setDecks(data);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getDecks();
  });
  return (
    <FlatList
      data={Object.keys(decks)}
      renderItem={renderItem}
      keyExtractor={(item) => decks[item].title}
      contentContainerStyle={{
        alignItems: "center",
      }}
    />
  );
};
export default Decks;
