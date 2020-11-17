
import ReactDOM from 'react-dom';
import React from 'react';
import App from './app.js';


class Main extends React.Component {

  constructor() {

    super();

    this.state = {
      url: null,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target);

    console.log(e.target.name);
  
  }

  render() {
    return (
     
      < App />
  
    );
  }
}


// attach our React App to our 
const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);