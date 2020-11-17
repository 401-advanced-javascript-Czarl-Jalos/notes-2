import React from 'react';
import './form.scss';



class Form extends React.Component {


  constructor(props) {
    super(props);
    this.state = { value: '', rest : ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.result = this.state.rest + '   ' + this.state.value;
  }

    

  handleChange(event) {
    this.setState({value: event.target.url.value});
    this.setState({sum: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({value: event.target.url.value});
    console.log(this.result);
  }


  handleClick(event) {
    event.preventDefault();
    this.setState({rest: event.target.value});
  }

  render() {
    let result;
    if(this.state.value) {
      result = this.state.rest + '  ' + this.state.value;
    }
    return ( 
      <form  onSubmit={this.handleSubmit} >
        <div>
          <label>
          URL:
            <input id="url" type="text" name="url" />
          </label>
          <input type="submit" value="GO!" />
          
        </div>
        <div className='button'>

          <input onClick={this.handleClick} type="button" value="GET"/>
          <input onClick={this.handleClick} type="button" value="POST"/>
          <input onClick={this.handleClick} type="button" value="PUT"/>
          <input onClick={this.handleClick} type="button" value="DELETE"/>
        </div>

        <textarea name="result" id="result" cols="90" rows="30" value={result} ></textarea>
      </form>
    );
  }
}

export default Form;