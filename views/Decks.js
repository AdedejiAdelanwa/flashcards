import React from "react";
import { FlatList } from "react-native";

import Deck from "../components/Deck";
import { getDecks } from "../Data";

const Decks = ({ navigation }) => {
  const decks = getDecks();
  function routeToDetails() {
    navigation.navigate("DeckDetails");
  }

  const renderItem = ({ item }) => (
    <Deck
      title={decks[item].title}
      numOfCards={decks[item].questions.length}
      onPress={routeToDetails}
    />
  );
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
