import React from "react";
class TimerClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timer: "00:00:10" };
    this.interval = React.createRef();
  }

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
    this.setState({ timer: text });
  };

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
    this.setTimer("00:00:10");
    let deadTime = this.getDeadTime();
    if (this.interval) clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.startTimer(deadTime);
    }, 1000);
  };

  onClickReset = this.runTimer;

  componentDidMount = this.runTimer;

  componentDidUpdate() {
    document.title = this.state.timer;

    if (this.state.timer === "00:00:00") {
      if (this.interval) clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    if (this.interval.current) clearInterval(this.interval);
  }

  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        }}
      >
        <div style={{ "text-align": "center" }}>
          <h1>{this.state.timer}</h1>
          <button onClick={this.onClickReset} style={{ "margin-top": "10px" }}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
export default TimerClass;
