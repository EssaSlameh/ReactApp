import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import './Modal.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';




function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' Component={HomePage}></Route>
          <Route path='/Browse' Component={Main}></Route>
        </Routes>
      </Router>
    </div>
  );

}

export default App;
