import logo from "./logo.svg";
import "./App.css";
import Teks from "./component/Teks";
import React, { useState, useRef, useEffect } from "react";
import List from "./component/List";

function App() {
  // const Ref = useRef(null);
  //const [listItem, setListItem] = useState([]);
  const [text, setText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const cobaTeks = "Andyka Baswara Putra";
  const [timer, setTimer] = useState("00:00:00");

  //TodoList
  const listItem = [
    {
      id: 1,
      content: "Belajar props",
    },
    {
      id: 2,
      content: "Belajar state",
    },
    {
      id: 3,
      content: "Belajar react",
    },
  ];

  // Time
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);

    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + hours) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:00:10");

    if (useRef.current) clearInterval(useRef.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 100);
    useRef.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  useEffect(() => {
    text === "spawn" ? setShowImage(true) : setShowImage(false);
  }, [text]);

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <div className="App">
      <header className="App-header">
        {showImage ? <img src={logo} className="App-logo" alt="logo" /> : ""}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Teks coba={cobaTeks} />
        <h5>{text}</h5>
        <input
          type="text"
          className="text"
          placeholder="type here"
          onChange={(typing) => setText(typing.target.value)}
        ></input>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h2>{timer}</h2>
        <button onClick={onClickReset}>Reset</button>
      </header>

      {/* START TODO LIST */}
      <div>
        <h1>Todo List</h1>
        <List items={listItem} />
      </div>
      {/* END TODO LIST */}
    </div>
  );
}

export default App;
