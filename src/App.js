import React from 'react'
import Header from './Components/Header'
import './App.css'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    
    <Router>
      <div className='App'>
      <Header/>
      
 
       <Route exact path="/Checkout" component={Checkout}/>
       <Route exact path="/Home" component={Home}/>
       
           
         
        
  
     
    </div>
    </Router>
 
  );
}

export default App;




