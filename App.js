import * as React from "react";

import styled from "styled-components";
import Decks from "./components/Decks";

const AppWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <AppWrapper>
      <Decks />
    </AppWrapper>
  );
}
