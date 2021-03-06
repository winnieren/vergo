import React, { useEffect, useState } from "react";
import * as d3 from "d3";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function DropDown() {
    const [age, setAge] = useState("");

    function handleChange(event) {
      setAge(event.target.value);
    }

return (
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Graph Positions</InputLabel>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Graph Positions"
    onChange={handleChange}
    >
    <MenuItem value={10}>x-position</MenuItem>
    <MenuItem value={20}>y-position</MenuItem>
    <MenuItem value={30}>z-position</MenuItem>
    </Select>
    </FormControl>
);
}
 export default DropDown;

