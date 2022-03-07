import logo from './logo.svg';
import './App.css';
import LineGraph from './LineGraph';
import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import DropDown from './DropDown';
import DropDown2 from './DropDown2';

function App() {

  return (
    <div className="App">
      <div className="title">
        <h1>Researcher Dashboard</h1>
      </div>
      <div className="container">
        <div className="dropdown">
        <DropDown />
        </div>
        <div className="filter">
        <DropDown2 />
        </div>
        <div className="buttonExport">
          <Button target="_blank" href="https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv">Export</Button>
        </div>
      </div>
      <div className="container">
        <LineGraph/>
        <LineGraph/>
      </div>
    </div>
  );
}

export default App;
