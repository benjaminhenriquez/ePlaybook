import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarChart, XAxis, YAxis, Bar, CustomAxisTick, CustomBarLabel, CartesianGrid, Tooltip, Legend} from 'recharts';

class Data extends Component {
  constructor(props){
    super(props);
    this.state = { graph : "status" }
  }

  render() {
    let finance_data = this.financial(this.props.targets)
    let status_data = this.status(this.props.targets)
    let industry_data = this.industry(this.props.targets)

    if(this.state.graph == "finance"){
    return (
    <div className="graphs">
    <div className="btn-group" role="group" aria-label="...">
      <button type="button" className="btn btn-default" onClick={this.switchFinance.bind(this)}>Performance</button>
      <button type="button" className="btn btn-default" onClick={this.switchStatus.bind(this)}>Status</button>
      <button type="button" className="btn btn-default" onClick={this.switchIndustry.bind(this)}>Industries</button>
    </div>
    <h3>Financial Performance</h3>
    <BarChart width={500} height={400} data={finance_data}>
      <XAxis dataKey="name" />
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Financial Performance" fill="#8884d8" />
    </BarChart></div>)
  }
    else if(this.state.graph == "status"){
      return(
        <div className="graphs">
        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default" onClick={this.switchFinance.bind(this)}>Performance</button>
          <button type="button" className="btn btn-default" onClick={this.switchStatus.bind(this)}>Status</button>
          <button type="button" className="btn btn-default" onClick={this.switchIndustry.bind(this)}>Industries</button>
        </div>
        <h3>Status</h3>
    <BarChart width={500} height={400} data={status_data}>
      <XAxis dataKey="name" />
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Status" fill="#82ca9d" />
    </BarChart></div>)
  }
    else if(this.state.graph == "industry"){
      return(
        <div className="graphs">
        <div className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default" onClick={this.switchFinance.bind(this)}>Performance</button>
          <button type="button" className="btn btn-default" onClick={this.switchStatus.bind(this)}>Status</button>
          <button type="button" className="btn btn-default" onClick={this.switchIndustry.bind(this)}>Industries</button>
        </div>
        <h3>Industries</h3>
        <BarChart width={500} height={400} data={industry_data}>
      <XAxis dataKey="name" />
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Industry" fill='#ffc658' />
    </BarChart></div>)
  }
  }

  switchFinance(e){
    e.preventDefault;
    this.setState({graph: "finance"})
  }

  switchStatus(e){
    e.preventDefault;
    this.setState({graph: "status"})
  }

  switchIndustry(e){
    e.preventDefault;
    this.setState({graph: "industry"})
  }

  financial(array){
    let newObj = {}
    array.map(function(o){
      newObj[o.financial_performance]? newObj[o.financial_performance]++ : newObj[o.financial_performance] = 1;
    })

    let newArray = [];
    for(let key in newObj) {
      let number = newObj[key];

        newArray.push({name: key, "Financial Performance": number})
  }

    return newArray;
  }

  status(array){
    let newObj = {}
    array.map(function(o){
      newObj[o.status]? newObj[o.status]++ : newObj[o.status] = 1;
    })

    let newArray = [];
    for(let key in newObj) {
      let number = newObj[key];

        newArray.push({name: key, "Status": number})
  }

    return newArray;
  }


industry(array){
  let newObj = {}
  array.map(function(o){
    newObj[o.company_info.industry]? newObj[o.company_info.industry]++ : newObj[o.company_info.industry] = 1;
  })

  let newArray = [];
  for(let key in newObj) {
    let number = newObj[key];

      newArray.push({name: key, "Industry": number})
}

  return newArray;
}

}

function mapStateToProps({ targets }){
  return { targets }
}

export default connect(mapStateToProps)(Data);
