import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Deck from "../components/Deck";
import { getDecks } from "../Data";

const Decks = ({ navigation }) => {
  const [decks, setDecks] = useState({});

  const renderItem = ({ item }) => (
    <Deck deck={decks[item]} navigation={navigation} />
  );

  async function fetchDecks() {
    const data = await getDecks();
    setDecks(data);
  }

  useEffect(() => {
    fetchDecks();
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
