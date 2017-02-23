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
    <div className="close_form"  id="form" onClick={this.addButton.bind(this)}><img src="/glyphicons-191-plus-sign.png" />     Add Target</div>)}
    else{
    return (
    <div className="box" id="form" >
      <div className="close_form"><img src="/glyphicons-193-remove-sign.png" onClick={this.addButton.bind(this)}/></div>
      <form onSubmit={this.submitForm.bind(this)}>
        <div className="expand">
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
        <p>Financial Performance:<select>
          <option value="Good" >Good</option>
          <option value="Excellent" >Excellent</option>
          <option value="Bad" >Bad</option>
          <option value="Perilous" >Perilous</option>
        </select></p>
        <div><p>Key Contacts:</p>
          <ul className="contact_field" >Title:    <input type="text" name="title" required="required"/><br/>
                        Name:  <input type="text" name="name" required="required"/></ul>
          <ul className="contact_field" >Title:    <input type="text" name="title" required="required"/><br/>
                        Name:  <input type="text" name="name" required="required"/></ul>
        </div></div>
        <input type="submit" className="btn btn-primary btn-sm active"/>
      </form>
    </div>
    )}
  }

  addButton(event){
    event.preventDefault()
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
