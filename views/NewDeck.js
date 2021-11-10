import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { saveDeckTitle } from "../Data";
import { ButtonWrapper } from "./DeckDetails";

const AddDeckWrapper = styled.View`
  background-color: #eee;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const AddDeckCard = styled.View`
  height: 60%;
  background-color: #fff;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const TextInputWrapper = styled.TextInput`
  padding: 15px;
  background-color: #eee;
  border-radius: 3px;
  margin: 20px 0;
`;

const NewDeck = ({ navigation }) => {
  const [title, setTitle] = useState("");

  async function handleAddDeck() {
    try {
      await saveDeckTitle(title);
      setTitle("");
      const decksObj = await AsyncStorage.getItem("decksObj");
      const decks = JSON.parse(decksObj);

      navigation.navigate("DeckDetails", decks[title]);
    } catch (error) {
      setTitle("");
      alert(error);
      navigation.navigate("Decks");
    }
  }

  return (
    <AddDeckWrapper>
      <AddDeckCard>
        <Text>Deck Title:</Text>

        <TextInputWrapper
          style={{ width: 250 }}
          value={title}
          placeholder="Type title here"
          onChangeText={(title) => setTitle(title)}
        />

        <TouchableOpacity onPress={handleAddDeck}>
          <ButtonWrapper style={{ backgroundColor: "purple" }}>
            <Text style={{ color: "#fff" }}>Create Deck</Text>
          </ButtonWrapper>
        </TouchableOpacity>
      </AddDeckCard>
    </AddDeckWrapper>
  );
};
export default NewDeck;
