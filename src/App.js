import logo from './logo.svg';
import './App.css';
import LineGraph from './LineGraph';
import React, { useEffect } from "react";
import * as d3 from "d3";
import DropDown from './DropDown';

function App() {

  return (
    <div className="App">
      <div> Researcher Dashboard</div>
      <div>
        <DropDown />
      </div>
      <LineGraph/>
      <LineGraph/>
    </div>
  );
}

export default App;
