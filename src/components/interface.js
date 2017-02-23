import React, { Component } from 'react';

import TargetList from './target_list'
import TargetForm from '../containers/target_form'
import Data from './data'
import Logo from './logo'


export default class Interface extends Component {

  render() {
    return (
    <div>
      <div className="row"><div className="col-md-1"></div><div className="col-md-10"><Logo/></div><div className="col-md-1"></div></div>
      <div id="row" clasName="row"><div className="col-md-5"><TargetList /></div>
      <div className="col-md-6"><TargetForm /><Data /></div></div>
    </div>
    );
  }

}
