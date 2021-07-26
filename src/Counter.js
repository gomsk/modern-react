import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <div>number : {number}</div>
        <button
          onClick={() => {
            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              () => console.log("state 함수가 호출되었습니다.")
            );
          }}
        >
          {"+"}
        </button>
      </div>
    );
  }
}

export default Counter;
