import React, { Component } from 'react';
import { connect } from 'react-redux';

import Target from '../containers/target';

class TargetList extends Component {

  render() {
    return (
    <div>
      {this.renderTargets()}
    </div>
    );
  }

  renderTargets(){
    let list = this.props.targets.map(function(target,index){
      return (
        <div>
          <Target name={target.name} index={index}/>
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
