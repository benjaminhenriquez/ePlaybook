import React, { Component } from 'react';

import TargetList from './target_list'
import TargetForm from '../containers/target_form'
import Data from './data'

export default class Interface extends Component {

  render() {
    return (
    <div>
      <table width="100%" height="100%">
        <td  height="100%"><TargetList /></td>
          <td width="50%"><TargetForm maxheight="50%"/>
          <Data maxheight="50%"/></td>
      </table>
    </div>
    );
  }

}
