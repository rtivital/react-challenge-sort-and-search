import React, { Component } from 'react';
import axios from 'axios';
import UserList from '../UserList/UserList';
import { ActiveUser } from '../ActiveUser';
import './app.scss';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      active: null,
    };

    axios.get('./data.json').then((response) => {
      this.setState({ data: response.data });
    });
  }

  handleActiveUserSelection = (item) => {
    this.setState({ active: item });
  }

  render() {
    const { data, active } = this.state;
    return (
      <div className="app">
        {data.length > 0 && (
          <div className="app__inner">
            <h1 className="app__title">React Challenge: Sort and Search</h1>
            <div className="layout">
              {active && (
                <aside className="sidebar">
                  <ActiveUser data={active} />
                </aside>
              )}
              <main className="main">
                <UserList data={data} onItemClick={this.handleActiveUserSelection} />
              </main>
            </div>
          </div>
        )}
      </div>
    );
  }
}
