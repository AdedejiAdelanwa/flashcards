import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FlipCard from "react-native-flip-card";
import styled from "styled-components";
import { ButtonWrapper } from "./DeckDetails";

const QuizWrapper = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 10px;
`;

// const FlipContainer = styled.View`
//   height: 300px;
//   width: 300px;
//   background-color: tomato;
//   align-self: center;
//   margin: 20px 0;
// `;

const Quiz = ({ route, navigation }) => {
  const deck = route.params;
  const numOfCards = deck.questions.length;
  const answerCount = 0;

  function routeToAddQuestion() {
    navigation.navigate("NewCard", deck);
  }

  if (numOfCards < 1)
    return (
      <View>
        <Text>
          You do not have enough questions, kindly create a question here:
        </Text>
        <TouchableOpacity onPress={routeToAddQuestion}>
          <ButtonWrapper>
            <Text>Add new question</Text>
          </ButtonWrapper>
        </TouchableOpacity>
      </View>
    );
  return (
    <QuizWrapper>
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        {deck.title} Quiz
      </Text>
      <Text style={{ fontSize: 16 }}>
        Answered: {answerCount}/{numOfCards}
      </Text>
      {/* <FlipCard
        style={{ backgroundColor: "red", height: 300 }}
        friction={20}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd) => {
          console.log("isFlipEnd", isFlipEnd);
        }}
      >
     
        <View style={{ backgroundColor: "green", height: 100 }}>
          <Text>The Face</Text>
        </View>
       
        <View style={{ backgroundColor: "blue", height: 100 }}>
          <Text>The Back</Text>
        </View>
      </FlipCard> */}
      {/* <FlipContainer>
        <View>
          <Text>Question:</Text>
          <Text>{deck.questions[0].question}</Text>
          <TouchableOpacity>
            <Text>View answer</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Answer:</Text>
          <Text>{deck.questions[0].answer}</Text>
          <TouchableOpacity>
            <Text>Back to Question</Text>
          </TouchableOpacity>
        </View>
      </FlipContainer> */}
      <TouchableOpacity>
        <Text>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Incorrect</Text>
      </TouchableOpacity>
    </QuizWrapper>
  );
};
export default Quiz;
