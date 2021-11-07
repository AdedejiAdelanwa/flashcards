import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Decks from "./views/Decks";
import NewDeck from "./views/NewDeck";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Decks"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Decks") {
              iconName = focused ? "file-tray-full" : "file-tray-full-outline";
            } else if (route.name === "Add Deck") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Decks" component={Decks} />
        <Tab.Screen name="Add Deck" component={NewDeck} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
