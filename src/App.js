//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from './BottomRow';

import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [Home, setHome] = useState(6);
  const [Away, setAway] = useState(3);
  const [Timer, setTimer] = useState('10:00');
  const [Down, setDown] = useState(3);
  const [ToGo, setToGo] = useState(7);
  const [BallOn, setBallOn] = useState(21);
  const [Quarter, setQuarter] = useState(2);
  const qT = e => {
    setQuarter(Quarter < 4 ? Quarter + 1 : Quarter - 3);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{Home}</div>
          </div>
  <div className="timer">{Timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{Away}</div>
          </div>
        </div>
        <BottomRow 
        quarter={Quarter} down={Down} togo={ToGo} ballon={BallOn}
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
