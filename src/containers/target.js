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

      return(
        <div>
        <TargetExpand target={props.target} index={props.index}/>
        </div>
      )
    }

  }

}

function mapStateToProps({targets}){
  return { targets }
}



export default connect(mapStateToProps)(Target);
