import React, { Component } from 'react';
import axios from 'axios';
import UserList from '../UserList/UserList';
import { ActiveUser, ActiveUserPlaceholder } from '../ActiveUser';
import './app.scss';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      active: null,
      searchTerm: '',
      serchResults: [],
      sortOrder: 'straight',
      sortType: 'alphabetical',
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
          <div className="layout">
            <aside className="sidebar">
              {active ? <ActiveUser data={active} /> : <ActiveUserPlaceholder />}
            </aside>
            <main className="main">
              <UserList data={data} onItemClick={this.handleActiveUserSelection} />
            </main>
          </div>
        )}
      </div>
    );
  }
}
