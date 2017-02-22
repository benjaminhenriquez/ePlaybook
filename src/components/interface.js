import React, { Component } from 'react';

import TargetList from './target_list'
import TargetForm from '../containers/target_form'
import Data from './data'

import stylesheet from '../../style/style.css'

export default class Interface extends Component {

  render() {
    return (
    <div>
      <div><TargetList className="interface_left"/></div>
      <div><TargetForm className="interface_top_right"/></div>
      <div><Data className="interface_bottom_"/></div>
    </div>
    );
  }

}
