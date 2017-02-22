import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EditTarget from './edit_target';
import deleteTarget from '../actions/delete_target';

class TargetExpand extends Component {

  constructor(props){
    super(props);
    this.state = {edit: false}
  }

  render() {

      return(
        <div>
            {this.renderTargetOrEdit()}
        </div>
      )

  }

  renderTargetOrEdit(){
    debugger
    let target = this.props.target;
      let list = target.key_contacts.map(function(contact){
        for(let key in contact) {
          let value = contact[key];
          return(
            <ul>{key}: {value}</ul>
          )
        }
      });

      if(this.state.edit === true){
        var render = <EditTarget  showCloseForm={this.showCloseForm.bind(this)} target={target} index={this.props.index} edit={this.state.edit}/>
        }
      else{
        var render = <div><p>Status: {target.status}</p>
                  <p>Company Info:</p>
                    <ul>Industry: {target.company_info.industry}</ul>
                  <p>Financial Performance: {target.financial_performance}</p>
                  <div><p>Key Contacts:</p><div>{list}</div></div>
                  <input type="button" value="edit" onClick={this.showCloseForm.bind(this)}/>
                  <input type="button" value="delete" onClick={this.deleteButton.bind(this)}/></div>
        }

        return render;
  }

  showCloseForm(event){
    this.setState({edit: !this.state.edit})
  }

  deleteButton(event){
    event.preventDefault()
    this.props.deleteTarget(this.props.targets, this.props.index);
  }


}

function mapStateToProps({targets}){
  return { targets }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteTarget }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetExpand);
