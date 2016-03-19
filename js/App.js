import React, { Component } from 'react';
import Button from './components/Button';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 'Нажми на кнопку!',
      count: 0
    };
  }

  updateBtn() {
    const phrases = [
      'ЖМИ!', 'Не останавливайся!',
      'У тебя хорошо получается!', 'Красавчик!',
      'Вот это и есть React!', 'Продолжай!',
      'Пока ты тут нажимаешь кнопку другие работают!',
      'Всё хватит!', 'Ну и зачем ты нажал?',
      'В следующий раз тут будет полезный совет',
      'Ты нажал кнопку столько раз, что обязан на ней жениться',
      'coub про кота-джедая: http://coub.com/view/spxn',
      'Дальнобойщики на дороге ярости: http://coub.com/view/6h0dy',
      'Реакция коллег на ваш код: http://coub.com/view/5rjjw',
      'Енот ворует еду: http://coub.com/view/xi3cio',
      'Российский дизайн: http://coub.com/view/16adw5i0'
    ];
    this.setState({
      count: this.state.count + 1,
      phrase: phrases[parseInt(Math.random() * phrases.length)]
    });
  }

  render() {
    return (
      <div className="container app">
        <Button count={this.state.count} update={this.updateBtn.bind(this)} />
        <h1>{this.state.phrase}</h1>
      </div>
    );
  }
}
