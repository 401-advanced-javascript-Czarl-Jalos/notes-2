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
    };
  }

  // this function updates our state for the people component
  handleList = (payload) => {
    this.setState({ value: payload });
    console.log(this.state);
  }

  render() {
    return (

      <div className="main">
        <Header/>
        <Form handleList={this.handleList}/>
        <Results value={this.state.value}/>
        < Footer/>
      </div>
    );
  }
}

export default App;