import logo from './logo.svg';
import './App.css';
import barChart from './Bar';
import LineGraph from './LineGraph';
import React, { useEffect } from "react";
import * as d3 from "d3";

function App() {

  return (
    <div className="App">
      <div> Researcher Dashboard</div>
      <div>
        
      </div>
      <LineGraph/>
      <LineGraph/>
    </div>
  );
}

export default App;
