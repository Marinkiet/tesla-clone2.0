import React from 'react';
import logo from './logo.svg';import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import carSlice from './features/car/carSlice';
import './App.css';
function App() {
  return (
    <div className="App ">
      <Header/>
      <Home/>
      
    </div>
 
  

  );
}

export default App;
