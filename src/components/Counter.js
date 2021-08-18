import react from "react";
import { connect } from "react-redux";
import "./Counter.css";
import DisplayCount from "./DisplayCount";

class Counter extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCounting: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.isCounting) {
      this.interval = setInterval(() => {
        this.props.startCount();
        this.setState({ isCounting: true });
      }, 1000);
    } else {
      clearInterval(this.interval);
      this.props.stopCount();
      this.setState({ isCounting: false });
    }
  }

  render() {
    return (
      <div className="Counter">
        {this.state.isCounting ? (
          <button onClick={this.handleClick}>Stop Counting!</button>
        ) : (
          <button onClick={this.handleClick}>Start Counting!</button>
        )}
        <DisplayCount count={this.props.count} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ count: state.count });

const mapDispatchToProps = (dispatch) => {
  return {
    startCount: () => dispatch({ type: "START_COUNT" }),
    stopCount: () => dispatch({ type: "STOP_COUNT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
