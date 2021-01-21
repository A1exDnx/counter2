import "./App.css";
import { useState } from "react";
import BtnLess from "./components/BtnLess";
import BtnMore from "./components/BtnMore";
import BtnReset from "./components/BtnReset";

function App() {
  const [counters, setCounters] = useState([0]);

  return (
    <>
      <div className="main">
        {counters.length < 3 && (
          <button
            className="reset"
            onClick={() => {
              const newCounters = [...counters];
              newCounters.push(0);
              setCounters(newCounters);
            }}
          >
            Add counter
          </button>
        )}
        <div className="counter-section">
          {counters.map((item, index) => {
            return (
              <div className="container">
                <div className="counter-box">
                  <BtnLess
                    item={item}
                    counters={counters}
                    setCounters={setCounters}
                    index={index}
                  />
                  <p className="counter-content">{item}</p>
                  <BtnMore
                    item={item}
                    counters={counters}
                    setCounters={setCounters}
                    index={index}
                  />
                </div>
                <BtnReset
                  item={item}
                  counters={counters}
                  setCounters={setCounters}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
