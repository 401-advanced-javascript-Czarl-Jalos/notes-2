import React from 'react';

class Results extends React.Component {

  render () {

    let value = this.props.value.results || [];


    return (
      <>
        <ul>
          {value.map(person => <li key={person.name}>{person.name}</li>)}
        </ul>
      </>
    );
  }
}

export default Results;