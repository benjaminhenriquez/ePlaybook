import React, { Component } from 'react';

import TargetList from './target_list'
import TargetForm from '../containers/target_form'
import Data from './data'
import Logo from './logo'

import stylesheet from '../../style/style.css'

export default class Interface extends Component {

  render() {
    return (
    <div>
      <div className="col-md-1"><Logo/></div>
      <div className="col-md-6"><TargetList /></div>
      <div className="col-md-6"><TargetForm /><Data /></div>
    </div>
    );
  }

}
