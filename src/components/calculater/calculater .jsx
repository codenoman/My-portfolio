import React, { useState } from 'react';
import './calculater.css'; // Make sure to import your CSS file

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');

  const display = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const Clear = () => {
    setInputValue('');
  };

  const Del = () => {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };

  const calculate = () => {
    try {
      setInputValue(eval(inputValue).toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  return (
    <div className='calculater-main'>
      <h1 className="text-center">Welcome to Calculator !</h1>
      <div className="container">
        <div className="calculater">
          <input
            id="out"
            type="text"
            className="input"
            placeholder="00000000"
            value={inputValue}
            readOnly
          />
          <div className="row"></div>
          <div className="row">
            <button id="blue" onClick={() => Clear()}>
              C
            </button>
            <button id="blue" onClick={() => Del()}>
              DEL
            </button>
            <button id="blue" onClick={() => display('%')}>
              %
            </button>
            <button id="blue" onClick={() => display('m-')}>
              m-
            </button>
          </div>
          <div className="row">
            <button onClick={() => display('7')}>7</button>
            <button onClick={() => display('8')}>8</button>
            <button onClick={() => display('9')}>9</button>
            <button onClick={() => display('*')}>*</button>
          </div>
          <div className="row">
            <button onClick={() => display('4')}>4</button>
            <button onClick={() => display('5')}>5</button>
            <button onClick={() => display('6')}>6</button>
            <button onClick={() => display('/')}>/</button>
          </div>
          <div className="row">
            <button onClick={() => display('1')}>1</button>
            <button onClick={() => display('2')}>2</button>
            <button onClick={() => display('3')}>3</button>
            <button onClick={() => display('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={() => display('0')}>0</button>
            <button onClick={() => display('.')}>.</button>
            <button className="equal" onClick={() => calculate()}>
              =
            </button>
            <button onClick={() => display('-')}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
