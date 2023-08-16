import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === '=') {
      try {
        setValue(eval(value).toString());
      } catch (error) {
        setValue('Error');
      }
    } else if (buttonValue === 'C') {
      setValue('');
    } else if (buttonValue === 'DE') {
      setValue(value.slice(0, -1));
    } else if (buttonValue === '%') {
      setValue((parseFloat(value) / 100).toString());
    } else {
      const lastChar = value.slice(-1);
      if ('%*/+-.'.includes(lastChar) && '%*/+-.'.includes(buttonValue)) {
        setValue(value.slice(0, -1) + buttonValue);
      } else {
        setValue(value + buttonValue);
      }
    }
  };

  return (
    <>
      <h1 className='logo'>Let's Do Some Calculations</h1>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className='display'>
              <input type="text" value={value} readOnly />
            </div>
            <div>
              <input type="button" className='leftSide' value="C" onClick={() => handleButtonClick('C')} />
              <input type="button" className='leftSide' value="DE" onClick={() => handleButtonClick('DE')} />
              <input type="button" className='leftSide' value="%" onClick={() => handleButtonClick('%')} />
              <input type="button" className='rightSide' value="/" onClick={() => handleButtonClick('/')} />
            </div>
            <div>
              <input type="button" className='leftSide' value="7" onClick={e => handleButtonClick(e.target.value)} />
              <input type="button" className='leftSide' value="8" onClick={e => handleButtonClick(e.target.value)} />
              <input type="button" className='leftSide' value="9" onClick={e => handleButtonClick(e.target.value)} />
              <input type="button" className='rightSide' value="*" onClick={() => handleButtonClick('*')} />
            </div>
            <div>
              <input type="button" className='leftSide' value="4" onClick={e => handleButtonClick(e.target.value)} />
              <input type="button" className='leftSide' value="5" onClick={e => handleButtonClick(e.target.value)} />
              <input type="button" className='leftSide' value="6" onClick={e => handleButtonClick(e.target.value)} />
              <input type="button" className='rightSide' value="+" onClick={() => handleButtonClick('+')} />
            </div>
            <div>
              <input type="button" className='leftSide' value="1" onClick={e => handleButtonClick(e.target.value)} />
              <input type="button" className='leftSide' value="2" onClick={e => handleButtonClick(e.target.value)} />
              <input type="button" className='leftSide' value="3" onClick={e => handleButtonClick(e.target.value)} />
              <input type="button" className='rightSide' value="-" onClick={() => handleButtonClick('-')} />
            </div>
            <div>
              <input type="button" className='leftSide' id='zero' value="0" onClick={e => handleButtonClick(e.target.value)} />
              <input type="button" className='leftSide' value="." onClick={() => handleButtonClick('.')} />
              <input type="button" className='rightSide' value="=" onClick={() => handleButtonClick('=')} />
            </div>
          </form>
        </div>
      </div>
      <p className="read-the-docs">
        Do Whatever you Want In Calculations !!
      </p>
    </>
  );
}

export default App;
