import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
const Counter = () => {
  //const count = 0;
  const [count, setCount] = useState(0);
  // const handleClickMinus = (e) => {
  //   if (count > 1) {
  //     setCount(count - 1);
  //   }
  // };
  const handleClickMinus = (e) => (count > 1 ? setCount(count - 1) : void 0); // e -> event
  const [show, setShow] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {show && (
        <AiOutlinePlusCircle
          color={"Blue"}
          size={33} /*{count * 4}*/
          onClick={(e) => setCount(count + 1)}
        />
      )}
      <h1 role="button" onClick={(e) => setShow(!show)}>
        {count}
      </h1>
      <h1>{count}</h1>
      <h1>{count}</h1>
      {show && (
        <AiOutlineMinusCircle
          color={count < 2 ? "Blue" : "red    "}
          size={33}
          onClick={handleClickMinus}
        />
      )}
    </div>
  );
};
export default Counter;
