import React from 'react';
import './App.css';
import Button from './components/button'
import Input from './components/input'
import {useState} from 'react';
import * as math from 'mathjs';


 const App = () => {

  const [text, setText] = useState("");
  
  const [result, setResult] = useState(" ");

  const addToText = (val) =>{
    setText((text) =>[...text, val + " "]);
  };

  const calculateResult = () =>{
    const input = text.join("");
    setResult(math.evaluate(input));
  };

  const resetInput = () =>{
    setText("")
    setResult("")
  };

  const buttonColour = "yellow";

  return (
    
    <div className="App">
      
           <div className="CalculatorWrapper">
           <Input text={text} result={result}/>
           <div className='Row'handleClick={addToText}>
           <Button symbols="7" handleClick={addToText}/>
           <Button symbols="8" handleClick={addToText}/>
           <Button symbols="9" handleClick={addToText}/>
           <Button symbols="/" color={buttonColour} handleClick={addToText}/>
            </div>
            <div className='Row'>
           <Button symbols="4" handleClick={addToText}/>
           <Button symbols="5" handleClick={addToText}/>
           <Button symbols="6" handleClick={addToText}/>
           <Button symbols="*" color={buttonColour} handleClick={addToText}/>
            </div>
            <div className='Row'>
           <Button symbols="1" handleClick={addToText}/>
           <Button symbols="2" handleClick={addToText}/>
           <Button symbols="3" handleClick={addToText}/>
           <Button symbols="+" color={buttonColour} handleClick={addToText}/>
            </div>
            <div className='Row'>
           <Button symbols="0" handleClick={addToText}/>
           <Button symbols="." handleClick={addToText}/>
           <Button symbols="=" handleClick={calculateResult}/>
           <Button symbols="-"color={buttonColour} handleClick={addToText}/>
            </div>
            <Button symbols="Clear"color= 'blue'handleClick={resetInput}/>
            </div>
  
          </div>
  );
}

export default App;
