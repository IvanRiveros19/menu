import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import {MenuCafeteria} from './components/menuCafeteria';
import {MenuBurritos} from './components/menuBurritos';

function App() {
  return (

    <div className = "App">
      {MenuCafeteria()}
      <br/>
      {MenuBurritos()}
    </div>
  );
}

export default App;
