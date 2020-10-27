import React from "react";
import SearchName from "../SearchName";

import "./Nav.css";

function Nav() {
  return (
    
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="row">
          <div class="col-4"></div>
      <div className="search-area col-4">
        <SearchName />
        </div>
        <div class="col-4"></div>
      </div>
      </div>
    // </nav>
  );
}
export default Nav;
