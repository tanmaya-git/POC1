import React from 'react';

import axios from 'axios';

export default class List extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://138.68.251.108:9200/retailpoc/_search?pretty`)
      .then(res => {
        console.log(res.data.hits.hits);
        const persons = res.data.hits.hits;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person._source.catalogItem.transactions.transactionId}</li>)}
      </ul>
    )
  }
}

