import React from "react";
import Button from "./component/Button";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="Buttons">
        <Button size="large">BUTTON</Button>
        <Button size="small">BUTTON</Button>
        <Button>BUTTON</Button>
      </div>
      <div className="Buttons">
        <Button color="graph2" size="large">
          BUTTON
        </Button>
        <Button color="graph2" size="small">
          BUTTON
        </Button>
        <Button color="graph2">BUTTON</Button>
      </div>
      <div className="Buttons">
        <Button color="violet2" size="large">
          BUTTON
        </Button>
        <Button color="violet2" size="small">
          BUTTON
        </Button>
        <Button color="violet2">BUTTON</Button>
      </div>
      <div className="Buttons">
        <Button color="blue" size="large" outline>
          BUTTON
        </Button>
        <Button color="graph2" size="small" outline>
          BUTTON
        </Button>
        <Button color="violet2" outline>
          BUTTON
        </Button>
      </div>
      <div className="Buttons">
        <Button color="blue" size="large" fullWidth>
          BUTTON
        </Button>
        <Button color="graph2" size="large" fullWidth>
          BUTTON
        </Button>
        <Button color="violet2" size="large" fullWidth>
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
