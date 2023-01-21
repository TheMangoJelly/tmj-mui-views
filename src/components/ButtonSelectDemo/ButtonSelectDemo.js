import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import "./buttonSelectDemo.css";

export default function ButtonSelectDemo() {
  const [age, setAge] = React.useState('Choose');
  const [selected, setSelected] = React.useState('Choose');
  const [show, setShow] = React.useState(false);
  console.log(age)

  // switch (selected) {
  //   case value:
      
  //     break;
  
  //   default:
  //     break;
  // }

  return (
    <Box sx={{ minWidth: 120 }}>
      <Button onClick={() => setShow(!show)} endIcon=<KeyboardArrowDown /> sx={{ minWidth: "100px", backgroundColor: "white", color: "black", border: "1px solid lightgray", marginBottom: "10px" }}>{age}</Button>

      {show && <Stack className='shadow' sx={{ backgroundColor: "white", borderRadius: "5px", position: "absolute", boxShadow: "" }}>

        <MenuItem onClick={(e) => setAge(e.target.value)} sx={{ minWidth: "100px" }} value={"1"}>Today</MenuItem>
        <MenuItem onClick={(e) => setAge(e.target.value)} sx={{ minWidth: "100px" }} value={"2"}>Monday</MenuItem>
        <MenuItem onClick={(e) => setAge(e.target.value)} sx={{ minWidth: "100px" }} value={"3"}>Tuesday</MenuItem>
        <MenuItem onClick={(e) => setAge(e.target.value)} sx={{ minWidth: "100px" }} value={"4"}>wednesday</MenuItem>
      </Stack>}

    </Box>
  );
}