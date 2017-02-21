import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import deleteTarget from '../actions/delete_target';
import editTarget from '../actions/edit_target';
import showEditFormAction from '../actions/edit_form';

class TargetExpand extends Component {

  render() {
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
    debugger
    if(this.props.expandTarget === true && this.props.showEditForm === false){
      return(
        <div>
          <h2>{target.name}</h2>
          <p>Status: {target.status}</p>
          <p>Company Info:</p>
            <ul>Industry: {target.company_info.industry}</ul>
          <p>Financial Performance: {target.financial_performance}</p>
          <div><p>Key Contacts:</p><div>{contacts(target.key_contacts)}</div></div>
          <input type="button" value="edit" onClick={this.showCloseForm.bind(this)}/>
          <input type="button" value="delete" onClick={this.deleteButton.bind(this)}/>
        </div>
      )
    }
    else if(this.props.expandTarget === true && this.props.showEditForm === true){
      return(
        <div>
          <input type="button" value="Close Form" onClick={this.showCloseForm.bind(this)}/>
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
            <input type="submit" value="Edit"/>
          </form>
        </div>
      )
    }
  }

  showCloseForm(){
  this.props.showEditFormAction(this.props.edit_form)

  }

  deleteButton(){
    this.props.deleteTarget(this.props.targets, this.props.index);
  }

  editButton(event){
    event.preventDefault()
    debugger
    // this.props.editTarget(this.props.targets)
  }
}

function mapStateToProps({ targets, showEditForm, expandTarget }){
  return { targets, showEditForm, expandTarget }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteTarget, showEditFormAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetExpand);
