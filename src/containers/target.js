import React, { Component } from 'react';

export default class Target extends Component {

  constructor(props){
    super(props);
    this.state = {expand: false }
  }

  render() {
    return (
    <div onClick={this.expand.bind(this)}>
      {this.renderTargetInfo()}
    </div>
    );
  }

  expand(event){
    this.setState({ expand : !this.state.expand });
  }

  renderTargetInfo(){
     return (this.state.expand === false ? renderName(this.props) : renderFull(this.props))

     function renderName(props){
       let target = props.target;
      return(
        <div><h2>{target.name}</h2></div>
      )
    }

      function renderFull(props){

        let target = props.target;
        let contacts = function(contacts){
        let list = contacts.map(function(contact){
          for(let key in contact) {
            let value = contact[key];
            return(
              <ul>{key}: {value}</ul>
            )
          }})
          return list
        }


      return(
        <div>
          <h2>Company Name: {target.name}</h2>
          <p>Status: {target.status}</p>
          <p>Company Info:</p>
            <ul>Industry: {target.company_info.industry}</ul>
          <p>Financial Performance: {target.financial_performance}</p>
          <div><p>Key Contacts:</p><div>{contacts(target.key_contacts)}</div></div>
          <input type="button" value="edit" />
          <input type="button" value="delete" />
        </div>
      )
    }

  }

}
