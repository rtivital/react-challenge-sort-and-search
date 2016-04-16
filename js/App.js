import React, { Component } from 'react';
<<<<<<< HEAD
import UserList from './components/UserList';
import load from './utils/load';
import Searchbar from './components/Searchbar';
import ActiveUser from './components/ActiveUser';
import Toolbar from './components/Toolbar';
=======
import Button from './components/Button';

>>>>>>> d0da9c8c689c5fa7ff34518f608fe83361807323

export default class App extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD

    this.state = {
      data: null,
      active: 0,
      term: ''
    };

    this.loadData();
  }

  loadData() {
    load(this.props.data).then(users => {
      this.initialData = JSON.parse(users);
      this.setState({
        data: this.initialData
      });
    });
  }

  updateData(config) {
    this.setState(config);
  }

  render() {
    return (
      <div className="app container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Searchbar
              term={this.state.term}
              data={this.initialData}
              update={this.updateData.bind(this)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <Toolbar initialData={this.initialData} data={this.state.data} update={this.updateData.bind(this)} />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            <ActiveUser data={this.state.data} active={this.state.active} />
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <UserList data={this.state.data} update={this.updateData.bind(this)} />
          </div>
        </div>

=======
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
      'Чего ты ждешь от этой кнопки?',
      'Если дойдёшь до тысячи, то сразу научищься реакту',
      'ой, всё!', 'Ты нажал кнопку столько раз, что обязан на ней жениться',
      'У нас было 2 npm-пакета с реактом, 75 зависимостей от сторонних библиотек, '
      + '5 npm-скриптов и целое множество плагинов галпа всех сортов и расцветок, '
      + 'а также redux, jquery, mocha, пачка плагинов для eslint и ингерация с firebase. '
      + 'Не то что бы это был необходимый набор для фронтенда. Но если начал собирать '
      + 'вебпаком, становится трудно остановиться. Единственное, что вызывало у меня '
      + 'опасения - это jquery. Нет ничего более беспомощного, безответственного и испорченного, '
      + 'чем рядовой верстальщик без jquery. Я знал, что рано или поздно мы перейдем и на эту дрянь.',
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
        <p style={{marginTop: 2 + 'rem'}}>{this.state.phrase}</p>
>>>>>>> d0da9c8c689c5fa7ff34518f608fe83361807323
      </div>
    );
  }
}
