import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { addCardToDeck } from "../Data";
import { ButtonWrapper } from "./DeckDetails";
import { TextInputWrapper } from "./NewDeck";

const NewQuestionWrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
`;
const FormBlock = styled.View`
  height: 100px;
  width: 300px;
`;

const NewCard = ({ route, navigation }) => {
  const deck = route.params;
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");

  async function handleAddQuestion() {
    try {
      await addCardToDeck(deck.title, {
        question: questionText,
        answer: answerText,
      });
      setAnswerText("");
      setQuestionText("");
      navigation.navigate("Decks", deck);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <NewQuestionWrapper>
      <Text style={{ fontSize: 25, marginTop: 10 }}>Deck: {deck.title}</Text>
      <FormBlock>
        <Text>Question:</Text>
        <TextInputWrapper
          style={{ marginTop: 5 }}
          value={questionText}
          placeholder="What is...?"
          onChangeText={(questionText) => setQuestionText(questionText)}
        />
      </FormBlock>
      <FormBlock>
        <Text>Answer:</Text>
        <TextInputWrapper
          style={{ marginTop: 5 }}
          value={answerText}
          placeholder="It is...?"
          onChangeText={(answerText) => setAnswerText(answerText)}
        />
      </FormBlock>
      <TouchableOpacity onPress={handleAddQuestion}>
        <ButtonWrapper style={{ backgroundColor: "purple", width: 300 }}>
          <Text style={{ color: "#fff" }}>Submit</Text>
        </ButtonWrapper>
      </TouchableOpacity>
    </NewQuestionWrapper>
  );
};
export default NewCard;
