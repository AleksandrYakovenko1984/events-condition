import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };
  // show = () => {
  //     this.setState({visible: true})
  // }

  // hide = () => {

  //     this.setState({visible: false})
  // }
  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button type="button" onClick={this.toggle} className="Dropdown__togle">
          {this.state.visible ? "скрыть" : "показать"}
        </button>

        {visible && <div className="Dropdown__menu">выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
