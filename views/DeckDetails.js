import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

import { getDeck } from "../Data";

const DetailWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

const DetailCardWrapper = styled.View`
  height: 60%;
  width: 90%;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 2px;
`;
export const ButtonWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  border: 1px solid purple;
  border-radius: 3px;
`;

const DeckDetails = ({ route, navigation }) => {
  const deck = route.params;
  const [deckie, setDeckie] = useState({});
  const numOfCards = deck.questions.length;

  async function fetchDeck() {
    const data = await getDeck(deck.title);
    setDeckie(data);
  }

  function routeToNewQuestion() {
    navigation.navigate("NewCard", deck);
  }
  function routeToQuiz() {
    navigation.navigate("Quiz", deck);
  }
  useEffect(() => {
    fetchDeck();
  }, []);

  return (
    <DetailWrapper>
      <DetailCardWrapper>
        <Text style={{ fontSize: 30 }}> {deckie.title}</Text>
        <Text style={{ fontSize: 20 }}>
          {" "}
          {numOfCards > 1 ? `${numOfCards} Cards` : `${numOfCards} Card`}
        </Text>
        <TouchableOpacity onPress={routeToQuiz}>
          <ButtonWrapper style={{ backgroundColor: "purple", width: 250 }}>
            <Text style={{ color: "#fff" }}>Start Quiz</Text>
          </ButtonWrapper>
        </TouchableOpacity>
        <TouchableOpacity onPress={routeToNewQuestion}>
          <ButtonWrapper style={{ width: 250 }}>
            <Text>Add new question</Text>
          </ButtonWrapper>
        </TouchableOpacity>
      </DetailCardWrapper>
    </DetailWrapper>
  );
};
export default DeckDetails;
