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
  width: 250px;
  padding: 15px;
  background-color: #eee;
  border-radius: 3px;
`;

const NewDeck = () => {
  const [deckTitle, setDeckTitle] = useState("");

  function handleAddDeck() {
    saveDeckTitle(deckTitle);
    setDeckTitle("");
  }
  return (
    <AddDeckWrapper>
      <AddDeckCard>
        <Text>Deck Title:</Text>
        <TextInputWrapper
          value={deckTitle}
          placeholder="Type Deck title here"
          onChangeText={setDeckTitle}
          style={{ marginTop: 20, marginBottom: 20 }}
        />
        <TouchableOpacity onPress={handleAddDeck}>
          <ButtonWrapper style={{ backgroundColor: "purple" }}>
            <Text style={{ color: "#fff" }}>Add</Text>
          </ButtonWrapper>
        </TouchableOpacity>
      </AddDeckCard>
    </AddDeckWrapper>
  );
};
export default NewDeck;
