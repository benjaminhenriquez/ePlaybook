import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TargetExpand from './target_expand';

class Target extends Component {

  constructor(props){
    super(props);
    this.state = {expand: false }
  }

  render() {
    return (
    <div >
    <div><h2 onClick={this.expand.bind(this)}>{this.props.target.name}</h2></div>
      {this.renderTargetInfo()}
    </div>
    );
  }

  expand(event){
    this.setState({ expand : !this.state.expand });
  }

  renderTargetInfo(){
    let target = this.props.target;
    if(this.state.expand===true){
      return(
        <div>
        <TargetExpand target={target} index={this.props.index}/>
        </div>
      )
    }
}
}

function mapStateToProps({targets}){
  return { targets }
}



export default connect(mapStateToProps)(Target);
