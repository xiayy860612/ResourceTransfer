import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

function App() {
  return (
    <div className="container">
      <h1>Hello World React!!!</h1>
      <Profile name="Xyy" age="20" />
    </div>
  );
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
