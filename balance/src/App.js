import Logic from './components/Logic'
import Login from './components/Login'
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { useState, useEffect } from 'react';


function App() {
  const [token, setToken] = useState('');


  const rememberMe = localStorage.getItem('token') === 'true';

  return (

<div className="wrapper">
    
      <BrowserRouter>
      <Switch>
          <Route path="/logic">
            {
              rememberMe ? <Logic />:<Login />
            }
            
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      
      </BrowserRouter>
</div>
  
  );
}

export default App;
