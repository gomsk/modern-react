import React, { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  const onChange = (e) => {
    console.log(e);
    dispatch(e.target);
  };

  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="nickname" value={nickname} onChange={onChange} />
      <div>
        <h1>이름 : {name}</h1>
        <h1>닉네임 : {nickname}</h1>
      </div>
    </div>
  );
};

export default Info;
