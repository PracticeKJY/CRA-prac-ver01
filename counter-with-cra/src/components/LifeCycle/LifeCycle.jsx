import React, { Component } from "react";

class LifeCycle extends Component {
  //render 단계

  state = {
    message: "loading...",
  };

  render() {
    return (
      <>
        <div className="LifeCycle" tabIndex={0}>
          컴포넌트의 생명 주기
        </div>
        <button
          type="button"
          onClick={() => this.setState({ message: "update content" })}
        >
          {this.state.message}
        </button>
      </>
    );
  }

  // commit 단계
  // -실제 DOM에 접근, 조작( DOM 스크립트 또는 Vanilla 스크립트)

  //componentDidMount => render 이후, 이벤트핸들러를 통한 DOM 조작을 실습함
  componentDidMount() {
    console.log("여기선 실제DOM접근이 가능해요");
    // console.log(document.querySelector('.LifeCycle')); // div가 나올 거 같아요. - 승택 & 선영
    // => 왜냐? render에선 thinking in react , commit 에선 thinking in 실제DOM,

    //Vanilla Programing (Non React == Side Effect)
    //명령형 Programing

    const lifecycleElement = document.querySelector(".LifeCycle");
    const selectMeInput = document.getElementById("select-me");

    // console.log(selectMeInput);

    lifecycleElement.addEventListener("click", (e) => {
      // 이벤트 위임 ,  .lifecycle element에 클릭시 css가 바뀌는 이벤트를 걺
      e.target.style.cssText = `
      background: skyblue;
      color: darkblue;
      font-size: 3rem;
      padding: 20px;
    `;

      // 문서의 input 요소를 찾아서 초점을 이동
      setTimeout(() => {
        selectMeInput.value = "나! 선택받았어~~";
        selectMeInput.select();
      }, 1500);
    });

    lifecycleElement.addEventListener("keyup", (e) => {
      if (e.key.toLowerCase().includes("enter")) {
        lifecycleElement.click();
      }
    });
  }

  //componentDidUpdate => state
  componentDidUpdate() {
    console.log("우리 컴포넌트가 변경되었어요~");
  }
}

export default LifeCycle;
