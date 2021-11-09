import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import NewDeck from "../views/NewDeck";
import Decks from "../views/Decks";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Decks"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Decks") {
            iconName = focused ? "file-tray-full" : "file-tray-full-outline";
          } else if (route.name === "AddDeck") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Decks" component={Decks} />
      <Tab.Screen name="AddDeck" component={NewDeck} />
    </Tab.Navigator>
  );
};
export { TabNavigator };
