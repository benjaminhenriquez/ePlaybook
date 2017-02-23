import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarChart, XAxis, YAxis, Bar, CustomAxisTick, CustomBarLabel, CartesianGrid, Tooltip, Legend} from 'recharts';

class Data extends Component {


  render() {
    let finance_data = this.financial(this.props.targets)
    let status_data = this.status(this.props.targets)
    let industry_data = this.industry(this.props.targets)

    return (
    <div className="graphs">
    <h3>Financial Performance</h3>
    <BarChart width={400} height={400} data={finance_data}>
      <XAxis dataKey="name" />
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Financial Performance" fill="#8884d8" />
    </BarChart>
    <BarChart width={400} height={400} data={status_data}>
      <XAxis dataKey="name" />
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Status" fill="#82ca9d" />
    </BarChart>
    <BarChart width={400} height={400} data={industry_data}>
      <XAxis dataKey="name" />
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Industry" fill='#ffc658' />
    </BarChart>
    </div>
    );
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
