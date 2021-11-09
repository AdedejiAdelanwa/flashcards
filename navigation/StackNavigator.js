import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeckDetails from "../views/DeckDetails";
import { TabNavigator } from "./TabNavigator";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={TabNavigator}
      />
      <Stack.Screen name="DeckDetails" component={DeckDetails} />
    </Stack.Navigator>
  );
};

export { StackNavigator };
