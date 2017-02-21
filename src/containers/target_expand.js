import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import deleteTarget from '../actions/delete_target';
import editTarget from '../actions/edit_target';

class TargetExpand extends Component {

  constructor(props){
    super(props);
    this.state = {edit: false}
  }

  render() {
    debugger
    if(this.state.edit===false){

    let target = this.props.target;
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
          <input type="button" value="edit" onClick={this.showCloseForm()}/>
          <input type="button" value="delete" onClick={this.deleteButton.bind(this)}/>
        </div>
      )
    }
    else{
      return(
        <div>
          <input type="button" value="Minimize Form" onClick={this.showCloseForm()}/>
          <form onSubmit={this.editButton.bind(this)}>
            <p>Company Name: <input type="text" name="name" required="required"/></p>
            <p>Status: <select name="status">
              <option value="Researching" >Researching</option>
              <option value="Pending Approval" >Pending Approval</option>
              <option value="Approved" >Approved</option>
              <option value="Declined" >Declined</option>
            </select></p>
            <div><p>Company Info:</p>
              <ul>Industry: <input type="text" name="industry" required="required"/></ul>
            </div>
            <p>Financial Performance: <br/>
              <ul><input type="radio" name="financial_performance" value="Good"/> Good </ul>
              <ul><input type="radio" name="financial_performance" value="Excellent"/> Excellent </ul>
              <ul><input type="radio" name="financial_performance" value="Bad"/> Bad </ul>
              <ul><input type="radio" name="financial_performance" value="Perilous"/> Perilous </ul>
            </p>
            <div><p>Key Contacts:</p>
              <ul className="contact_field" >Title:    <input type="text" name="title" required="required"/><br/>
                            Name:  <input type="text" name="name" required="required"/></ul>
              <ul className="contact_field" >Title:    <input type="text" name="title" required="required"/><br/>
                            Name:  <input type="text" name="name" required="required"/></ul>
            </div>
            <input type="submit" />
          </form>
        </div>
      )
    }
  }

  showCloseForm(){
    this.setState({edit: !this.state.expand})

  }

  deleteButton(){
    this.props.deleteTarget(this.props.targets, this.props.index);
  }

  editButton(){
    debugger
    // this.props.editTarget(this.props.targets)
  }
}

function mapStateToProps({targets}){
  return { targets }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteTarget }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetExpand);
