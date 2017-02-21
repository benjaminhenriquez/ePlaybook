import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteTarget } from '../actions/delete_target';

class TargetExpand extends Component {

  render() {
    debugger

    let target = this.props.target;
    debugger
    let contacts = function(contacts){
      let list = contacts.map(function(contact){
        for(let key in contact) {
          let value = contact[key];
          return(
            <ul>{key}: {value}</ul>
          )
        }
      })
      return list;
    }

      return(
        <div>
          <h2>{target.name}</h2>
          <p>Status: {target.status}</p>
          <p>Company Info:</p>
            <ul>Industry: {target.company_info.industry}</ul>
          <p>Financial Performance: {target.financial_performance}</p>
          <div><p>Key Contacts:</p><div>{contacts(target.key_contacts)}</div></div>
          <input type="button" value="edit" />
          <input type="button" value="delete" onClick={this.deleteButton.bind(this)}/>
        </div>
      )
    }

  deleteButton(event){
    debugger
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteTarget }, dispatch);
}

export default connect(null, mapDispatchToProps)(TargetExpand);
