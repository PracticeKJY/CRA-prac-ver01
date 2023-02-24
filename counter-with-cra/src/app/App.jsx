import React from "react";

import "./App.css";
// import { Counter } from "../components";
import {
  CounterClass,
  CounterFunction,
  Button,
  LifeCycle,
} from "../components";

//재사용 함수를 만들어줌
function renderComponents(isvisible) {
  if (isvisible) {
    <>
      <h2>함수컴포넌트</h2>
      <CounterFunction count={10} />
      <h2>클래스컴포넌트</h2>
      <CounterClass step={3} />
      <h2>버튼 컴포넌트</h2>
      <Button />
    </>;
  } else {
    return null;
  }
}

function App() {
  const [isvisibleComponents] = React.useState(true);

  return (
    <div className="App">
      <h2>라이프사이클</h2>
      <LifeCycle />
      {renderComponents(isvisibleComponents)}
    </div>
  );
}

export default App;
