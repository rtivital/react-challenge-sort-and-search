import React, { Component } from 'react';
import axios from 'axios';
import UserList from '../UserList/UserList';
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
    const { data } = this.state;
    return (
      <div className="app">
        {data.length > 0 && (
          <UserList data={this.state.data} onItemClick={this.handleActiveUserSelection} />
        )}
      </div>
    );
  }
}
