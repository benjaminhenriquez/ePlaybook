import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import deleteTarget from '../actions/delete_target';
import editTarget from '../actions/edit_target';

class EditTarget extends Component {

render(){
  let target = this.props.target
  return(
    <div>
      <input type="button" value="Minimize Form" onClick={this.props.showCloseForm.bind(this)}/>
      <form onSubmit={this.editButton.bind(this)}>
        <p>Company Name: <input type="text" name="name" required="required" value={target.name}/></p>
        <div>{this.renderStatus()}</div>
        <div><p>Company Info:</p>
          <ul>Industry: <input type="text" name="industry" required="required" value={target.company_info.industry}/></ul>
        </div>
        <div>
          {this.renderFinancialPerformance()}
        </div>
        <div><p>Key Contacts:</p>
            {this.renderKeyContacts()}
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

renderStatus(){
  let status=["Researching","Pending Approval","Approved","Declined"]
  let array=["","","",""]
  array[status.indexOf(this.props.target.status)] = "selected"
  return (<p>Status: <select>
    <option value="Researching" selected={array[0]}>Researching</option>
    <option value="Pending Approval" selected={array[1]}>Pending Approval</option>
    <option value="Approved" selected={array[2]}>Approved</option>
    <option value="Declined" selected={array[3]}>Declined</option>
  </select></p>)
}

renderFinancialPerformance(){
  let status=["Good","Excellent","Bad","Perilous"]
  let array=["","","",""]
  array[status.indexOf(this.props.target.financial_performance)] = "selected"
return ( <div><p>Financial Performance:  <select>
  <option value="Good" selected={array[0]}>Good</option>
  <option value="Excellent" selected={array[1]}>Excellent</option>
  <option value="Bad" selected={array[2]}>Bad</option>
  <option value="Perilous" selected={array[3]}>Perilous</option>
</select></p></div>)
}

renderKeyContacts(){
  let list = this.props.target.key_contacts.map( function(contact){
    for(let title in contact) {
      let name = contact[title];
      return(
        <ul className="contact_field" >Title:    <input type="text" name="title" required="required" value={title}/><br/>
                      Name:  <input type="text" name="name" required="required" value={name}/></ul>
      )
    }
  });
  return <div>{list}</div>;
}



editButton(event){
  event.preventDefault()
  debugger
  // this.props.editTarget(this.props.targets)
}

}

function mapStateToProps({targets}){
  return { targets }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteTarget, editTarget }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTarget);
