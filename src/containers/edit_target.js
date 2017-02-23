import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import deleteTarget from '../actions/delete_target';
import editTarget from '../actions/edit_target';

class EditTarget extends Component {

  constructor(props){
    super(props);
    let target = this.props.target
    var one = Object.keys(target.key_contacts[0])[0]
    var two = Object.keys(target.key_contacts[1])[0]
    this.state = {
        name:target.name,
        industry: target.company_info.industry,
        key_contact1: one,
        key_contact2: target.key_contacts[0][one],
        key_contact3: two,
        key_contact4: target.key_contacts[1][two]
    }
  }

render(){
  let target = this.state
  return(
    <div>
        <div className="close_form"><img src="/glyphicons-193-remove-sign.png" onClick={this.props.showCloseForm.bind(this)}/></div>
        <form onSubmit={this.editButton.bind(this)}>
          <div className="expand">
            <p>Company Name: <input type="text" name="name" required="required" value={target.name} onChange={event => this.onNameChange(event.target.value)}/></p>
            <div>{this.renderStatus()}</div>
            <div><p>Company Info:</p>
                <ul>Industry: <input type="text" name="industry" required="required" value={target.industry} onChange={event => this.onIndustryChange(event.target.value)}/></ul>
            </div>
            <div>
                {this.renderFinancialPerformance()}
            </div>
            <div><p>Key Contacts:</p>
                <ul className="contact_field" >Title:    <input type="text" name="title" required="required" value={target.key_contact1}  onChange={event => this.onContactChange(event.target.value,"key_contact1")}/><br/>
                Name:  <input type="text" name="name" required="required" value={target.key_contact2} onChange={event => this.onContactChange(event.target.value,"key_contact2")}/></ul>
                <ul className="contact_field" >Title:    <input type="text" name="title" required="required" value={target.key_contact3} onChange={event => this.onContactChange(event.target.value,"key_contact3")}/><br/>
                Name:  <input type="text" name="name" required="required" value={target.key_contact4} onChange={event => this.onContactChange(event.target.value,"key_contact4")}/></ul>
            </div>
          </div>
        <input type="submit" className="btn btn-primary btn-sm active"/>
      </form>
    </div>
  )
}

onNameChange(name){
  this.setState({name});
}

onIndustryChange(industry){
  this.setState({industry});
}

onContactChange(name, contact){
  this.setState({[contact]:name})
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



editButton(event){
event.preventDefault()
this.props.editTarget(event,this.props.targets,this.props.index);
this.props.showCloseForm(event)

}

}

function mapStateToProps({targets}){
  return { targets }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteTarget, editTarget }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTarget);
