import React, { useEffect, useState } from "react";
import * as d3 from "d3";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function DropDown2() {
    const [age, setAge] = useState("");

    function handleChange(event) {
      setAge(event.target.value);
    }

return (
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Chronic Pain History
</InputLabel>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Chronic Pain History"
    onChange={handleChange}
    >
    <MenuItem value={10}>Both With Chronic Pain and Without</MenuItem>
    <MenuItem value={20}>Only Chronic Pain</MenuItem>
    <MenuItem value={30}>Only Without Chronic Pain</MenuItem>
    </Select>
    </FormControl>
);
}
 export default DropDown2;

