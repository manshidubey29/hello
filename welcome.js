import React, {useState} from 'react';


export default function Welcome(props) {


    const handleClick =()=>{
        
        var hid = document.getElementsByClassName("exp");
        
        if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
            hid[0].style.visibility = "visible";  
        }
    }

  return (  
    <>
        
        <div className="Inputer my-2 ">
            <button onClick={handleClick}>Log In</button>
        </div>
        <div class="exp" style={{visibility:"hidden"}}>
            <h1>Hey ! {props.name}</h1>
            <h2 class="and">Welcome to Lovely Professional University</h2>
        </div>
        <p>Assignment done by Manshi 12018919</p>
        
    </>
  )
}


