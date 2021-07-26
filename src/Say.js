import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState({ color: "black" });
  const handleEnter = () => setMessage("입장 하셨습니다.");
  const handleExit = () => setMessage("퇴장 하셨습니다.");
  return (
    <div>
      <button onClick={handleEnter}>입장</button>
      <button onClick={handleExit}>퇴장</button>
      <h1 style={color}>{message}</h1>
      <button
        onClick={() => {
          setColor({ color: "red" });
        }}
      >
        빨강
      </button>
      <button
        onClick={() => {
          setColor({ color: "green" });
        }}
      >
        녹색
      </button>
      <button
        onClick={() => {
          setColor({ color: "black" });
        }}
      >
        검정
      </button>
    </div>
  );
};

export default Say;
