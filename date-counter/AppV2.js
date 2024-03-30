import { useState } from "react";
import "./AppV2.css";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const offSet = step * count;
  const date = new Date();
  date.setDate(date.getDate() + offSet);

  function handleStep(evnt) {
    setStep(evnt.target.value);
  }

  function handleDecreaseCount() {
    setCount((curr) => curr - 1);
  }
  function handleIncreaseCount() {
    setCount((curr) => curr + 1);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }
  return (
    <div className="app">
      <div className="step">
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={handleStep}
        />
        <p>Step: {step}</p>
      </div>
      <div className="item">
        <button onClick={handleDecreaseCount}>-</button>
        <input type="text" value={count} onChange={() => count} />
        <button onClick={handleIncreaseCount}>+</button>
      </div>
      <p className="para">
        {`${
          offSet
            ? `${Math.abs(offSet)} days ${
                count < 0 ? `ago from today was` : `from today is`
              }`
            : `Today is`
        } ${weekday[date.getDay()]} ${
          month[date.getMonth()]
        } ${date.getDate()} ${date.getFullYear()}`}
      </p>
      <button
        className={`${step !== 1 || count !== 0 ? "" : "hide"}`}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
