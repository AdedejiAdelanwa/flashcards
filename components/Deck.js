import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styled from "styled-components";

const DeckWrapper = styled.View`
  width: 350px;
  height: 150px;
  justify-content: center;
  align-items: center;
  background-color: purple;
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  margin-top: 10px;
`;

const Deck = ({ title, numOfCards, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <DeckWrapper>
        <Text style={{ color: "white", fontSize: 30 }}>{title}</Text>
        <Text style={{ color: "white", fontSize: 15 }}>
          {numOfCards > 1 ? `${numOfCards} Cards` : `${numOfCards} Card`}
        </Text>
      </DeckWrapper>
    </TouchableOpacity>
  );
};
export default Deck;
