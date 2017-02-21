import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TargetExpand from './target_expand';
import showEditFormAction from '../actions/edit_form';
import expandTargetAction from '../actions/expand_target';

class Target extends Component {

  render() {
    return (
    <div onClick={this.expand.bind(this)}>
      {this.renderTargetInfo()}
    </div>
    );
  }

  expand(event){
    this.props.expandTargetAction(this.props.expandTarget);
  }

  renderTargetInfo(){
     return (this.props.expandTarget === false ? renderName(this.props) : renderFull(this.props))

     function renderName(props){
       let target = props.target;
      return(
        <div><h2>{target.name}</h2></div>
      )
    }

      function renderFull(props){

      return(
        <div>
        <TargetExpand target={props.target} index={props.index}/>
        </div>
      )
    }

  }

}

function mapStateToProps({targets, expandTarget, showEditForm }){
  return { targets, expandTarget, showEditForm }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ showEditFormAction, expandTargetAction }, dispatch);
}



export default connect(mapStateToProps,mapDispatchToProps)(Target);
