import react from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isCounting: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.isCounting) {
      this.interval = setInterval(() => {
        this.setState({ count: this.state.count + 1, isCounting: true });
      }, 1000);
    } else {
      clearInterval(this.interval);
      this.setState({ count: 0, isCounting: false });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.isCounting ? (
          <button onClick={this.handleClick}>Stop Counting!</button>
        ) : (
          <button onClick={this.handleClick}>Start Counting!</button>
        )}
        <Counter count={this.state.count} />
      </div>
    );
  }
}

export default App;
