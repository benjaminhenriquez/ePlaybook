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
        var render = (
                      <div>
                        <div className="close_form"><img src="/glyphicons-151-edit.png" onClick={this.showCloseForm.bind(this)}/></div>
                        <div className="expand">
                          <p>Status: {target.status}</p>
                          <p>Company Info:</p>
                          <ul>Industry: {target.company_info.industry}</ul>
                          <p>Financial Performance: {target.financial_performance}</p>
                          <div><p>Key Contacts:</p><div>{list}</div></div>
                        </div>
                        <div id="buttons" >
                          <input id="delete" className="btn btn-danger btn-sm active" type="button" value="delete" onClick={this.deleteButton.bind(this)}/>
                        </div>
                      </div>
                    )
        }

    return render;
  }

  showCloseForm(event){
    this.setState({edit: !this.state.edit})
  }

  deleteButton(event){
    event.preventDefault()
    this.props.deleteTarget(this.props.targets, this.props.index);
    this.props.expand()
  }


}

function mapStateToProps({targets}){
  return { targets }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteTarget }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetExpand);
