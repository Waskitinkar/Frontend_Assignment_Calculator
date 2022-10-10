import React from 'react';

import './input.css';


const Input = ({text, result}) =>{
    return [
        <div key={45} className='InputWrapper'>
            <div className='Result'><h1>{result}</h1></div>
            <div className="Text"><h3>{text}</h3></div>
        </div>
    ]
 }
 export default Input