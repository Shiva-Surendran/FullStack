import { useState } from "react";

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad;
  const average=(good*1+bad*-1)/(good+bad+neutral)
  const positive=good/total
  if (total == 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>no feedback</p>
      </>
    );
  }
  return (
    <div>
      <h1>statistics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total} </p>
      <p>average {average}</p>
      <p>positive {positive}</p>

    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const inc = () => {
    setGood(good + 1);
  };

  const neu = () => {
    setNeutral(neutral + 1);
  };

  const dec = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={inc}>good</button>
      <button onClick={neu}>neutral</button>
      <button onClick={dec}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
