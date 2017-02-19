import React, { Component } from 'react';

import HomePage from '../components/home_page'
import Interface from '../components/interface'

export default class App extends Component {
  render() {
    return (
    <div>
      <HomePage/>
      <Interface/>
    </div>
    );
  }
}
