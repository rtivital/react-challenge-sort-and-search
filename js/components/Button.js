import React, { Component } from 'react';

<<<<<<< HEAD
export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <button onClick={this.increment.bind(this)} className="button">
        Кнопочка была нажата: {this.state.count} раз
      </button>
    );
  }
}
=======
const Button = ({count, update}) => {
  return (
    <button className="btn btn-default" onClick={update}>
      Кнопка была нажата {count} раз
    </button>
  );
}


export default Button;
>>>>>>> d0da9c8c689c5fa7ff34518f608fe83361807323
