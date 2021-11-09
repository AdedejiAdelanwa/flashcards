import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./navigation/TabNavigator";
import { StackNavigator } from "./navigation/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
