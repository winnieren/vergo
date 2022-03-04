import logo from './logo.svg';
import './App.css';
import LineGraph from './LineGraph';
import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import DropDown from './DropDown';

function App() {

  return (
    <div className="App">
      <div> Researcher Dashboard</div>
      <div>
        <DropDown />
        <Button>Export</Button>
      </div>
      <LineGraph/>
      <LineGraph/>
    </div>
  );
}

export default App;
