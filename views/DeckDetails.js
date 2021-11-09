import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

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
const ButtonWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 250px;

  border: 1px solid purple;
  border-radius: 3px;
`;

const DeckDetails = ({ route, navigation }) => {
  const deck = route.params;
  const numOfCards = deck.questions.length;

  function routeToNewQuestion() {
    navigation.navigate("New Card");
  }
  function routeToQuiz() {
    navigation.navigate("Quiz");
  }

  return (
    <DetailWrapper>
      <DetailCardWrapper>
        <Text style={{ fontSize: 30 }}> {deck.title}</Text>
        <Text style={{ fontSize: 20 }}>Cards : {numOfCards}</Text>
        <TouchableOpacity onPress={routeToQuiz}>
          <ButtonWrapper style={{ backgroundColor: "purple" }}>
            <Text style={{ color: "#fff" }}>Start Quiz</Text>
          </ButtonWrapper>
        </TouchableOpacity>
        <TouchableOpacity onPress={routeToNewQuestion}>
          <ButtonWrapper>
            <Text>Add new question</Text>
          </ButtonWrapper>
        </TouchableOpacity>
      </DetailCardWrapper>
    </DetailWrapper>
  );
};
export default DeckDetails;
