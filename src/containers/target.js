import React, { Component } from 'react';

export default class Target extends Component {

  constructor(props){
    super(props);
    this.state = {expand: false }
    // check this
  }

  render() {
    // create an if statement that renders name of target and if clicked it renders all of info
    return (
    <div onClick={this.expand.bind(this)}>
    {this.props.name}
    {this.props.index}
    </div>
    );
  }

  expand(){
    //set the state to true
    //when the state is true expand the render to include the rest of the information
    //there should be an edit and delete button
  }


}
