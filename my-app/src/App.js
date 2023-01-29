import logo from "./logo.svg";
import "./App.css";
import Teks from "./component/Teks";
import React, { useState, useEffect } from "react";
import TimerClass from "./component/TimerClass";
import Props from "./component/Props";
import Counter from "./component/Counter";
import Promise from "./component/Promise";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="timer-Function-component" element={<TimerClass />} />
        <Route path="timer-class-component" element={<TimerClass />} />
        <Route path="props-implement" element={<Props />} />
        <Route path="counter" element={<Counter />} />
        <Route path="promise" element={<Promise />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  // const Ref = useRef(null);
  //const [listItem, setListItem] = useState([]);
  const [text, setText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const cobaTeks = "Tim IHX Web";

  useEffect(() => {
    text === "spawn" ? setShowImage(true) : setShowImage(false);
  }, [text]);

  return (
    <div className="App">
      <header className="App-header">
        {showImage ? <img src={logo} className="App-logo" alt="logo" /> : ""}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Teks coba={cobaTeks} />
        <h5
          style={{
            margin: 5,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {text}
        </h5>
        <input
          style={{
            margin: 5,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
          type="text"
          className="text"
          placeholder="type here"
          onChange={(typing) => setText(typing.target.value)}
        ></input>
        <a
          style={{
            margin: 5,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* counter */}
        <div
          style={{
            margin: 5,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <a
            href="https://docs.google.com/presentation/d/1ZycIFkR2xtmANg_r5qnpSGQUZKZpLy8hJ6VUVP3UlQg/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button animated="fade">
              <Button.Content visible>Task 1 : Create React App</Button.Content>
              <Button.Content hidden>Check it out!</Button.Content>
              {/* <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content> */}
            </Button>
          </a>
        </div>
        <div
          style={{
            margin: 5,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <a
            href="https://docs.google.com/presentation/d/1S7WDNpHiA3Ivmpni-oG2csJ9Ac6tusCtmi3FgMaflwg/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button animated="fade">
              <Button.Content visible>Task 2 : React JS</Button.Content>
              <Button.Content hidden>Check it out!</Button.Content>
              {/* <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content> */}
            </Button>
          </a>
        </div>
        <div
          style={{
            margin: 5,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link to="/timer-function-component">
            <Button animated="fade">
              <Button.Content visible>Timer Function Component</Button.Content>
              <Button.Content hidden>Check it out!</Button.Content>
              {/* <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content> */}
            </Button>
          </Link>
        </div>
        <div
          style={{
            margin: 5,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link to="/timer-class-component">
            <Button animated="fade">
              <Button.Content visible>Timer Class Component</Button.Content>
              <Button.Content hidden>Check it out!</Button.Content>
              {/* <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content> */}
            </Button>
          </Link>
        </div>
        <div
          style={{
            margin: 5,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link to="/props-implement">
            <Button animated="fade">
              <Button.Content visible>Props Implement</Button.Content>
              <Button.Content hidden>Check it out!</Button.Content>

              {/* <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content> */}
            </Button>
          </Link>
        </div>
        <div
          style={{
            margin: 5,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link to="/counter">
            <Button animated="fade">
              <Button.Content visible>Props Function (Counter)</Button.Content>
              <Button.Content hidden>Check it out!</Button.Content>

              {/* <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content> */}
            </Button>
          </Link>
        </div>
        <div
          style={{
            margin: 5,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link to="/promise">
            <Button animated="fade">
              <Button.Content visible>Promise</Button.Content>
              <Button.Content hidden>Check it out!</Button.Content>
              {/* <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content> */}
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
