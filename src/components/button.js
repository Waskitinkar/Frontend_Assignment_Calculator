import React from 'react';
import './button.css';


const Button = ({symbols, color, handleClick}) => {
return [
        <div key={40}
        onClick={() => handleClick(symbols)}
        className='Btn-Wrapper' style={{backgroundColor: color}}>
                {symbols}</div>
        ]
}

// 
export default Button