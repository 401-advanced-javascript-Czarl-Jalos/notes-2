import React from 'react';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Form from './components/form/form.jsx';
import Results from './components/results/results.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      value: [],
      url: '',
      method: '',
    };
  }

  // this function updates our state for the people component
  handleList = (payload,link, rest) => {
    this.setState({ value: payload, url: link, method: rest });
    console.log(this.state);
  }

  render() {
    return (

      <div className="main">
        <Header/>
        <Form handleList={this.handleList}/>
        <Results value={this.state}/>
        < Footer/>
      </div>
    );
  }
}

export default App;