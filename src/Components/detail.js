import React from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import './List.css';

export default class List extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://138.68.251.108:9200/retailpocdev/_search?pretty`)
      .then(res => {
        console.log(res.data.hits.hits);
        const persons = res.data.hits.hits;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
       "hello world"
  </div>
    )
  }
}
