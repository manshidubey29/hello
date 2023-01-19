import React, {useState} from 'react';
import Welcome from './welcome'

function App() {


  const [text, setText] = useState("");

    const handleOnChnage = (event) =>{
        setText(event.target.value);
    }

return (
  <>

    <p>Enter your name 
      <input type="text" className='mx-2' value={text} onChange={handleOnChnage}/>
      
    </p>
          
    <Welcome name = {text}/>
  

  </>
);
}

export default App;
