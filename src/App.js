import React, { Component } from 'react'
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import Tile from './components/Tile';

class App extends Component {
 render(){
  return (
    <>   
    <BrowserRouter>    
     
                <Route exact path='/' component={Home}/>
                <Route exact path='/game' component={Game}/>
                <Route exact path='/tile' component={Tile}/>
          
      </BrowserRouter>   

    </>  
  )
 }
}

export default App