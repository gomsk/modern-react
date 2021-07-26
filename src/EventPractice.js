import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChangeFunc = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const btnClick = () => {
    alert("zz :" + username + ", message :" + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      btnClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChangeFunc}
        placeholder="사용자명"
      />
      <input
        type="text"
        name="message"
        value={message}
        onChange={onChangeFunc}
        placeholder="아무거나 입력"
        onKeyPress={onKeyPress}
      />
      <button onClick={btnClick}>확인</button>
    </div>
  );
};

export default EventPractice;
