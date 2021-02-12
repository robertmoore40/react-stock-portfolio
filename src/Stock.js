import React from 'react';
import Plot from 'react-plotly.js';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
      stockChartYValues: []
    }
}

componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);