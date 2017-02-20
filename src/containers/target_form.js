import React, { Component } from 'react';
import $ from 'jquery';

export default class TargetForm extends Component {
  render() {
    return (
    <div>
      <form>
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
          <ul><input type="radio" name="financial_performance" value="Perilous"/> Perious </ul>
        </p>
        <div><p>Key Contacts:</p>
          <ul className="contact_field" >Title: <input type="text" name="title" required="required"/>
                        Name: <input type="text" name="name" required="required"/></ul>
                        <ul><input type="button" value="add" onClick={this.addContact()}/></ul>

        </div>
        <input type="submit" />
      </form>
    </div>
    );
  }

  addContact(){
    let contact = '<div><ul>Title: <input type="text" name="title" required="required"/> Name: <input type="text" name="name" required="required"/></ul></div>'
    $( ".contact_field" ).append( $( contact ) );
  }
}
