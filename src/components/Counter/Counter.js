import React from "react";
import "./Counter.css";
import Controls from "./Controllers";
import Value from "./Value";
class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
    a: 1,
    b: 2,
  };
  handleIncrement = () => {
    console.log("кликнули увеличить");
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  currState = {
    value: 12,
    a: 1,
    b: 2,
  };

  update = {
    value: 44,
  };

  handleDecrement = () => {
    console.log("кликнули уменьшить");
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
