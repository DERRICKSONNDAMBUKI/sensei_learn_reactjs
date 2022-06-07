import React from "react";
export class Car extends React.Component {
  constructor({ props }) {
    super(props);
    // properties are put in this.state object
    this.state = {
      color: "red",
    };
  }
  changeColor = () => {
    this.setState({
      color: "purple",
    });
  };
  render() {
    return (
      <div>
        <h1>Class Components</h1>
        <p>
          Hi, I am a {this.state.color} {this.props.model} Car!
        </p>
        {/* || */}
        <p>Hi, I am a {this.props.color} Car!</p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
