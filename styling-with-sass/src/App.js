import React from "react";
import Button from "./component/Button";
import "./App.scss";

/*
클래스 네임 정하기

1. 컴포넌트의 이름을 고유하게 지정
2. 최상위 엘리먼트의 클래스 이름을 컴포넌트 이름과 같게하기
3. 그 내부 샐랙터에서 사용

*/

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
        <Button
          color="blue"
          size="large"
          fullWidth
          onClick={() => {
            console.log("마우스 클릭");
          }}
        >
          BUTTON
        </Button>
        <Button
          color="graph2"
          size="large"
          fullWidth
          onMouseMove={() => {
            console.log("마우스 무브");
          }}
        >
          BUTTON
        </Button>
        <Button
          color="violet2"
          size="large"
          fullWidth
          className="customized-Button"
        >
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
