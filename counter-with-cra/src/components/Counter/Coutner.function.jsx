// 함수컴포넌트 a-z 만들어보기

import React, { useState } from "react";
import styles from "./Counter.module.css";
//  props => { count : 2}
// prop.count =2 value
// initialCount = 1

function Counter({ min = 1, max = 10, step = 1, count: initialCount = 1 }) {
  // 함수컴포넌트에서 상태변화시킬려면 뭘 선언해줬어야했죠?
  const [count, setState] = useState(initialCount);

  // let [count, setState] =  [2,f()]
  // let count = 2
  // let setState = f()

  const handleDec = () => {
    setState(count - step);
  };
  const handleInc = () => {
    setState(count + step);
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleInc}>
        +
      </button>
      <output>{count}</output>
      <button type="button" onClick={handleDec}>
        -
      </button>
    </div>
  );
}

// Counter.defaultProps = {
//   count: 1,
//   min: 1,
//   max: 10,
//   step: 1,
// };

export default Counter;

// 정적  :   숫자를 직접적어주는것 1,2,3,4,5
// 동적  :   {} 객체로 프로퍼티를 저장해주고 그 value 바꿔주는것
