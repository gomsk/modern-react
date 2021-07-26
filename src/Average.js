import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중...z");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [num, setNum] = useState("");
  const [list, setList] = useState([]);
  const inputEl = useRef(null);

  const numChange = useCallback((e) => {
    setNum(e.target.value);
  }, []);
  const onInsert = useCallback(() => {
    setList(list.concat(parseInt(num)));
    setNum("");
    inputEl.current.focus();
  }, [num, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={num} onChange={numChange} ref={inputEl} />
      <button onClick={onInsert}>추가</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 :</b> {avg}
      </div>
    </div>
  );
};

export default Average;
