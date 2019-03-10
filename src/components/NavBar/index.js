import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
      <nav>
        <div className="nav-wrapper">
        <a href="#" class="brand-logo">Bob's Burgers Clicky Game</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>Score: {props.score} &nbsp;</li>
        
        <li>High Score:  {props.highScore}</li>
        </ul>
       </div>
      </nav>
  );
}

export default Navbar;