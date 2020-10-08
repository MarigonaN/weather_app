import React from 'react';
import './App.css';
const api = {
  key: "0684a775a33c8fc0913a16707b9eaf1a",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
      </main>
    </div>
  );
}

export default App;
