import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
//vscode-styled-components Extension : styled componets 자동완성

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <AppBlock>
      <Button>BUTTON</Button>
    </AppBlock>
  );
}

export default App;
