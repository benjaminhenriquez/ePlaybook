import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TargetExpand from './target_expand';

import '../index.css'

class Target extends Component {

  constructor(props){
    super(props);
    this.state = {expand: false }
  }

  render() {
    return (
    <div >
    <div className="target_name"><h2 onClick={this.expand.bind(this)}>{this.props.target.name}</h2></div>
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
        <div className="expand">
        <TargetExpand target={target} index={this.props.index} expand={this.expand.bind(this)}/>
        </div>
      )
    }
}
}

function mapStateToProps({targets}){
  return { targets }
}



export default connect(mapStateToProps)(Target);
