import logo from "./logo.svg";
import "./App.css";
import Teks from "./component/Teks";
import React, { useState, useRef, useEffect } from "react";
import List from "./component/List";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="class-component" element={<ClassComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timer: "00:00:10"};
    this.interval = React.createRef();
  };

  getTimeRemaining = (e) => {
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

  getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  setTimer = (text) => {
    this.setState({timer: text});
  }

  startTimer = (e) => {
    let { total, hours, minutes, seconds } = this.getTimeRemaining(e);
    if (total >= 0) {
      this.setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + hours) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  runTimer = () => {
    this.setTimer('00:00:10');
    let deadTime = this.getDeadTime();
    if(this.interval) clearInterval(this.interval)

    this.interval = setInterval(() => {
      this.startTimer(deadTime)
    }, 1000)
  }

  onClickReset = this.runTimer;

  componentDidMount = this.runTimer;

  componentWillUnmount() {
    if(this.interval.current) clearInterval(this.interval)
  }

  render() {
    return (
      <div style={{'width': '100vw', 'height': '100vh', 'display': 'flex', 'align-items': 'center', 'justify-content': 'center'}}>
        <div style={{'text-align': 'center'}}>
          <h1>{this.state.timer}</h1>
          <button onClick={this.onClickReset} style={{'margin-top': '10px'}}>Reset</button>
        </div>
      </div>
    );
  }
}

function Home() {
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

  // counter
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    if (counter > 0){
      setCounter(count => count - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };
  //counter

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

      {/* counter */}
      <div className="counter">
        <h1> React Counter </h1>
        <span className="counter__output">{counter}</span>
        <span className="btn__container">
          <button className="control__btn" onClick={increase}>+</button>
          <button className="control__btn" onClick={decrease}>-</button>
          <button className="reset" onClick={reset}>Reset</button>
        </span>
      </div>
      {/* counter */}
    </div>
  );
}

export default App;
