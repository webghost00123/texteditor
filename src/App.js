import React from 'react';
import FormText from './components/FormText';
import NavBar from './components/NavBar';
import { useState } from 'react';
function App(){
  const [toggle, setToggle] = useState(true)
  const [mode, setMode] = useState('light');

  const handleToggle = ()=>{
    if(toggle===true){
      setToggle(false)
      setMode('dark')
    }
    else{
      setToggle(true)
      setMode('light')
    }
  }
  console.log(mode)
  return (
    <>
      <NavBar logo="Text Formatter" mode={mode} toggle={toggle}/>
      <div className="container">
        <FormText heading="Please enter text below" />
      </div>
    </>
  );
}



export default App;
