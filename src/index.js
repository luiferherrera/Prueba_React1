// @flow
import React, { useState } from "react";
import ReactrOM from "react-dom";

const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};

const Display = ({ text, value }) => {
  return `${text}: ${value}`;
};

const Statitics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const promedio = (good - bad) / all;
  const percent = (good / all) * 100;

  if (all) {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td>
                <Display text="Good" value={good}></Display>
              </td>
            </tr>
            <tr>
              <td>
                <Display text="Neutral" value={neutral}></Display>
              </td>
            </tr>
            <tr>
              <td>
                <Display text="Bad" value={bad}></Display>
              </td>
            </tr>
            <tr>
              <td>
                <Display text="All" value={all}></Display>
              </td>
            </tr>
            <tr>
              <td>
                <Display text="Average" value={promedio}></Display>
              </td>
            </tr>
            <tr>
              <td>
                <Display text="Positive" value={`${percent}%`}></Display>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  } else return <p>No Feedback given</p>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [select, setselect] = useState(0);
  const [votes, setVotes] = useState(Array(6).fill(0))
	

  const clickGood = () => {
    setGood(good + 1);
  };
  const clickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const clickbad = () => {
    setBad(bad + 1);
  };

  const clickQuote = () => {
    setselect(Math.floor(Math.random() * 6));
  };

  const clickVote = () => {
	const copy = [...votes]
	copy[select]++
	setVotes(copy)
  };

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const mostVote = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h2>Dar Feedback</h2>
      <Button click={clickGood} text="Good"></Button>
      <Button click={clickNeutral} text="Neutral"></Button>
      <Button click={clickbad} text="Bad"></Button>
      <h2>Statitics</h2>
      <Statitics good={good} bad={bad} neutral={neutral}></Statitics>
	  <h2>anecdote of the day</h2>
      <Button click={clickVote} text="Vote"></Button>
      <Button click={clickQuote} text="next anecdote"></Button>
      <p>{anecdotes[select]}</p>
	  <h2>anecdote with most votes</h2>
	  <p>{anecdotes[mostVote]}</p>
      
    </div>
  );
};

ReactrOM.render(<App />, document.getElementById("root"));
