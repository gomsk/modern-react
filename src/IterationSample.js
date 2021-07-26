import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [nextId, setNextId] = useState(5);
  const [message, setMessage] = useState("");
  const onInputChange = (e) => setMessage(e.target.value);
  const onAddClick = () => {
    const item = { id: nextId, text: message };
    setNextId(nextId + 1);
    setNames(names.concat(item));
    setMessage("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <ul>{nameList}</ul>
      <input type="text" value={message} onChange={onInputChange} />
      <button onClick={onAddClick}>추가</button>
    </div>
  );
};

export default IterationSample;
