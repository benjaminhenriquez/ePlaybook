import React, { Component } from 'react';

import TargetList from './target_list'
import TargetForm from '../containers/targetform'
import Data from './data'

export default class Interface extends Component {
  render() {
    return (
    <div>
      <TargetList />
      <TargetForm />
      <Data/>
    </div>
    );
  }
}
