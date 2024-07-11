import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [numberId, setNumberId] = useState('p');
  const [numbersBefore, setNumbersBefore] = useState([]);
  const [numbersAfter, setNumbersAfter] = useState([]);
  const [average, setAverage] = useState(0);

  const fetchNumbers = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/numbers/${numberId}`);
      setNumbersBefore(response.data.numbersBefore);
      setNumbersAfter(response.data.numbersAfter);
      setAverage(response.data.average);
    } catch (error) {
      console.error("There was an error fetching the numbers!", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Average Calculator</h1>
        <select value={numberId} onChange={(e) => setNumberId(e.target.value)}>
          <option value="p">Prime</option>
          <option value="f">Fibonacci</option>
          <option value="e">Even</option>
          <option value="r">Random</option>
        </select>
        <button onClick={fetchNumbers}>Fetch Numbers</button>
        <div>
          <h2>Numbers Before:</h2>
          <p>{numbersBefore.join(', ')}</p>
        </div>
        <div>
          <h2>Numbers After:</h2>
          <p>{numbersAfter.join(', ')}</p>
        </div>
        <div>
          <h2>Average:</h2>
          <p>{average}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
