import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="app-container">
      <h1>Counter Quiz</h1>
      <div className="counter-card">
        <div className="count-display">Count: {count}</div>
        <div className="button-row">
          <button onClick={increase}>Pataas</button>
          <button onClick={decrease}>Pababa</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>

      <div className="message-card">
        <label htmlFor="message-input">Type a message:</label>
        <input
          id="message-input"
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Enter text here"
        />
        <p className="live-message">Message: {message || '...'}</p>
      </div>

      {count >= 5 && <div className="goal-banner">Goal Reached!</div>}
    </div>
  );
}

export default App;
