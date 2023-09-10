import React from 'react';
//create routes here
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Auth/Login/Login';
import AddNewTransaction from './components/NewTransaction/AddNewTransaction';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/new_transaction" element={<AddNewTransaction/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
