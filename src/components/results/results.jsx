import React from 'react';

class Results extends React.Component {

  render () {

    let value = this.props.value.results || [];


    return (
      <>
      <pre>
        <code>
            <p>{JSON.stringify(value, null, 2)}</p>
        </code>
     </pre>
      </>
    );
  }
}

export default Results;