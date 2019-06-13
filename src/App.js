/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  state = {
    users: [],
    loading: false,
  }
  async componentDidMount() {
    this.setState({
      loading: true,
    })

    const res = await axios.get('https://api.github.com/users');
    console.log(res.data);

    this.setState({
      users: res.data,
      loading: false,
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;