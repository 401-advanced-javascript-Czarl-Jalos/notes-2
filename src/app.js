import React from 'react';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Form from './components/form/form.jsx';

class App extends React.Component {
  render() {
    return (

      <div className="main">
        <Header />
        <Form />
        < Footer />
      </div>
    );
  }
}

export default App;