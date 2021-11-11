import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CardFlip from "react-native-card-flip";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { ButtonWrapper } from "./DeckDetails";

const QuizWrapper = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 10px;
`;

const NoQUizWrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const FlipChild = styled.View`
  height: 300px;
  width: 350px;
  background-color: #fff;
  align-self: center;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;
const ResultWrapper = styled.View`
  height: 400px;
  background-color: #fff;
  align-items: center;
  justify-content: space-evenly;
`;
const ButtonsContainer = styled.View`
  height: 150px;
  width: 350px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const MarkButtonWrapper = styled.View`
  width: 150px;
  height: 50px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
`;

const ResultText = styled.Text`
  font-size: 18px;
`;

const Quiz = ({ route, navigation }) => {
  const deck = route.params;
  const numOfCards = deck.questions.length;
  const [answerCount, setAnswerCount] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const card = useRef();

  function routeToAddQuestion() {
    navigation.navigate("NewCard", deck);
  }

  function wrongGoToNextQuestion() {
    if (answerCount < numOfCards) {
      setAnswerCount((prev) => prev + 1);
    }
  }

  function rightGoToNext() {
    if (answerCount < numOfCards) {
      setAnswerCount((prev) => prev + 1);
      setCorrectAnswer((prev) => prev + 1);
    }
  }

  function restartQuiz() {
    setAnswerCount(0);
    setCorrectAnswer(0);
  }
  function backToDeck() {
    navigation.navigate("DeckDetails", deck);
  }

  if (numOfCards < 1)
    return (
      <NoQUizWrapper>
        <Text
          style={{ width: 300, fontSize: 15, lineHeight: 25, marginBottom: 10 }}
        >
          You do not have enough questions to quiz on, kindly create a question
          here:
        </Text>
        <TouchableOpacity onPress={routeToAddQuestion}>
          <ButtonWrapper style={{ backgroundColor: "purple", width: 300 }}>
            <Text style={{ color: "#fff" }}>Add new question</Text>
          </ButtonWrapper>
        </TouchableOpacity>
      </NoQUizWrapper>
    );
  return (
    <QuizWrapper>
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        {deck.title} Quiz
      </Text>
      <Text style={{ fontSize: 16 }}>
        Answered: {answerCount}/{numOfCards}
      </Text>
      {answerCount === numOfCards ? (
        <ResultWrapper>
          <Ionicons name="checkmark-circle" size={80} color="purple" />
          <ResultText>Quiz completed</ResultText>
          <ResultText>Correct answer(s) :{correctAnswer}</ResultText>
          <ButtonsContainer>
            <TouchableOpacity onPress={restartQuiz}>
              <ButtonWrapper>
                <Text>Restart Quiz</Text>
              </ButtonWrapper>
            </TouchableOpacity>
            <TouchableOpacity onPress={backToDeck}>
              <ButtonWrapper style={{ backgroundColor: "purple" }}>
                <Text style={{ color: "#fff" }}>Back to Deck</Text>
              </ButtonWrapper>
            </TouchableOpacity>
          </ButtonsContainer>
        </ResultWrapper>
      ) : (
        <View>
          <CardFlip
            style={{
              marginTop: 20,
              alignSelf: "center",
              height: 300,
              width: 350,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
              overflow: "hidden",
            }}
            ref={card}
          >
            <FlipChild>
              <Text style={{ color: "#000", fontSize: 20 }}>
                {deck.questions[answerCount].question}
              </Text>
              <TouchableOpacity onPress={() => card.current.flip()}>
                <ButtonWrapper>
                  <Text
                    style={{
                      width: 100,
                      color: "purple",
                    }}
                  >
                    View Answer
                  </Text>
                </ButtonWrapper>
              </TouchableOpacity>
              <ButtonsContainer>
                <TouchableOpacity onPress={rightGoToNext}>
                  <MarkButtonWrapper
                    style={{
                      backgroundColor: "green",
                    }}
                  >
                    <Text style={{ color: "#fff" }}>Correct</Text>
                  </MarkButtonWrapper>
                </TouchableOpacity>
                <TouchableOpacity onPress={wrongGoToNextQuestion}>
                  <MarkButtonWrapper
                    style={{
                      borderColor: "red",
                      borderWidth: 1,
                      borderStyle: "solid",
                      backgroundColor: "#fff",
                    }}
                  >
                    <Text>Incorrect</Text>
                  </MarkButtonWrapper>
                </TouchableOpacity>
              </ButtonsContainer>
            </FlipChild>
            <FlipChild>
              <Text style={{ color: "#000", fontSize: 16 }}>
                {deck.questions[answerCount].answer}
              </Text>
              <TouchableOpacity onPress={() => card.current.flip()}>
                <ButtonWrapper style={{ backgroundColor: "purple" }}>
                  <Text
                    style={{
                      color: "white",
                    }}
                  >
                    Back to Question
                  </Text>
                </ButtonWrapper>
              </TouchableOpacity>
            </FlipChild>
          </CardFlip>
        </View>
      )}
    </QuizWrapper>
  );
};
export default Quiz;
