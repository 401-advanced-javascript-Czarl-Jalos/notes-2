import React from 'react';
import './form.scss';



function Form(props) {
 
  let method;

  const handleClick = async (e) => {
    e.preventDefault();
    method = e.target.value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    const response = await fetch(url);
    const data = await response.json();

 
    props.handleList(data, url, method);
    
  };


  return ( 
    <form  onSubmit={handleSubmit} >
      <div>
        <label>
        URL:
          <input id="url" type="text" name="url" />
        </label>
        <input type="submit" value="GO!" />
        
      </div>
      <div className='button'>
        <input onClick={handleClick} type="button" value="GET"/>
        <input onClick={handleClick} type="button" value="POST"/>
        <input onClick={handleClick} type="button" value="PUT"/>
        <input onClick={handleClick} type="button" value="DELETE"/>
      </div>

     
    </form>
  );
}


export default Form;