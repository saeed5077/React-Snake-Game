import React, { Component } from "react";
import { Link } from "react-router-dom";
import snake from "./snake.jpg"


class Home extends Component {
  render(){
    return (
      <>
      <div className="mainDiv">         
         <h1>Snake Game</h1>
          <p>This is the Snake Game & its very Interesting!!!!!!</p>
          <Link to="/game">Play Game!!!</Link><br />
         
          </div>
          <img className="snake" src={snake} alt="" /> 
         

      </>
    );
  }
}

export default Home;
