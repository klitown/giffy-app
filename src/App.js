import React from "react";
import { Route, useLocation } from 'wouter';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import Home from './components/Home';

function App() {

  return (
    <div className="container">
      <Route path='/' component={Home} />
      <Route path="/gif/:keyword" component={ListOfGifs} />
    </div>
  );
}

export default App;