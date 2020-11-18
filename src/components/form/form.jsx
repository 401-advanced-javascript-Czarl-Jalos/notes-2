import React from 'react';
import './form.scss';



function Form(props) {
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    const response = await fetch(url);
    const data = await response.json();

 
    props.handleList(data);
    
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

        <input type="button" value="GET"/>
        <input type="button" value="POST"/>
        <input type="button" value="PUT"/>
        <input type="button" value="DELETE"/>
      </div>

     
    </form>
  );
}


export default Form;