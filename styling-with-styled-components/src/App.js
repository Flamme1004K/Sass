import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
//vscode-styled-components Extension : styled componets 자동완성

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue: "#228be6",
  grey: "#496057",
  pink: "#f06595",
};

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <Button>BUTTON</Button>
        <Button color="grey">BUTTON</Button>
        <Button color="pink">BUTTON</Button>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
