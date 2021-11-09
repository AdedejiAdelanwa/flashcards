import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeckDetails from "../views/DeckDetails";
import NewCard from "../views/NewCard";
import Quiz from "../views/Quiz";
import { TabNavigator } from "./TabNavigator";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator gestureEnabled>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={TabNavigator}
      />
      <Stack.Screen name="Deck Details" component={DeckDetails} />
      <Stack.Screen name="New Card" component={NewCard} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
};

export { StackNavigator };
