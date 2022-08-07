import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message, 
      type: type
    })
  }   
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#050b1c';
      showAlert("Dark Mode has been enabled", "Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "Success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/">
          <TextForm heading="Enter the text to analyze below" mode={mode}/>
          </Route>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
    </Switch>
    </div>  
    </Router>
    </>
  );
}

export default App;
