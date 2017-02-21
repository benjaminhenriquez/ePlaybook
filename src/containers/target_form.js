import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import $ from 'jquery';

import createTarget from '../actions/create_target'

class TargetForm extends Component {

  constructor(props){
    super(props);
    this.state = {expand: false }
  }

  render() {
    if(this.state.expand === false){
    return (
    <div>
      <input type="button" value="Add Company" onClick={this.addButton.bind(this)}/>
    </div>)}
    else{
    return (
    <div>
      <input type="button" value="Minimize Form" onClick={this.addButton.bind(this)}/>
      <form onSubmit={this.submitForm.bind(this)}>
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
    )}
  }

  addButton(){
    this.setState({ expand : !this.state.expand })
  }

  submitForm(event){
    event.preventDefault();
    this.props.createTarget(event);
    this.setState({ expand: !this.state.expand })
  }

}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ createTarget }, dispatch);
}

export default connect(null, mapDispatchToProps)(TargetForm);
