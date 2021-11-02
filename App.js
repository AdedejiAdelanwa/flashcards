import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styled from "styled-components";
// import Decks from "./views/Decks";
// import DeckDetails from "./views/DeckDetails";
// import NewCard from "./views/NewCard";
// import NewDeck from "./views/NewDeck";
import Quiz from "./views/Quiz";

// const Stack = createNativeStackNavigator();

const AppWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <AppWrapper>
    //       <Stack.Screen name="Home" component={Decks} />
    //     </AppWrapper>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <AppWrapper>
      <Quiz />
    </AppWrapper>
  );
}
