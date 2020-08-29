import React, { useState } from "react";
import "./App.css";
import CheckBox from "./components/CheckBox";

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div>
      <CheckBox onChange={onChange} checked={check}>
        다음 약간에 모두 동의
      </CheckBox>
    </div>
  );
}

export default App;
