import React from 'react';
import axios from 'axios';

function App() {

  const get = () => {
    axios.get('http://localhost:5000/')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
