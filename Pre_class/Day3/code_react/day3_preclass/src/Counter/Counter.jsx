import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0)

  const handleIncrement = (value) => {
    setCount(value + count);
  };

  return (
    <>
      <h1>count</h1>
      <h1>{count}</h1>
      <button onClick={()=>
      handleIncrement(5)
      }>add</button>
      <button onClick={()=>
      handleIncrement(-5)
      }>Remove</button>
    
      
    </>
  )
}

export default Counter
