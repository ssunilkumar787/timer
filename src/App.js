import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [counterTimer, setCounterTimer] = useState(15);
  // const [timeReseter, setTimeReseter] = useState();

  useEffect(() => {
    let timerId;

    timerId = setTimeout(() => {
      if (counterTimer > 0) {
        setCounterTimer(counterTimer - 1);
      } else {
        alert("Timer finished!");
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [counterTimer]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>timer: {counterTimer}</h2>
      <button onClick={() => setCounterTimer(15)}>Reset</button>
    </div>
  );
}
