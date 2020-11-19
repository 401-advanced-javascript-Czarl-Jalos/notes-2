import React from 'react';

class Results extends React.Component {

  render () {
    console.log(this.props);
    let value = this.props.value.value.results || [];
    let method = this.props.value.method;
    let url = this.props.value.url;


    return (
      <>
        <pre>
          <code>
            <p>{method} {url}<br/>{JSON.stringify(value, null, 2)}</p>
          </code>
        </pre>
      </>
    );
  }
}

export default Results;