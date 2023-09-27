import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './Main';
import React from 'react'
import './Cards.css'; // Import your CSS file
import Header from './Header';



function App() {
  return (
    <body>
      <div className="App">
        <Header />
        <Cards />
      </div>
    </body>
  );

}

export default App;
