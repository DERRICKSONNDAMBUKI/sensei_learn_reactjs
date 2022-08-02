import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// The useEffect Hook allows you to perform side effects in your components.

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        let timer=setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
      return () => {
          clearTimeout(timer)
      },[] // runs effect only on the first render
    });
    
  // },[prop,state]// //Runs on the first render And any time any dependency value changes

//   useEffect Hook that is dependent on a variable change. If the count variable updates, the effect will run again
//   useEffect(() => {
//     setCalculation(() => count * 2);
//     // return () => {
//     //     cleanup
//     // }
//   }, [count]); // add the count variable that is dependent here 

  return (
    <>
      <h2>I've rendered {count} times</h2>
      <p>Count: {count}</p>
      <button onClick={()=>setCount((c)=>c+1)}>+</button>
      <p>Calculation {calculation}</p>
    </>
  );
};
