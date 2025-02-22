import { useState } from "react";

const Counter = () => {
const [count, setCount] = useState(0)
  return (
    <>
      <p>counter: {count}</p>
      <button onClick={()=>setCount(count-1)}>-1</button>

      <button onClick={()=>setCount(count+1)}>+1</button>


    </>
  );
};

export default Counter;