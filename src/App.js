//TODO: STEP 1 - Import the useState hook.
import React, {useEffect, useState} from "react";
import BottomRow from './BottomRow';

import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [Home, setHome] = useState(6);
  const [Away, setAway] = useState(3);
  const [timer, setTimer] = useState('10:00');
  const [Down, setDown] = useState(2);
  const [ToGo, setToGo] = useState(7);
  const [BallOn, setBallOn] = useState(21);
  const [Quarter, setQuarter] = useState(2);
  const qT = e => {
    setQuarter(Quarter < 4 ? Quarter + 1 : Quarter - 3);
  };

  useEffect(() => {
    const time = setInterval(() => {
      if (timer.seconds > 0) {
        
        setTimer(({seconds}) => ({
          seconds : seconds - 1,
          minutes :  timer.minutes
        }))
      }
      if (timer.seconds === 0) {
        if (timer.minutes === 0) {
          clearInterval(time)
        } else {
          setTimer(({minutes}) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
          
        }
      }
    }, 1000);
    
    return () => clearInterval(time);
  });

  const newDown = e => {
    Down < 4 ? setDown(Down + 1)
    : setDown(1)
  }

  let html = document.querySelector("html");
  var styleyStyles = `
  .scoreboard {
    background: linear-gradient(to top left,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 0.8px),
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,0) calc(50% + 0.8px),
      rgba(0,0,0,0) 100%),
  linear-gradient(to top right,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(50% - 0.8px),
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,0) calc(50% + 0.8px),
      rgba(0,0,0,0) 100%);
      background-color: orange;
      border-radius: 12%;
  }
  .homeButtons__touchdown {
    background-color: black;
  }
  .awayButtons__touchdown {
    background-color: black;
  }
  .stretchButtons{
    position: relative;
    display: flex;
    margin: auto;
    top: 10px;
    right: 0px;
  }
  .bottomButts {
    background-color: orange;
    color: black;
    font-weight: 700;
  }
  h3 {
    color: black;
  }
  `
  var styleSheet = document.createElement("style")
  styleSheet.type = "text/css"
  styleSheet.innerText = styleyStyles

  html.appendChild(styleSheet)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{Home}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{Away}</div>
          </div>
        </div>
        <BottomRow 
        quarter={Quarter} down={Down} togo={ToGo} ballon={BallOn} newDown={newDown}
        />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHome(Home + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHome(Home + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAway(Away + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAway(Away + 3)}>Away Field Goal</button>
        </div>
      </section>
      <section className="buttons">
        <div className="stretchButtons">
          <Stretchin stretch={newDown} label="Down" />
          <Stretchin stretch={ToGo} label="To Go" />
          <Stretchin stretch={BallOn} label="Ball On" />
          <Stretchin stretch={qT} label="Quarter" />
        </div>
      </section>
    </div>
  );
}

function Stretchin(props) {
  const { stretch, label } = props;
  return (
    <button className="bottomButts" onClick={stretch}>
      {label}
    </button>
  );
}

export default App;
