import * as React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const AppWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <AppWrapper>
      <Text>Universal React Native with Expo</Text>
      <Text>Deji Adelanwa</Text>
    </AppWrapper>
  );
}
