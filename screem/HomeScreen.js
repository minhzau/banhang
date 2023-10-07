import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="search-bar">
        <span className="search-icon">&#128269;</span>
        <input type="text" placeholder="Search" />
        <span className="edit-icon">&#9998;</span>
      </header>
      <main>
        <div className="content">
          <img src="path_to_image.jpg" alt="One Mission Bay" />
          <div className="text">
            <h2>One Mission Bay</h2>
            <p>14 days ago</p>
          </div>
        </div>
        <div className="additional-info">
          <span className="info-left">San</span>
          <span className="info-right">123</span>
        </div>
      </main>
    </div>
  );
}

export default App;
