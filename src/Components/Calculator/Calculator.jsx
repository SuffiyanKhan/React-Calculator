import React, { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
        document.querySelector('#input').value={result};
        setInput('');
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
    
  };

  return (
    <div className='calculator'>
      <h2>Calculator</h2>
        <div className="mainCalculator">
      <div className='inputOutput'>
        <input placeholder='Output' className='form-control' id='result' type="text" value={result} readOnly />
        <input placeholder='0' className='form-control' id='input' type="text" value={input}  />
      </div>
      <div className='bttnss'>
        <button className='btn btn-light' onClick={() => handleButtonClick('7')}>7</button>
        <button className='btn btn-light' onClick={() => handleButtonClick('8')}>8</button>
        <button className='btn btn-light' onClick={() => handleButtonClick('9')}>9</button>
        <button className='btn btn-light' onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div className='bttnss'>
        <button className='btn btn-light' onClick={() => handleButtonClick('4')}>4</button>
        <button className='btn btn-light' onClick={() => handleButtonClick('5')}>5</button>
        <button className='btn btn-light' onClick={() => handleButtonClick('6')}>6</button>
        <button className='btn btn-light' onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div className='bttnss'>
        <button className='btn btn-light' onClick={() => handleButtonClick('1')}>1</button>
        <button className='btn btn-light' onClick={() => handleButtonClick('2')}>2</button>
        <button className='btn btn-light' onClick={() => handleButtonClick('3')}>3</button>
        <button className='btn btn-light' onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div className='bttnss'>
        <button className='btn btn-light' onClick={() => handleButtonClick('0')}>0</button>
        <button className='btn btn-light' onClick={() => handleButtonClick('+')}>+</button>
        <button className='btn btn-light' onClick={() => handleButtonClick('=')}>=</button>
        <button className='btn btn-light' onClick={() => handleButtonClick('C')}>C</button>
      </div>
      <div className='bttnss'>
      </div>
        </div>
    </div>
  );
};

export default Calculator;
