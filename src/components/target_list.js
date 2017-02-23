import React, { Component } from 'react';
import { connect } from 'react-redux';

import Target from '../containers/target';
import TargetForm from '../containers/target_form'


class TargetList extends Component {

  render() {
    return (
    <div>
      <h1> List of Targets </h1>
      <TargetForm />
      {this.renderTargets()}
    </div>
    );
  }

  renderTargets(){
    let list = this.props.targets.map(function(target,index){
      return (
        <div >
          <Target target={target} index={index}/>
        </div>
      )
    });
    return (<div>{list}</div>)
  }

}

function mapStateToProps({ targets }){
  return { targets }
}

export default connect(mapStateToProps)(TargetList)
